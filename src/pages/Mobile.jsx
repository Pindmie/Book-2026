import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projectsData";
import ProjectDetail from "./ProjectDetail";
import ContactForm from "./ContactForm";
import ThemeSwitch from "../components/ui/ThemeSwitch";

const HomeMobile = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [showContact, setShowContact] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const scrollContainerRef = useRef(null);

  const sharedTransition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

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

  const project = projects.find(p => p.id === selectedId);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden font-inter text-brand bg-white relative">
      
      {/* Header avec bouton menu */}
      <header className="flex items-center justify-between px-4 py-3 border-b-2 border-brand">
        <h1 className="font-bold text-lg">LOPES Léa-Anna</h1>
        <button
          onClick={() => setShowMenu(prev => !prev)}
          className="text-brand font-bold px-2 py-1 border border-brand rounded"
        >
          Menu
        </button>
      </header>

      {/* Grille scrollable */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-2">
        <div className="flex flex-wrap gap-2">
          {projects.map((p, index) => (
            <div
              key={p.id}
              onClick={() => setSelectedId(p.id)}
              className="cursor-pointer w-full aspect-[4/3] overflow-hidden border border-brand/10"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                layoutId={`img-${p.id}`}
                src={p.mainImage.src}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay bloc infos / menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={sharedTransition}
            className="absolute top-0 right-0 h-full w-[80%] bg-white z-50 p-4 overflow-y-auto border-l-2 border-brand"
          >
            <button
              onClick={() => setShowMenu(false)}
              className="mb-4 text-brand font-bold px-2 py-1 border border-brand rounded"
            >
              Fermer
            </button>

            {/* Contenu infos (à copier depuis ton aside desktop) */}
            <section>
              <h2 className="font-bold text-base mb-2">À propos</h2>
              <p className="text-sm leading-tight">
                Je travaille sur des projets numériques et artistiques...
              </p>
            </section>

            <section className="mt-4">
              <h2 className="font-bold text-base mb-2">Expériences professionnelles</h2>
              <p className="text-sm leading-tight">
                Avec près de 3 ans d’expérience en communication et marketing...
              </p>
            </section>

            <section className="mt-4">
              <h2 className="font-bold text-base mb-2">Contacts</h2>
              <button onClick={() => setShowContact(true)} className="text-brand underline mb-2">
                M’écrire !
              </button>
            </section>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlays projets et contact */}
      <AnimatePresence>
        {selectedId && (
          <ProjectDetail project={project} onClose={() => setSelectedId(null)} sharedTransition={sharedTransition} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContact && (
          <ContactForm onClose={() => setShowContact(false)} sharedTransition={sharedTransition} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeMobile;