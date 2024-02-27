import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Star } from "../assets/img";
import { CrayText } from "../components/CrayText";
import { MovingTitle } from "../components/MovingTitle";

export const Header = () => {
  const subtitleRef = useRef(null);
  const starImage1 = useRef(null);
  const starImage2 = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Initialiser l'opacité à 1 pour s'assurer qu'elle est pleinement visible au départ
    gsap.set([subtitleRef.current, starImage1.current, starImage2.current], {
      opacity: 1,
    });

    const checkScroll = () => {
      const opacity = window.scrollY > 50 ? 0 : 1;
      gsap.to([subtitleRef.current, starImage1.current, starImage2.current], {
        opacity: opacity,
        duration: 0.4,
      });
    };
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div className="sticky top-0">
      <header
        ref={headerRef}
        className="header flex flex-col justify-center items-center"
      >
        <div className="grain z-40 bg-darkblue"></div>
        <div className="flex flex-col justify-center items-center">
          <MovingTitle headerRef={headerRef} />
          <div className="flex items-center space-x-2 mt-3 opacity-100">
            <img ref={starImage1} src={Star} alt="Vetma Star" className="w-3" />
            <h2
              ref={subtitleRef}
              className="font-avec text-white text-2xl tracking-[3px] max-md:text-lg"
            >
              EMERGING BRAND MEDIA
            </h2>
            <img ref={starImage2} src={Star} alt="Vetma Star" className="w-3" />
          </div>
        </div>

        <CrayText textContent="Scroll" url="#scrollBelowHeader" />
      </header>
    </div>
  );
};
