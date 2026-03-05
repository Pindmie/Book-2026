import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PatternColumn from "../components/ui/PatternColumn";

const GalleryItem = ({ item }) => {
  const [isMuted, setIsMuted] = useState(true);
  if (item.type === "video") {
    return (
      <div className={`h-full ${item.ratio} flex-shrink-0 overflow-hidden bg-gray-50 relative`}>
        <video src={item.src} autoPlay loop muted={isMuted} playsInline className="w-full h-full object-cover" />
        <button 
          onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
          className="absolute bottom-2 right-2 z-50 p-2 text-brand hover:text-accent transition-colors flex items-center justify-center"
        >
          {isMuted ? (
            <span className="w-4 h-4 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5.25004C8.99949 5.69105 8.88391 6.12429 8.66468 6.50694C8.44546 6.8896 8.13018 7.20843 7.75 7.43192C7.63615 7.4886 7.50498 7.49977 7.38319 7.46316C7.2614 7.42654 7.15813 7.34489 7.09442 7.23482C7.03071 7.12475 7.01133 6.99454 7.04023 6.87069C7.06914 6.74684 7.14415 6.63866 7.25 6.56817C7.47923 6.43286 7.6692 6.24012 7.80118 6.00896C7.93316 5.7778 8.00258 5.51622 8.00258 5.25004C8.00258 4.98386 7.93316 4.72228 7.80118 4.49113C7.6692 4.25997 7.47923 4.06722 7.25 3.93192C7.14415 3.86142 7.06914 3.75324 7.04023 3.62939C7.01133 3.50554 7.03071 3.37533 7.09442 3.26526C7.15813 3.1552 7.2614 3.07355 7.38319 3.03693C7.50498 3.00031 7.63615 3.01148 7.75 3.06817C8.13018 3.29166 8.44546 3.61049 8.66468 3.99315C8.88391 4.3758 8.99949 4.80904 9 5.25004ZM5.69125 2.03817C5.5999 2.00027 5.49936 1.99031 5.40235 2.00956C5.30534 2.02881 5.21621 2.07639 5.14625 2.14629L3.79313 3.50004H2.5C2.36739 3.50004 2.24021 3.55272 2.14645 3.64649C2.05268 3.74026 2 3.86743 2 4.00004V6.50004C2 6.63265 2.05268 6.75983 2.14645 6.8536C2.24021 6.94737 2.36739 7.00004 2.5 7.00004H3.79313L5.14625 8.35379C5.21618 8.4238 5.3053 8.47148 5.40235 8.49081C5.49939 8.51013 5.59998 8.50023 5.6914 8.46235C5.78281 8.42448 5.86092 8.36033 5.91586 8.27803C5.9708 8.19574 6.00008 8.09899 6 8.00004V2.50004C5.99998 2.40115 5.97064 2.30449 5.91568 2.22228C5.86072 2.14006 5.78262 2.07599 5.69125 2.03817Z" fill="white"/>
                <path d="M5.5 0C8.53757 0 11 2.46243 11 5.5C11 8.53757 8.53757 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0ZM2.46094 2.31836C1.62233 3.11962 1.09961 4.24871 1.09961 5.5C1.09961 7.93005 3.06995 9.90039 5.5 9.90039C6.04706 9.90039 6.57049 9.79966 7.05371 9.61719L2.46094 2.31836ZM5.5 1.09961C4.71773 1.09961 3.98328 1.30413 3.34668 1.66211L8.02734 9.10059C9.15955 8.30435 9.90039 6.98915 9.90039 5.5C9.90039 3.06995 7.93005 1.09961 5.5 1.09961Z" fill="currentColor"/>
              </svg>
            </span>
          ) : (
            <span className="w-4 h-4 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="5.5" cy="5.5" r="5.5" fill="currentColor"/>
                <path d="M9 5.75004C8.99949 6.19105 8.88391 6.62429 8.66468 7.00694C8.44546 7.3896 8.13018 7.70843 7.75 7.93192C7.63615 7.9886 7.50498 7.99977 7.38319 7.96316C7.2614 7.92654 7.15813 7.84489 7.09442 7.73482C7.03071 7.62475 7.01133 7.49454 7.04023 7.37069C7.06914 7.24684 7.14415 7.13866 7.25 7.06817C7.47923 6.93286 7.6692 6.74012 7.80118 6.50896C7.93316 6.2778 8.00258 6.01622 8.00258 5.75004C8.00258 5.48386 7.93316 5.22228 7.80118 4.99113C7.6692 4.75997 7.47923 4.56722 7.25 4.43192C7.14415 4.36142 7.06914 4.25324 7.04023 4.12939C7.01133 4.00554 7.03071 3.87533 7.09442 3.76526C7.15813 3.6552 7.2614 3.57355 7.38319 3.53693C7.50498 3.50031 7.63615 3.51148 7.75 3.56817C8.13018 3.79166 8.44546 4.11049 8.66468 4.49315C8.88391 4.8758 8.99949 5.30904 9 5.75004ZM5.69125 2.53817C5.5999 2.50027 5.49936 2.49031 5.40235 2.50956C5.30534 2.52881 5.21621 2.57639 5.14625 2.64629L3.79313 4.00004H2.5C2.36739 4.00004 2.24021 4.05272 2.14645 4.14649C2.05268 4.24026 2 4.36743 2 4.50004V7.00004C2 7.13265 2.05268 7.25983 2.14645 7.3536C2.24021 7.44737 2.36739 7.50004 2.5 7.50004H3.79313L5.14625 8.85379C5.21618 8.9238 5.3053 8.97148 5.40235 8.99081C5.49939 9.01013 5.59998 9.00023 5.6914 8.96235C5.78281 8.92448 5.86092 8.86033 5.91586 8.77803C5.9708 8.69574 6.00008 8.59899 6 8.50004V3.00004C5.99998 2.90115 5.97064 2.80449 5.91568 2.72228C5.86072 2.64006 5.78262 2.57599 5.69125 2.53817Z" fill="white"/>
              </svg>
            </span>
          )}
        </button>
      </div>
    );
  }
  return (
    <div className={`h-full ${item.ratio} flex-shrink-0 overflow-hidden bg-gray-50`}>
      <img src={item.src} className="w-full h-full object-cover pointer-events-none" alt="" />
    </div>
  );
};

