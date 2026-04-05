import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Ajout de l'import
import PatternColumn from "../components/ui/PatternColumn";
import ThemeSwitch from "../components/ui/ThemeSwitch";
import emailjs from "@emailjs/browser";
import MobileFooter from "../components/ui/MobileFooter";
import MobileScrollToggle from "../components/ui/MobileScrollToggle.jsx";

const ContactForm = ({ sharedTransition, onClose }) => {
  const form = useRef();
  const navigate = useNavigate(); // Initialisation du hook navigate
  const [currentTheme, setCurrentTheme] = useState("light");
  const [status, setStatus] = useState("idle");
  const scrollAreaRef = useRef(null);

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
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 left-0 bottom-0 z-[600] bg-white flex overflow-hidden font-inter text-brand"
    >
      {/* Panneau latéral (PC uniquement via hidden md:flex) */}
      <motion.div 
        className="hidden md:flex absolute top-0 left-0 h-full flex-shrink-0 z-50 pointer-events-none"
        initial={{ x: 0 }}
        animate={{ x: "-25rem" }} 
        transition={sharedTransition}
      >
        <div className="w-[25.7rem] bg-white h-full" />
        <div className="flex-shrink-0 bg-white pointer-events-auto">
          <PatternColumn width="8px" />
        </div>
      </motion.div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 h-full md:ml-[8px] ">
        {/* Header */}
        <motion.div 
          layoutId="header-section" 
          transition={sharedTransition} 
          className="w-full h-[9vh] border-b-2 border-brand flex-shrink-0 relative flex items-center justify-between px-6 bg-white z-10"
        >
          <button 
            onClick={() => {
              if (onClose) onClose(); // Si on est en mode overlay, on ferme l'état
              navigate("/");          // Dans tous les cas, on retourne à la racine
            }} 
            className="flex items-center gap-1 font-bold uppercase text-brand hover:text-accent transition-colors group"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.35784 11.1113L14.2718 4L16 5.7775L9.95012 12L16 18.2225L14.2718 20L7.35784 12.8887C7.12872 12.653 7 12.3333 7 12C7 11.6667 7.12872 11.347 7.35784 11.1113Z" fill="currentColor"/>
            </svg>
            RETOUR
          </button>

        </motion.div>
        
      <main ref={scrollAreaRef} className="flex-1 flex flex-col bg-white overflow-y-auto md:overflow-hidden no-scrollbar items-center justify-start pt-8 md:pt-[5vh] pb-2 px-[4vh]">
          <AnimatePresence mode="wait">
            {status !== "success" ? (
              <motion.div 
                key="form-content"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="w-full max-w-[1250px] flex flex-col items-center"
              >
                <div className="flex flex-col items-center gap-3 md:gap-4 mb-8 md:mb-10 text-center">
              <img
                src={currentTheme === "dark" ? "/top-form-dark.svg" : "/top-form-main.svg"}
                alt=""
                className="h-[60px] md:h-[12vh] object-contain"
              />

              <div className="flex items-center justify-center gap-2 md:gap-3 w-full">
                <img
                  src={currentTheme === "dark" ? "/header-form-dark.svg" : "/header-form-main.svg"}
                  alt=""
                  className="hidden md:block h-[2.5vh] object-contain shrink-0"
                />

                <h1 className="text-[clamp(1.75rem,7vw,2.5rem)] md:text-5xl font-bold uppercase leading-[0.95] text-center px-1 md:px-2">
                  Donnez vie à votre projet !
                </h1>

                <img
                  src={currentTheme === "dark" ? "/header-form-dark.svg" : "/header-form-main.svg"}
                  alt=""
                  className="hidden md:block h-[2.5vh] object-contain -scale-x-100 shrink-0"
                />
              </div>

              <p className="text-brand text-sm md:text-xl font-medium italic tracking-wider px-2">
                ✦˙⋆˚ Partagez vos idées et créons-les ensemble ˚⋆˙✦
              </p>
            </div>

                <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-6 px-0 md:px-20">
                  <div className="flex flex-col md:flex-row gap-6 w-full">
                    <input type="text" name="name" required placeholder="Nom, Prénom*" className="text-brand placeholder:text-silver placeholder:italic flex-1 border-2 border-brand p-4 md:p-5 focus:outline-none transition-all text-base md:text-lg bg-transparent" />
                    <input type="email" name="email" required placeholder="Adresse mail (e-mail)*" className="text-brand placeholder:text-silver placeholder:italic flex-1 border-2 border-brand p-4 md:p-5 focus:outline-none transition-all text-base md:text-lg bg-transparent" />
                  </div>
                  <div className="flex flex-col">
                    <textarea name="message" required rows="6" placeholder="Votre message ici* ദ്ദി(˵ •̀ ᴗ - ˵ )˚⊹" className="text-brand placeholder:text-silver placeholder:italic flex-1 border-2 border-brand p-4 md:p-5 focus:outline-none transition-all text-base md:text-lg bg-transparent" />
                    <span className="italic text-[10px] md:text-sm opacity-70 self-end mt-2 text-silver text-right">Champs marqués d’une * sont obligatoires.</span>
                  </div>
                  <div className="flex flex-col items-center gap-4 mt-4">
                    {status === "sending" ? (
                      <span className="font-bold text-lg md:text-xl animate-pulse">Mail en cours d'envoi...</span>
                    ) : (
                      <button  type="submit" 
                        className="bg-brand text-white px-5 py-2 rounded-full font-bold uppercase hover:bg-accent transition-all cursor-pointer text-sm md:px-12 md:py-4 md:text-lg"
                      >
                        Envoyer
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div key="success-content" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-[1300px] flex flex-col items-center text-center">
                <img src={currentTheme === "dark" ? "/top-form-dark.svg" : "/top-form-main.svg"} alt="" className="h-[8vh] md:h-[10vh] object-contain mb-4" />
                <span className="text-4xl md:text-6xl mb-6">ദ്ദി(˵ •̀ ᴗ - ˵ )˚⊹</span>
                <div className="flex items-center gap-4 md:gap-8 mb-4">
                     <img src={currentTheme === "dark" ? "/header-form-dark.svg" : "/header-form-main.svg"} alt="" className="h-[1.5vh] md:h-[2.5vh] object-contain" />
                     <h1 className="text-2xl md:text-5xl font-bold uppercase leading-none text-center">Merci !</h1>
                     <img src={currentTheme === "dark" ? "/header-form-dark.svg" : "/header-form-main.svg"} alt="" className="h-[1.5vh] md:h-[2.5vh] object-contain -scale-x-100" />
                </div>
                <p className="text-brand text-sm md:text-xl font-medium italic tracking-wider">✦˙⋆˚ Je reviendrai vers vous rapidement. ˚⋆˙✦</p>
              </motion.div>
            )}
            </AnimatePresence>

          <div className="md:hidden self-stretch mt-6 pb-0 -mx-[4vh]">
            <MobileFooter currentTheme={currentTheme} />
          </div>
        </main>
      </div>
      <div className="hidden md:block h-full z-40 w-[10vw] flex-shrink-0">
        <PatternColumn width="100%" borderLeft={true} className="pl-1 border-l-2 border-brand" />
      </div>
      <MobileScrollToggle scrollRef={scrollAreaRef} bottomOffset="2rem" />
    </motion.div>
  );
};

export default ContactForm;