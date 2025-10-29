import { writeFile } from "fs/promises";
import path from "path";
import pool from "@/lib/db";

export async function PUT(req, { params }) {
  const { id } = params;
  const formData = await req.formData();

  const bannerTitle1 = formData.get("bannerTitle1");
  const bannerTitle2 = formData.get("bannerTitle2");
  const paragraph = formData.get("paragraph");
  const buttonName = formData.get("buttonName");
  const buttonLink = formData.get("buttonLink");
  const image = formData.get("image"); // may be null

  try {
    let imageUrl = null;

    // 🖼 If user uploaded a new image file
    if (image && typeof image === "object" && image.name) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), "public/uploads");
      const filePath = path.join(uploadDir, image.name);

      // Save file to /public/uploads
      await writeFile(filePath, buffer);

      // Set image URL relative to public
      imageUrl = `/uploads/${image.name}`;

      // ✅ Update everything including image
      await pool.query(
        `UPDATE banners
         SET banner_title1 = $1, banner_title2 = $2, paragraph = $3,
             button_name = $4, button_link = $5, image = $6
         WHERE id = $7`,
        [bannerTitle1, bannerTitle2, paragraph, buttonName, buttonLink, imageUrl, id]
      );
    } else {
      // ✅ Update only text fields
      await pool.query(
        `UPDATE banners
         SET banner_title1 = $1, banner_title2 = $2, paragraph = $3,
             button_name = $4, button_link = $5
         WHERE id = $6`,
        [bannerTitle1, bannerTitle2, paragraph, buttonName, buttonLink, id]
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("❌ Error updating banner:", err);
    return Response.json({ error: "Failed to update banner" }, { status: 500 });
  }
}


export async function DELETE(req, { params }) {
  try {
    const id = params.id;

    const bannerRes = await pool.query("SELECT * FROM banners WHERE id=$1", [id]);
    const banner = bannerRes.rows[0];

    if (banner?.image) {
      const filePath = path.join(process.cwd(), "public", banner.image);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    await pool.query("DELETE FROM banners WHERE id=$1", [id]);
    return Response.json({ success: true });
  } catch (err) {
    console.error("❌ Error deleting banner:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