const ProjectDetail = ({ project, onClose, sharedTransition }) => {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const x = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      setCanScrollLeft(latest < -10);
      setCanScrollRight(latest > -width + 10);
    });
    return () => unsubscribe();
  }, [width]);

  const scrollSlider = (direction) => {
    const currentX = x.get();
    let targetX = direction === "next" ? currentX - 400 : currentX + 400;
    targetX = Math.max(Math.min(0, targetX), -width);
    x.set(targetX);
  };

  useEffect(() => {
    if (carouselRef.current) {
      const timer = setTimeout(() => {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        x.set(0);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [project]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 left-[8px] bottom-0 z-40 bg-white flex overflow-hidden font-inter"
    >
      <div className="flex-1 flex flex-col min-w-0 h-full">
        {/* MODIF ICI : Hauteur 9vh, bordure-2 et flex center */}
        <motion.div 
          layoutId="header-section" 
          transition={sharedTransition} 
          className="w-full h-[9vh] border-b-2 border-brand flex-shrink-0 relative flex items-center"
        >
          <button 
            onClick={onClose} 
            className="ml-[4vh] flex items-center gap-1 font-bold uppercase text-brand hover:text-accent transition-colors group"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.35784 11.1113L14.2718 4L16 5.7775L9.95012 12L16 18.2225L14.2718 20L7.35784 12.8887C7.12872 12.653 7 12.3333 7 12C7 11.6667 7.12872 11.347 7.35784 11.1113Z" fill="currentColor"/>
            </svg>
            RETOUR
          </button>
        </motion.div>

        <main className="flex-1 flex flex-col pl-[4vh] pr-[4vh] pt-[1vh] bg-white overflow-hidden relative">
          <div ref={carouselRef} className="flex-shrink-0 mb-[4vh] h-[35vh] overflow-hidden">
            <motion.div 
              drag="x"
              style={{ x }}
              dragConstraints={{ right: 0, left: -width }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex gap-[0.5vw] h-full cursor-grab active:cursor-grabbing"
            >
              <div className={`h-full ${project.mainImage.ratio} flex-shrink-0 overflow-hidden bg-gray-100`}>
                <motion.img layoutId={`img-${project.id}`} src={project.mainImage.src} transition={sharedTransition} initial={false} className="w-full h-full object-cover pointer-events-none" />
              </div>
              {project.gallery && project.gallery.map((item, index) => (
                <GalleryItem key={index} item={item} />
              ))}
            </motion.div>
          </div>

          <div className="absolute right-4 top-[45vh] -translate-y-1/2 z-50 flex gap-2">
            <button 
              onClick={() => scrollSlider("prev")}
              className={`p-2 transition-all rounded-sm ${canScrollLeft ? "text-brand hover:text-accent cursor-pointer opacity-100" : "text-brand opacity-50 cursor-default"}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.35784 11.1113L15.2718 4L17 5.7775L10.9501 12L17 18.2225L15.2718 20L8.35784 12.8887C8.12872 12.653 8 12.3333 8 12C8 11.6667 8.12872 11.347 8.35784 11.1113Z" fill="currentColor"/>
              </svg>
            </button>
            <button 
              onClick={() => scrollSlider("next")}
              className={`p-2 transition-all rounded-sm ${canScrollRight ? "text-brand hover:text-accent cursor-pointer opacity-100" : "text-brand opacity-50 cursor-default"}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.6422 12.8887L8.72819 20L7 18.2225L13.0499 12L7 5.7775L8.72819 4L15.6422 11.1112C15.8713 11.347 16 11.6667 16 12C16 12.3333 15.8713 12.653 15.6422 12.8887Z" fill="currentColor"/>
              </svg>
            </button>
          </div>

          <div className="flex-1 flex flex-col mx-[5vw] min-h-0">
            <div className="flex-shrink-0 mb-4">
              <h1 className="text-[clamp(1.5rem,3vh,2.5rem)] font-bold text-brand leading-none uppercase">{project.title}</h1>
              {project.subtitle && <h2 className="text-[clamp(0.9rem,2vh,1.1rem)] text-accent italic mt-1">{project.subtitle}</h2>}
            </div>
            <div className="flex-shrink-0 text-brand text-[clamp(0.9rem,1.6vh,0.95rem)] leading-snug text-justify whitespace-pre-line overflow-hidden" style={{ columnCount: 3, columnFill: "auto", columnGap: "40px", height: "150px", width: "100%", maxWidth: "1350px" }}>
              {project.description}
            </div>
            <div className="mt-16 flex justify-between items-end pb-2 flex-shrink-0 mb-[5rem]">
              <div className="flex flex-wrap gap-2 max-w-[70%]">
                {project.tags?.map((tag, i) => (
                  <span key={i} className="px-4 py-1 rounded-full text-white text-[0.7rem] uppercase font-bold" style={{ backgroundColor: "#d49cff" }}>{tag}</span>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                {project.links?.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-accent hover:opacity-70 transition-opacity text-[0.9rem] italic font-bold uppercase">
                    <img src="/arrow-accent.svg" alt="" className="w-[1.5vh] h-[1.5vh]" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="h-full z-40 w-[10vw] flex-shrink-0">
        <PatternColumn width="100%" borderLeft={true} className="pl-1 border-l-2" />
      </div>
    </motion.div>
  );
};

export default ProjectDetail;