import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { StarBlack } from "../assets/img";
gsap.registerPlugin(ScrollTrigger);

const words = ["worldwide", "from france", "with love"];

const typeDelay = 150;
const eraseDelay = 50;
const pauseBetweenWords = 3000;

export const PhotosSectionTitle = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  // ANIMATION DU TEXTE
  useEffect(() => {
    let timeoutId;

    const typeWord = (word, index = 0) => {
      if (index < word.length) {
        timeoutId = setTimeout(() => {
          setCurrentWord(word.slice(0, index + 1));
          typeWord(word, index + 1);
        }, typeDelay);
      } else {
        timeoutId = setTimeout(() => {
          setIsErasing(true);
        }, pauseBetweenWords);
      }
    };

    const eraseWord = (word, index = word.length - 1) => {
      if (index >= 0) {
        timeoutId = setTimeout(() => {
          setCurrentWord(word.slice(0, index));
          eraseWord(word, index - 1);
        }, eraseDelay);
      } else {
        setIsErasing(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    if (isErasing) {
      eraseWord(words[wordIndex]);
    } else {
      typeWord(words[wordIndex]);
    }

    return () => clearTimeout(timeoutId);
  }, [isErasing, wordIndex]);

  // ANIMATION DES ÉTOILES
  const smallStar = useRef(null);
  const largeStar = useRef(null);
  useGSAP(() => {
    // Animation de la grande étoile
    gsap.fromTo(
      largeStar.current,
      { scale: 0 }, // Commence à zéro
      {
        scale: 1.3, // Expansion à 120%
        duration: 0.2,
        delay: 0.1,
        scrollTrigger: {
          trigger: largeStar.current,
          start: "center center", // L'animation commence lorsque l'étoile atteint le centre de l'écran
          toggleActions: "play none none none",
        },
        onComplete: () => {
          gsap.to(largeStar.current, {
            scale: 1, // Revenir à la taille d'origine
            duration: 0.2,
          });
        },
      }
    );

    // Animation de la petite étoile
    gsap.fromTo(
      smallStar.current,
      { scale: 0 }, // Commence à zéro
      {
        scale: 1.3, // Expansion à 120%
        duration: 0.2,
        scrollTrigger: {
          trigger: smallStar.current,
          start: "center center", // L'animation commence lorsque l'étoile atteint le centre de l'écran
          toggleActions: "play none none none",
        },
        onComplete: () => {
          gsap.to(smallStar.current, {
            scale: 1, // Revenir à la taille d'origine
            duration: 0.2,
          });
        },
      }
    );
  }, []);

  return (
    <h2 className="relative text-5xl mb-20 text-center font-avec uppercase text-darkgray">
      Spreading independent brands
      <br />
      <span className="font-bold text-6xl">{currentWord}_</span>
      <img
        ref={largeStar}
        src={StarBlack}
        alt="Star"
        className="absolute -top-2 -right-8 w-6"
      />
      <img
        ref={smallStar}
        src={StarBlack}
        alt="Star"
        className="absolute -top-4 -right-2 w-4"
      />
    </h2>
  );
};
