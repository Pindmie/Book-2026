import { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useNavigate } from "react-router-dom"; 
import { projects } from "../data/projectsData";
import ScrollingBanner from "../components/ui/ScrollingBanner";
import PatternColumn from "../components/ui/PatternColumn";
import ProjectDetail from "./ProjectDetail";
import ContactForm from "./ContactForm";
import CustomScrollbar from "../components/ui/CustomScrollbar";
import ThemeSwitch from "../components/ui/ThemeSwitch";
import MobileScrollToggle from "../components/ui/MobileScrollToggle.jsx";
import MobileFooter from "../components/ui/MobileFooter";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // 1. Fonction pour transformer un titre en lien propre (slug)
  const slugify = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD") // Sépare les accents des lettres
      .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
      .replace(/\s+/g, '-') // Remplace les espaces par des tirets
      .replace(/[^\w-]+/g, ''); // Supprime les caractères spéciaux
  };

  // 2. On récupère le nom du projet depuis l'URL
  const projectSlug = searchParams.get("project");

  // 3. On trouve le projet dont le titre correspond au slug de l'URL
  const project = useMemo(() => {
    return projects.find(p => slugify(p.title) === projectSlug);
  }, [projectSlug]);

  // 4. On déduit le selectedId pour que tes animations Framer Motion fonctionnent toujours
  const selectedId = project ? project.id : null;

  const [showContact, setShowContact] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const scrollContainerRef = useRef(null);

  const sharedTransition = { 
    duration: 0.6, 
    ease: [0.43, 0.13, 0.23, 0.96] 
  };
  
  // 5. Modification de l'URL avec le titre au clic
  const handleSetSelectedId = (id) => {
    if (id) {
      const targetProject = projects.find(p => p.id === id);
      if (targetProject) {
        setSearchParams({ project: slugify(targetProject.title) }, { replace: false });
      }
    } else {
      setSearchParams({}, { replace: false });
    }
  };

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

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden font-inter text-brand bg-white">
      
      <div className="flex-1 flex overflow-hidden">
        
        <motion.div 
          className="hidden md:flex h-full flex-shrink-0 z-50 relative"
          animate={{ x: (selectedId || showContact) ? "-25rem" : 0 }}
          transition={sharedTransition}
        >
          <aside className="w-[25.7rem] flex flex-col pl-[4.375rem] pr-[1.5625rem] pt-[4vh] justify-between bg-white flex-shrink-0 relative">
            
            <div className="flex-shrink-0">
              <h1 className="text-[clamp(1rem,3vh,1.3rem)] font-bold leading-none">LOPES Léa-Anna</h1>
              <h3 className="text-[clamp(0.85rem,2vh,1.125rem)] text-accent text-right">Bordeaux, France</h3>
            </div>

            <div className="flex-1 flex flex-col justify-between min-h-0 pt-[4vh] pb-[2vh]">
              <section>
                <div className="relative pl-[3.5rem] mb-2">
                  <img 
                    src={currentTheme === "dark" ? "/illu-propos-dark.svg" : "/illu-propos.svg"} 
                    alt="" 
                    className="absolute -left-[-25px] -translate-y-2/3 w-[4vh] h-[4vh] object-contain" 
                  />
                  <h3 className="text-[clamp(0.875rem,1.8vh,1rem)] font-bold">À propos...</h3>
                </div>
                <p className="text-[clamp(0.85rem,1.8vh,1rem)] leading-tight text-justify whitespace-pre-line">
                  Je travaille sur des projets numériques et artistiques, allant de la direction artistique, à l’UI, au design graphique jusqu'au level et game design, tout en pratiquant des techniques traditionnelles comme la sérigraphie, la gravure, la peinture et la sculpture.
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
                  <h3 className="text-[clamp(0.875rem,1.8vh,1rem)] font-bold">Expériences professionnelles...</h3>
                </div>
                <p className="text-[clamp(0.85rem,1.8vh,1rem)] leading-tight text-justify whitespace-pre-line">
                  Avec près de 3 ans d’expérience en communication et marketing, j’ai travaillé en direction artistique 360°, design graphique, web design et community management.
                  {"\n\u00A0"} 
                  J’ai également animé des activités ludopédagogiques autour des TCG et enseigné les arts plastiques en écoles primaires et secondaires.
                </p>
              </section>

              <section className="pl-[3rem]">
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
                  <a href="https://pindmie.itch.io/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.167429 11.3864L1.24679 13.2559L12.2164 6.92261L13.2958 8.79212L15.1241 7.73657L14.0447 5.86705L15.873 4.8115L14.7936 2.94198L12.9654 3.99754L11.886 2.12802L10.0577 3.18358L11.1371 5.05309L0.167429 11.3864ZM7.15008 2.36962L8.97835 1.31406L10.0577 3.18358L8.22944 4.23913L7.15008 2.36962ZM7.15008 2.36962L5.3218 3.42517L4.24244 1.55566L6.07071 0.500102L7.15008 2.36962ZM12.5469 11.7172L14.3752 10.6616L13.2958 8.79212L11.4675 9.84768L12.5469 11.7172ZM12.5469 11.7172L10.7186 12.7727L11.798 14.6423L13.6263 13.5867L12.5469 11.7172Z" fill="currentColor"/>
                    </svg>
                    Itch.io
                  </a>
                  <a href="/CV - LOPES Léa-Anna 2026.pdf" target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center gap-2 border border-brand px-3 py-1 rounded-full font-bold uppercase text-sm text-brand bg-white hover:bg-brand hover:text-white transition-colors duration-300">
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

        <main className="flex-1 flex flex-col relative bg-white overflow-hidden z-10">
          <div className="md:hidden sticky top-0 z-[30] w-full bg-white border-b-2 border-brand px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase text-brand">Portfolio</span>
              <div className="scale-50 origin-left"> 
                <ThemeSwitch />
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col min-w-0 h-full">
            <motion.div 
              layoutId="header-section"
              transition={sharedTransition}
              className="sticky top-0 w-full h-[9vh] md:border-b-2 border-brand flex-shrink-0 bg-white z-20 flex items-center justify-center px-6"
            >
              <div className="absolute left-6 top-1/2 -translate-y-1/2 md:hidden">
                <img src={currentTheme === "dark" ? "/Etoile_mobile_2_dark.svg" : "/Etoile_mobile_2.svg"} alt="" className="h-[4vh] object-contain pointer-events-none" />
              </div>
              
              <AnimatePresence mode="wait">
                {(!selectedId && !showContact) && (
                  <div key="header-container" className="flex items-center justify-center">
                    <img src={currentTheme === "dark" ? "/illu-header-dark.svg" : "/illu-header-main.svg"} alt="" className="h-[2.5vh] object-contain pointer-events-none" />
                  </div>
                )}
              </AnimatePresence>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
                {(!selectedId && !showContact) && (
                  <div className="md:hidden">
                    <img src={currentTheme === "dark" ? "/Etoile_mobile_dark.svg" : "/Etoile_mobile.svg"} alt="" className="h-[4vh] object-contain pointer-events-none" />
                  </div>
                )}
                <AnimatePresence>
                  {(!selectedId && !showContact) && (
                    <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="hidden md:flex items-center gap-2">
                      <span className="text-[14px] font-bold uppercase tracking-normal text-brand">Mode</span>
                      <ThemeSwitch />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <div className="flex-1 flex flex-row overflow-hidden min-h-0">
              <div ref={scrollContainerRef} className="flex-1 overflow-y-auto no-scrollbar pb-[6vh]">
                <div className="flex flex-col px-3 md:px-0 md:flex-row md:flex-wrap gap-[0.8vw]">
                  {projects.map((p, index) => {
                    const isEvenRow = Math.floor(index / 2) % 2 === 0;
                    const isFirstInRow = index % 2 === 0;
                    const isLarge = isEvenRow ? isFirstInRow : !isFirstInRow;
                    
                    return (
                      <div 
                        key={p.id} 
                        onClick={() => handleSetSelectedId(p.id)} 
                        className="cursor-pointer flex-none aspect-[4/3] w-full md:w-auto"
                        style={{ width: (typeof window !== 'undefined' && window.innerWidth < 768) ? "100%" : (isLarge ? "calc(55% - 0.4vw)" : "calc(45% - 0.4vw)") }}
                      >
                        <div className="w-full h-full bg-gray-50 overflow-hidden border border-brand/10">
                          <motion.img 
                            layoutId={`img-${p.id}`} 
                            src={p.mainImage.src} 
                            transition={sharedTransition}
                            initial={false}
                            className="w-full h-full object-cover origin-center border-2 border-brand md:border-hidden" 
                            alt="" 
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                {!selectedId && !showContact && (
                  <div className="md:hidden mt-6 pb-2">
                    <MobileFooter currentTheme={currentTheme} />
                  </div>
                )}
              </div>

              {!selectedId && (
                <div className="hidden md:block w-[25px] flex-shrink-0 border-l-2 border-brand bg-white h-full overflow-hidden">
                   <CustomScrollbar scrollRef={scrollContainerRef} />
                </div>
              )}
            </div>

            <AnimatePresence mode="wait">
              {(!selectedId && !showContact) && (
                <div key="footer-container" className="hidden md:flex w-full h-[8vh] items-center justify-center border-t-2 border-brand flex-shrink-0 px-[4vh]">
                  <img src={currentTheme === "dark" ? "/illu-footer-dark.svg" : "/illu-footer-main.svg"} alt="" className="w-full h-[2.5vh] object-contain" />
                </div>
              )}
            </AnimatePresence>
          </div>
        </main>

        <div className="hidden md:block h-full z-40 w-[5vw] md:w-[10vw] flex-shrink-0">
          <PatternColumn width="100%" borderLeft={true} className="pl-1 border-l-2 border-brand" />
        </div>
      </div>

      {selectedId && (
        <ProjectDetail
          project={project}
          onClose={() => handleSetSelectedId(null)}
          sharedTransition={sharedTransition}
        />
      )}

      <AnimatePresence>
        {showContact && (
          <ContactForm onClose={() => setShowContact(false)} sharedTransition={sharedTransition} />
        )}
      </AnimatePresence>

      {!selectedId && !showContact && (
        <MobileScrollToggle scrollRef={scrollContainerRef} bottomOffset="2rem" />
      )}      

      <div className="hidden md:block relative z-[100] border-t-2 border-brand">
        <ScrollingBanner />
      </div>
    </div>
  );
};

export default Home;