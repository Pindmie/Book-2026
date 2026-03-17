"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BurgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      className="w-10 h-10 relative flex items-center justify-center"
      whileTap={{ scale: 0.9 }}
    >
      {/* SVG X */}
      <motion.img
        src="/Picto_burger_1.svg"
        alt="X"
        className="absolute w-6 h-6"
        animate={{
          rotate: isOpen ? 45 : 0,
          opacity: isOpen ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
      />

      {/* SVG + */}
      <motion.img
        src="/Picto_burger_2.svg"
        alt="+"
        className="absolute w-6 h-6"
        animate={{
          rotate: isOpen ? 0 : -45,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}