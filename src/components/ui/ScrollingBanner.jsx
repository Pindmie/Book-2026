import { motion } from "framer-motion";

const ScrollingBanner = () => {
  // Texte du bandeau défilant
  const text = "Direction artistique - UI ux Design – game et level design – Branding – Web Design – Illustration - COMMUNICATION ET MARKETING";
  
  return (
    <div className="h-[4.375rem] bg-brand overflow-hidden flex items-center border-b border-brand">
      <motion.div 
        /* L'astuce : on anime de 0% à -50%. 
           Le texte étant doublé dans le contenu, la transition est invisible.
        */
        animate={{ x: [0, "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          duration: 30, // Ajuste la vitesse ici
          ease: "linear" 
        }}
        className="flex whitespace-nowrap text-white font-raleway italic text-[2.5rem] uppercase"
      >
        {/* On répète le texte deux fois pour combler le vide lors de l'animation */}
        <span className="pr-4">{text} —&nbsp;</span>
        <span className="pr-4">{text} —&nbsp;</span>
      </motion.div>
    </div>
  );
};

export default ScrollingBanner;