import { motion } from "framer-motion";

const ScrollingBanner = () => {
  const text = "Direction artistique - UI ux Design – game et level design – Branding – Web Design – Illustration - COMMUNICATION ET MARKETING";
  
  return (
    <div className="h-[4.375rem] bg-brand overflow-hidden flex items-center border-b border-brand">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="whitespace-nowrap text-white font-raleway italic text-[2.5rem] uppercase"
      >
        {text} — {text} —
      </motion.div>
    </div>
  );
};

export default ScrollingBanner;