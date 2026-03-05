import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  return (
    <div className="flex flex-col items-center gap-1">
      {/* Label "MODE" au dessus (optionnel car déjà géré dans ta Home, tu peux le supprimer si doublon) */}
      <div 
        onClick={toggleTheme}
        className={`relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          isDark ? "bg-[#262626]" : "bg-[#0ABF00]"
        }`}
      >
        {/* Pastille blanche avec animation de glissement */}
        <motion.div
          className="bg-white w-4 h-4 rounded-full shadow-md"
          animate={{ x: isDark ? 0 : 24 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;