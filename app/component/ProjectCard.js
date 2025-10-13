import { Play } from "lucide-react";

export default function ProjectCard({ image, name }) {
  return (
    <div
      className="relative group rounded-2xl border-2 custom-dashed-border border-black-300 hover:border-yellow-400 transition-all duration-300 overflow-hidden bg-white p-3"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-t-2xl"
      />

      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-300">
        <button className="bg-white p-4 rounded-full shadow-lg">
          <Play className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      <div className="text-center pt-3">
        <p className="text-lg font-semibold text-gray-800">
          STEPS Robotics Project – {name}
        </p>
      </div>
    </div>
  );
}
