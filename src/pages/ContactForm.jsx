import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import PatternColumn from "../components/ui/PatternColumn";
import ThemeSwitch from "../components/ui/ThemeSwitch";
import emailjs from "@emailjs/browser";

const ContactForm = ({ onClose, sharedTransition }) => {
  const form = useRef();
  const [currentTheme, setCurrentTheme] = useState("light");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      setCurrentTheme(theme);
    };
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    updateTheme();
    return () => observer.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    const SERVICE_ID = "service_vskydwl";
    const TEMPLATE_ID = "template_7kd39zn";
    const PUBLIC_KEY = "myhEp6klYn8gEz4dP";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          setStatus("success");
      }, (error) => {
          console.error(error.text);
          setStatus("error");
          setTimeout(() => setStatus("idle"), 3000);
      });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 left-0 bottom-0 z-[60] bg-white flex overflow-hidden font-inter text-brand"
    >
      {/* LA CORRECTION : 
          On met le panneau en absolute + z-50. 
          Il coulisse par dessus le reste, laissant la ligne visible à 8px du bord gauche.
      */}
      <motion.div 
        className="absolute top-0 left-0 h-full flex flex-shrink-0 z-50 pointer-events-none"
        initial={{ x: 0 }}
        animate={{ x: "-25rem" }} 
        transition={sharedTransition}
      >
        <div className="w-[25.7rem] bg-white h-full" />
        <div className="flex-shrink-0 bg-white pointer-events-auto">
          <PatternColumn width="8px" />
        </div>
      </motion.div>

      {/* Le bloc Formulaire commence maintenant bien à 8px du bord gauche 
          pour s'aligner sur la ligne de motifs, et prend tout le reste.
      */}
      <div className="flex-1 flex flex-col min-w-0 h-full ml-[8px]">
        {/* Header */}
        <motion.div 
          layoutId="header-section" 
          transition={sharedTransition} 
          className="w-full h-[9vh] border-b-2 border-brand flex-shrink-0 relative flex items-center justify-between px-6"
        >
          <button 
            onClick={onClose} 
            className="flex items-center gap-1 font-bold uppercase text-brand hover:text-accent transition-colors group cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.35784 11.1113L14.2718 4L16 5.7775L9.95012 12L16 18.2225L14.2718 20L7.35784 12.8887C7.12872 12.653 7 12.3333 7 12C7 11.6667 7.12872 11.347 7.35784 11.1113Z" fill="currentColor"/>
            </svg>
            RETOUR
          </button>

          <div className="flex items-center gap-3">
            <span className="text-[14px] font-bold uppercase tracking-widest text-brand">Mode</span>
            <ThemeSwitch />
          </div>
        </motion.div>

        <main className="flex-1 flex flex-col bg-white overflow-y-auto no-scrollbar items-center justify-center py-[5vh] px-[4vh]">
          <AnimatePresence mode="wait">
            {status !== "success" ? (
              <motion.div 
                key="form-content"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="w-full max-w-[1250px] flex flex-col items-center"
              >
                <div className="flex flex-col items-center gap-4 mb-10 text-center">
                  <img src={currentTheme === "dark" ? "/top-form-dark.svg" : "/top-form-main.svg"} alt="" className="h-[10vh] object-contain" />
                  <div className="flex items-center gap-3">
                     <img src={currentTheme === "dark" ? "/header-form-dark.svg" : "/header-form-main.svg"} alt="" className="h-[2.5vh] object-contain" />
                     <h1 className="text-5xl font-bold uppercase leading-none text-center">Donnez vie à votre projet !</h1>
                     <img src={currentTheme === "dark" ? "/header-form-dark.svg" : "/header-form-main.svg"} alt="" className="h-[2.5vh] object-contain -scale-x-100" />
                  </div>
                  <p className="text-brand text-xl font-medium italic tracking-wider">✦˙⋆˚ Partagez vos idées et créons-les ensemble ˚⋆˙✦</p>
                </div>

                <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-6 px-20">
                  <div className="flex gap-6 w-full">
                    <input type="text" name="name" required placeholder="Nom, Prénom*" className="text-brand placeholder:text-silver placeholder:italic flex-1 border-2 border-brand p-5 focus:outline-none transition-all text-lg" />
                    <input type="email" name="email" required placeholder="Adresse mail (e-mail)*" className="text-brand placeholder:text-silver placeholder:italic flex-1 border-2 border-brand p-5 focus:outline-none transition-all text-lg" />
                  </div>
                  <div className="flex flex-col">
                    <textarea name="message" required rows="7" placeholder="Votre message ici* ദ്ദി(˵ •̀ ᴗ - ˵ )˚⊹" className="text-brand placeholder:text-silver placeholder:italic flex-1 border-2 border-brand p-5 focus:outline-none transition-all text-lg" />
                    <span className="italic text-sm opacity-70 self-end mt-2 text-silver">Champs marqués d’une * sont obligatoires.</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 mt-4">
                    {status === "sending" ? (
                      <span className="font-bold text-xl animate-pulse">Mail en cours d'envoi...</span>
                    ) : (
                      <button type="submit" className="bg-brand text-white px-12 py-2 rounded-full font-bold uppercase hover:bg-accent transition-all cursor-pointer text-lg">Envoyer</button>
                    )}
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div key="success-content" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-[1300px] flex flex-col items-center">
                <img src={currentTheme === "dark" ? "/top-form-dark.svg" : "/top-form-main.svg"} alt="" className="h-[10vh] object-contain mb-4" />
                <span className="text-6xl mb-6">ദ്ദി(˵ •̀ ᴗ - ˵ )˚⊹</span>
                <div className="flex items-center gap-8 mb-4">
                     <img src={currentTheme === "dark" ? "/header-form-dark.svg" : "/header-form-main.svg"} alt="" className="h-[2.5vh] object-contain" />
                     <h1 className="text-5xl font-bold uppercase leading-none text-center">Merci pour votre message !</h1>
                     <img src={currentTheme === "dark" ? "/header-form-dark.svg" : "/header-form-main.svg"} alt="" className="h-[2.5vh] object-contain -scale-x-100" />
                </div>
                <p className="text-brand text-xl font-medium italic tracking-wider">✦˙⋆˚ Je reviendrai vers vous dans les plus brefs délais. ˚⋆˙✦</p>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <div className="w-full h-[8vh] flex items-center justify-center flex-shrink-0 px-[4vh] bg-white">
          <img src={currentTheme === "dark" ? "/illu-footer-dark.svg" : "/illu-footer-main.svg"} alt="" className="w-full h-[2.5vh] object-contain" />
        </div>
      </div>

      {/* Pattern de droite */}
      <div className="h-full z-40 w-[10vw] flex-shrink-0">
        <PatternColumn width="100%" borderLeft={true} className="pl-1 border-l-2 border-brand" />
      </div>
    </motion.div>
  );
};

export default ContactForm;