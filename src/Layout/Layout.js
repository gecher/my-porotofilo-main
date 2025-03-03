import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css"; // Ensure this file has Tailwind included

const Layout = ({ children }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });

    const cursor = document.querySelector(".cursor");
    const audio = new Audio(
      require("../assets/audio/mixkit-fast-double-click-on-mouse-275.mp3")
    );

    window.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    window.addEventListener("mousedown", () => {
      cursor.style.height = "35px";
      cursor.style.width = "35px";
      audio.play();
    });

    window.addEventListener("mouseup", () => {
      cursor.style.height = "23px";
      cursor.style.width = "23px";
    });

    return () => {
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("mousedown", () => {});
      window.removeEventListener("mouseup", () => {});
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="flex-grow">{children}</div>
      <div className="cursor"></div>
    </div>
  );
};

export default Layout;
