const HeaderSimple = ({ currentTheme }) => {
  return (
    <div className="w-full h-[9vh] border-b-2 border-brand flex-shrink-0 bg-white flex items-center justify-between px-6">
      <div className="flex-1">
        <img 
          src={currentTheme === "dark" ? "/Etoile_mobile_2_dark.svg" : "/Etoile_mobile_2.svg"} 
          alt="" 
          className="h-[4vh] object-contain"
        />
      </div>
      
      <div className="flex items-center justify-center">
        <img 
          src={currentTheme === "dark" ? "/illu-header-dark.svg" : "/illu-header-main.svg"} 
          alt="" 
          className="h-[2.5vh] object-contain" 
        />
      </div>

      <div className="flex-1 flex justify-end items-center">
        <img 
          src={currentTheme === "dark" ? "/Etoile_mobile_dark.svg" : "/Etoile_mobile.svg"} 
          alt="" 
          className="h-[4vh] object-contain" 
        />
      </div>
    </div>
  );
};

export default HeaderSimple;