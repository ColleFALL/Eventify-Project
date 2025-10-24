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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap",
        padding: "30px",
      }}
    >
      {categories.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "2px solid #e0e7ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.icon}
            {item.badge && (
              <span
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  backgroundColor: "#6d28d9",
                  color: "white",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              >
                {item.badge}
              </span>
            )}
          </div>
          <p
            style={{
              marginTop: "10px",
              fontWeight: "500",
              textAlign: "center",
              color: "#111827",
            }}
          >
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Icons;
