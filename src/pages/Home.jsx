import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projectsData";
import ScrollingBanner from "../components/ui/ScrollingBanner";
import PatternColumn from "../components/ui/PatternColumn";
import ProjectDetail from "./ProjectDetail";
import ContactForm from "./ContactForm";
import CustomScrollbar from "../components/ui/CustomScrollbar";
import ThemeSwitch from "../components/ui/ThemeSwitch";

const Home = () => {
  // Gestion de l'affichage des détails de projet et du formulaire de contact
  const [selectedId, setSelectedId] = useState(null);
  const [showContact, setShowContact] = useState(false);
  
  // État pour suivre le thème actuel afin de switcher les fichiers SVG
  const [currentTheme, setCurrentTheme] = useState("light");

  // Référence pour piloter le scroll de la grille via la barre personnalisée
  const scrollContainerRef = useRef(null);

  // Configuration de la transition partagée entre les composants (panneaux et images)
  const sharedTransition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  // Surveillance du changement de thème via MutationObserver
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

  // Recherche de l'objet projet complet correspondant à l'identifiant sélectionné
  const project = projects.find(p => p.id === selectedId);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden font-inter text-brand bg-white relative">
      
      <div className="flex-1 flex overflow-hidden">
        
        {/* Panneau latéral gauche contenant la biographie */}
        <motion.div 
          className="flex h-full flex-shrink-0 z-50 relative"
          animate={{ x: (selectedId || showContact) ? "-25rem" : 0 }}
          transition={sharedTransition}
        >
          <aside className="w-[25.7rem] flex flex-col pl-[4.375rem] pr-[1.5625rem] pt-[4vh] justify-between bg-white flex-shrink-0">
            <div className="flex-shrink-0">
              <h1 className="text-[clamp(1rem,3vh,1.3rem)] font-bold leading-none">LOPES Léa-Anna</h1>
              <h2 className="text-[clamp(0.85rem,2vh,1.125rem)] text-accent text-right">Bordeaux, France</h2>
            </div>

            <div className="flex-1 flex flex-col justify-between min-h-0 pt-[4vh] pb-[2vh]">
              <section>
                <div className="relative pl-[3.5rem] mb-2">
                  <img 
                    src={currentTheme === "dark" ? "/illu-propos-dark.svg" : "/illu-propos.svg"} 
                    alt="" 
                    className="absolute -left-[-25px] -translate-y-2/3 w-[4vh] h-[4vh] object-contain" 
                  />
                  <h3 className="text-[clamp(0.875rem,1.8vh,1rem)] font-bold"> 
                    À propos...</h3>
                </div>
                <p className="text-[clamp(0.85rem,1.8vh,1rem)] leading-tight text-justify whitespace-pre-line">
                  Je développe une pratique à la croisée de la direction artistique numérique, de l’UI design et du Level design, tout en explorant des médiums traditionnels tels que la sérigraphie, la gravure, la peinture et la sculpture.
                  {"\n\n"}
                  Formée à l’École des Gobelins et au CNAM-ENJMIN en Interactive Design, et titulaire d’un Bachelor en Direction Artistique Multimédia ainsi que d’un Master en Arts plastiques, j’articule mon travail entre création numérique et recherche plastique.
                </p>
              </section>

              <section>
                <div className="relative pl-[3rem] mb-2">
              <img 
                src={currentTheme === "dark" ? "/illu-exp-dark.svg" : "/illu-exp.svg"} 
                alt="" 
                className="absolute left-5 -translate-y-2/3 w-6 h-6 object-contain" 
              />
              <h3 className="text-[clamp(0.875rem,1.8vh,1rem)] font-bold">
                Expériences professionnelles...
              </h3>
            </div>
                <p className="text-[clamp(0.85rem,1.8vh,1rem)] leading-tight text-justify whitespace-pre-line">
                  Avec près de 3 ans d’expérience en communication et marketing, j’ai travaillé sur la direction artistique 360°, le community management et le design graphique.
                  {"\n\u00A0"} 
                  J’ai également animé des activités ludopédagogiques autour des TCG et enseigné les arts plastiques en écoles primaires et secondaires.
                </p>
              </section>

              <section className="pl-[3.9rem]">
                <h3 className="text-[clamp(0.85rem,2vh,1.125rem)] mb-2 uppercase">Mes contacts</h3>
                <div className="flex flex-col text-[clamp(0.85rem,1.8vh,1.125rem)]">
                  <a 
                    onClick={(e) => { e.preventDefault(); setShowContact(true); }} 
                    className="flex items-center gap-[12px] hover:text-accent transition-colors no-underline cursor-pointer"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.167429 11.3864L1.24679 13.2559L12.2164 6.92261L13.2958 8.79212L15.1241 7.73657L14.0447 5.86705L15.873 4.8115L14.7936 2.94198L12.9654 3.99754L11.886 2.12802L10.0577 3.18358L11.1371 5.05309L0.167429 11.3864ZM7.15008 2.36962L8.97835 1.31406L10.0577 3.18358L8.22944 4.23913L7.15008 2.36962ZM7.15008 2.36962L5.3218 3.42517L4.24244 1.55566L6.07071 0.500102L7.15008 2.36962ZM12.5469 11.7172L14.3752 10.6616L13.2958 8.79212L11.4675 9.84768L12.5469 11.7172ZM12.5469 11.7172L10.7186 12.7727L11.798 14.6423L13.6263 13.5867L12.5469 11.7172Z" fill="currentColor"/>
                    </svg>
                    M’écrire !
                  </a>
                  <a href="https://pindmie.itch.io/" className="flex items-center gap-[12px] hover:text-accent transition-colors no-underline">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.167429 11.3864L1.24679 13.2559L12.2164 6.92261L13.2958 8.79212L15.1241 7.73657L14.0447 5.86705L15.873 4.8115L14.7936 2.94198L12.9654 3.99754L11.886 2.12802L10.0577 3.18358L11.1371 5.05309L0.167429 11.3864ZM7.15008 2.36962L8.97835 1.31406L10.0577 3.18358L8.22944 4.23913L7.15008 2.36962ZM7.15008 2.36962L5.3218 3.42517L4.24244 1.55566L6.07071 0.500102L7.15008 2.36962ZM12.5469 11.7172L14.3752 10.6616L13.2958 8.79212L11.4675 9.84768L12.5469 11.7172ZM12.5469 11.7172L10.7186 12.7727L11.798 14.6423L13.6263 13.5867L12.5469 11.7172Z" fill="currentColor"/>
                    </svg>
                    Itch.io
                  </a>
                  <a href="/CV - LOPES Léa-Anna 2026.pdf" className="mt-[2vh] flex items-center justify-center gap-[10px] border border-brand px-[12px] py-[4px] mb-[2vh] rounded-full font-bold uppercase text-[clamp(0.7rem,1.5vh,0.9rem)] text-brand bg-white hover:bg-brand hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-[2vh] h-[2vh] transition-colors duration-300">
                      <g clipPath="url(#clip0_1_107)">
                        <path d="M0.167429 11.3864L1.24679 13.2559L12.2164 6.92261L13.2958 8.79212L15.1241 7.73657L14.0447 5.86705L15.873 4.8115L14.7936 2.94198L12.9654 3.99754L11.886 2.12802L10.0577 3.18358L11.1371 5.05309L0.167429 11.3864ZM7.15008 2.36962L8.97835 1.31406L10.0577 3.18358L8.22944 4.23913L7.15008 2.36962ZM7.15008 2.36962L5.3218 3.42517L4.24244 1.55566L6.07071 0.500102L7.15008 2.36962ZM12.5469 11.7172L14.3752 10.6616L13.2958 8.79212L11.4675 9.84768L12.5469 11.7172ZM12.5469 11.7172L10.7186 12.7727L11.798 14.6423L13.6263 13.5867L12.5469 11.7172Z" />
                      </g>
                      <defs><clipPath id="clip0_1_107"><rect width="16" height="15.1111" fill="white"/></clipPath></defs>
                    </svg>
                    Télécharger mon CV
                  </a>
                </div>
              </section>
            </div>
          </aside>
          <div className="flex-shrink-0 bg-white">
            <PatternColumn width="8px"/>
          </div>
        </motion.div>

        {/* Zone centrale principale affichant la grille des travaux */}
        <main className="flex-1 flex flex-col relative bg-white overflow-hidden z-10 pl-2">
          
          <div className="flex-1 flex flex-col min-w-0 h-full">
            {/* Header de la grille */}
            <motion.div 
              layoutId="header-section"
              transition={sharedTransition}
              className="w-full h-[9vh] border-b-2 border-brand flex-shrink-0 relative flex items-center justify-between px-6"
            >
              <div className="flex-1" />
              
              <AnimatePresence mode="wait">
                {(!selectedId && !showContact) && (
                  <div key="header-container" className="flex items-center justify-center">
                    <img 
                      src={currentTheme === "dark" ? "/illu-header-dark.svg" : "/illu-header-main.svg"} 
                      alt="" 
                      className="h-[2.5vh] object-contain pointer-events-none" 
                    />
                  </div>
                )}
              </AnimatePresence>

              <div className="flex-1 flex justify-end items-center gap-3">
                 <AnimatePresence>
                   {(!selectedId && !showContact) && (
                     <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                     >
                        <span className="text-[14px] font-bold uppercase tracking-widest text-brand">Mode</span>
                        <ThemeSwitch />
                     </motion.div>
                   )}
                 </AnimatePresence>
              </div>
            </motion.div>
            
            <div className="flex-1 flex flex-row overflow-hidden min-h-0">
              <div 
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto no-scrollbar"
              >
                <div className="flex flex-wrap gap-[0.8vw]">
                  {projects.map((p, index) => {
                    const isEvenRow = Math.floor(index / 2) % 2 === 0;
                    const isFirstInRow = index % 2 === 0;
                    const isLarge = isEvenRow ? isFirstInRow : !isFirstInRow;
                    
                    return (
                      <div 
                        key={p.id} 
                        onClick={() => setSelectedId(p.id)} 
                        className="cursor-pointer h-[38vh] flex-none"
                        style={{ 
                          width: isLarge 
                            ? "calc(58% - 0.4vw)" 
                            : "calc(42% - 0.4vw)"
                        }}
                      >
                        <div className="w-full h-full bg-gray-50 overflow-hidden border border-brand/10">
                          <motion.img 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            layoutId={`img-${p.id}`}
                            src={p.mainImage.src} 
                            initial={false}
                            className="w-full h-full object-cover origin-center"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {!selectedId && (
                <div className="w-[25px] flex-shrink-0 border-l-2 border-brand bg-white h-full overflow-hidden">
                   <CustomScrollbar scrollRef={scrollContainerRef} />
                </div>
              )}
            </div>

            <AnimatePresence mode="wait">
              {(!selectedId && !showContact) && (
                <div key="footer-container" className="w-full h-[8vh] flex items-center justify-center border-t-2 border-brand flex-shrink-0 px-[4vh]">
                  <img 
                    src={currentTheme === "dark" ? "/illu-footer-dark.svg" : "/illu-footer-main.svg"} 
                    alt="" 
                    className="w-full h-[2.5vh] object-contain" 
                  />
                </div>
              )}
            </AnimatePresence>
          </div>
        </main>

        <div className="h-full z-40 w-[10vw] flex-shrink-0">
          <PatternColumn width="100%" borderLeft={true} className="pl-1 border-l-2 border-brand" />
        </div>
      </div>

      {/* Overlays */}
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
      

      <div className="relative z-[100] border-t-2 border-brand">
        <ScrollingBanner />
      </div>
    </div>
  );
};

export default Home;