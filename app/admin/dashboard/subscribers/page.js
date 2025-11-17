"use client";
import { useEffect, useState } from "react";

export default function SubscribersPage() {
  const [list, setList] = useState([]);

  const load = async () => {
    const res = await fetch("/api/subscribe");
    setList(await res.json());
  };

  const deleteEmail = async (id) => {
    await fetch(`/api/subscribe/${id}`, { method: "DELETE" });
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="py-6 admin-main bg-gray-50 min-h-screen ml-64 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <h1 className="text-xl font-bold mb-4">Subscribers List</h1>

      {list.map((item) => (
        <div key={item.id} className="flex justify-between p-3 border mb-2 rounded-md">
          <div>
            <p>{item.email}</p>
            <p className="text-xs text-gray-500">
              {new Date(item.created_at).toLocaleString()}
            </p>
          </div>

          <button
            onClick={() => deleteEmail(item.id)}
            className="text-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
