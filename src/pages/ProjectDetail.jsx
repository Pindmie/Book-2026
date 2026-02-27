import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ProjectDetail = ({ project, onClose, sharedTransition }) => {
  // References et etats pour la gestion du slider horizontal (drag)
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [muted, setMuted] = useState(true);

  // Calcul de la largeur scrollable pour limiter le mouvement de glisse (drag)
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [project]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-[180px] left-[8px] bottom-0 z-40 bg-white flex flex-col overflow-hidden font-inter"
    >
      {/* Barre superieure contenant le bouton retour et la ligne de separation */}
      <motion.div 
        layoutId="header-section"
        transition={sharedTransition}
        className="w-full h-[8vh] border-b border-brand flex-shrink-0 relative"
      >
        <button 
          onClick={onClose}
          className="absolute left-[4vh] bottom-[1.5vh] flex items-center gap-2 font-bold uppercase text-brand hover:text-accent transition-colors group"
        >
          <img src="/arrow-back.svg" alt="" className="w-[2vh] h-[2vh]" />
          RETOUR
        </button>
      </motion.div>

      <main className="flex-1 flex flex-col p-[4vh] bg-white overflow-hidden">
        
        {/* Slider horizontal permettant de faire defiler les images et videos du projet */}
        <motion.div 
          ref={carouselRef}
          className="flex-shrink-0 mb-[4vh] h-[35vh] cursor-grab active:cursor-grabbing overflow-hidden"
        >
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-[2vw] h-full"
          >
            {/* Image principale utilisee pour la transition fluide depuis la home */}
            <div className={`h-full ${project.mainImage.ratio} flex-shrink-0 overflow-hidden bg-gray-100`}>
              <motion.img 
                layoutId={`img-${project.id}`}
                src={project.mainImage.src}
                transition={sharedTransition}
                initial={false}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
            
            {/* Boucle sur la galerie pour afficher les autres images ou les videos */}
            {project.gallery && project.gallery.map((item, index) => (
              <div key={index} className={`h-full ${item.ratio} flex-shrink-0 overflow-hidden bg-gray-50 relative`}>
                {item.type === "video" ? (
                  <>
                    <video 
                      src={item.src}
                      autoPlay
                      loop
                      muted={muted}
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    {/* Bouton de controle du son pour les videos en lecture automatique */}
                    <button 
                      onClick={() => setMuted(!muted)}
                      className="absolute bottom-4 right-4 z-50 bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/40 transition-colors"
                    >
                      <span className="text-[10px]">{muted ? "🔈" : "🔊"}</span>
                    </button>
                  </>
                ) : (
                  <img src={item.src} className="w-full h-full object-cover pointer-events-none" alt="" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Section d'informations textuelles affichee sous le slider */}
        <div className="flex-1 flex flex-col mx-[5vw] min-h-0">
          
          {/* Titre et sous-titre du projet */}
          <div className="flex-shrink-0 mb-4">
            <h1 className="text-[clamp(1.5rem,3vh,2.5rem)] font-bold text-brand leading-none">
              {project.title}
            </h1>
            {project.subtitle && (
              <h2 className="text-[clamp(0.9rem,2vh,1.1rem)] text-accent italic mt-1">
                {project.subtitle}
              </h2>
            )}
          </div>

          {/* Zone de description divisee en 3 colonnes avec une hauteur fixe */}
          <div 
            className="flex-shrink-0 text-brand text-[clamp(0.9rem,1.6vh,0.95rem)] leading-snug text-justify whitespace-pre-line overflow-hidden"
            style={{
              columnCount: 3,
              columnFill: "auto",
              columnGap: "40px",
              height: "150px", 
              width: "100%",
              maxWidth: "1350px" 
            }}
          >
            {project.description}
          </div>

          {/* Pied de page du detail contenant les tags a gauche et les liens a droite */}
          <div className="mt-auto flex justify-between items-end pb-2 flex-shrink-0 mb-[5rem]">
  
  {/* Liste des tags formatée en capsules */}
  <div className="flex flex-wrap gap-2 max-w-[70%]">
    {project.tags?.map((tag, i) => (
      <span 
        key={i} 
        className="px-4 py-1 rounded-full text-white text-[0.7rem] uppercase"
        style={{ backgroundColor: "#d49cff" }}
      >
        {tag}
      </span>
    ))}
  </div>

            {/* Liens externes vers itch.io ou youtube avec icone flechee */}
            <div className="flex-col gap-8">
              {project.links?.map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-accent hover:opacity-70 transition-opacity text-[0.9rem] italic"
                >
                  <img 
                    src="/arrow-accent.svg" 
                    alt="" 
                    className="w-[1.2vh] h-[1.2vh]"
                  />
                  {link.label}
                </a>
              ))}
            </div>
            
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default ProjectDetail;