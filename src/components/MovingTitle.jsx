import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { bigTitle } from "../constants";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export const MovingTitle = (props) => {
  const [headerBigTitle, setHeaderBigTitle] = useState(bigTitle);
  const [isAnimating, setIsAnimating] = useState(false);
  const lettersRef = useRef([]);

  useGSAP(() => {
    const endHeight = window.innerHeight - 50;
    const movementArray = [-70, 80, -90, 80, -70];
    lettersRef.current.forEach((letter, index) => {
      gsap.fromTo(
        letter,
        {
          y: 0, // Départ à la position initiale
        },
        {
          y: movementArray[index], // Déplacement alterné vers le haut ou vers le bas
          scrollTrigger: {
            trigger: props.headerRef.current,
            scrub: true,
            start: "top top",
            end: "+=" + endHeight,
            // markers: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [headerBigTitle, props.headerRef]);

  // Mets les lettres du titre dans l'ordre inverse
  const reverseTitle = () => {
    const array = [...headerBigTitle];
    return array.reverse();
  };

  // Change l'image de chaque lettre du titre aléatoirement ou remet l'image de base si setBasicImage vaut true
  const randomImageChange = (setBasicImage = false) => {
    const array = [...headerBigTitle];
    array.forEach((item) => {
      setBasicImage
        ? (item.currentImage = 0)
        : (item.currentImage = Math.floor(Math.random() * item.image.length));
    });
    return array;
  };

  // Anime le titre en le triant lettre par lettre et changeant l'image de chaque lettre aléatoirement à chaque étape
  const sortTitle = async () => {
    setIsAnimating(true);
    let array = [...headerBigTitle];
    for (let i = array.length - 1; i >= 0; i--) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      array = [
        ...bigTitle.slice(0, array.length - i),
        ...array.slice(array.length - i).reverse(),
      ];
      setHeaderBigTitle(randomImageChange());
      setHeaderBigTitle(array);
    }
    setHeaderBigTitle(randomImageChange(true));
    setIsAnimating(false);
  };

  // Lors du hover sur le titre, anime le titre
  const handleMouseEnter = () => {
    if (!isAnimating && window.scrollY === 0) {
      setHeaderBigTitle(reverseTitle());
      sortTitle();
    }
  };

  return (
    <div className="flex" onMouseEnter={handleMouseEnter}>
      {headerBigTitle.map((item, index) => (
        <img
          ref={(el) => (lettersRef.current[index] = el)}
          className="pr-1 max-md:h-[50px]"
          key={index}
          src={item.image[item.currentImage]}
          alt={item.letter}
        />
      ))}
    </div>
  );
};

MovingTitle.propTypes = {
  headerRef: PropTypes.object.isRequired,
};
