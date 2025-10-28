import React from "react";
import {
  Ghost,
  Music,
  Disc,
  Theater,
  MessageSquare,
  Gamepad2,
  Briefcase,
  Coffee,
} from "lucide-react";

const Icons = () => {
  const categories = [
    { name: "Halloween", icon: <Ghost size={40} />, badge: "New" },
    { name: "Music", icon: <Music size={40} /> },
    { name: "Nightlife", icon: <Disc size={40} /> },
    { name: "Performing & Visual Arts", icon: <Theater size={40} /> },
    { name: "Dating", icon: <MessageSquare size={40} /> },
    { name: "Hobbies", icon: <Gamepad2 size={40} /> },
    { name: "Business", icon: <Briefcase size={40} /> },
    { name: "Food & Drink", icon: <Coffee size={40} /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 sm:gap-10 px-4 py-10">
      {categories.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center w-[100px] sm:w-[120px] md:w-[140px]"
        >
          {/* Cercle icône */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-indigo-200 flex items-center justify-center hover:bg-indigo-50 transition duration-300">
            {item.icon}
            {item.badge && (
              <span className="absolute -bottom-2 bg-indigo-700 text-white px-2 py-[2px] rounded-full text-xs">
                {item.badge}
              </span>
            )}
          </div>

          {/* Nom */}
          <p className="mt-3 text-sm sm:text-base font-medium text-gray-900">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Icons;
