import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Star } from "../assets/img";
import { bigTitle } from "../constants";
gsap.registerPlugin(useGSAP);

import PropTypes from "prop-types";

export const Loader = ({ onAnimationEnd }) => {
  const lettersRef = useRef([]);
  const starRef = useRef(null);
  const containerRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  useGSAP(() => {
    // Initialiser
    gsap.set(containerRef.current, {
      opacity: 1,
    });

    gsap.set(starRef.current, {
      opacity: 0,
    });

    bigTitle.forEach((item, index) => {
      gsap.set(lettersRef.current[index], {
        opacity: 0,
      });
    });

    if (!isLoaded) return;
    const tl = gsap.timeline();

    // ANIMATION DE L'ÉTOILE
    tl.fromTo(
      starRef.current,
      {
        opacity: 0,
        top: "50%",
        y: "-50%",
        right: "50%",
      },
      {
        opacity: 1,
        duration: 0.4,
      }
    );

    tl.fromTo(
      starRef.current,
      {
        rotate: 0,
        top: "50%",
        y: "-50%",
        right: "50%",
      },
      {
        rotate: 360,
        duration: 1,
        right: "100%",
        ease: "power1.inOut",
      }
    );

    tl.fromTo(
      starRef.current,
      {
        right: "100%",
      },
      {
        rotate: 270,
        duration: 1,
        right: "-64px",
        ease: "power1.inOut",
      }
    );

    tl.to(starRef.current, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          onComplete: onAnimationEnd, // Appel au parent pour indiquer la fin de l'animation
        });
      },
    });

    // ANIMATION DES LETTRES
    lettersRef.current.forEach((el, index) => {
      tl.fromTo(
        el,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay: index * 0.1,
        },
        "-=1.1"
      );
    });
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      className="fixed w-full h-screen top-0 left-0 bg-darkgray flex items-center justify-center z-[9999]"
    >
      <div className="relative flex -translate-y-[22px]">
        {bigTitle.map((item, index) => (
          <img
            ref={(el) => (lettersRef.current[index] = el)}
            className="pr-1 max-md:h-[50px]"
            key={index}
            src={item.image[item.currentImage]}
            alt={item.letter}
          />
        ))}

        {/* STAR ICON */}
        <img
          ref={starRef}
          src={Star}
          alt="Vetma Star"
          className="w-12 absolute -right-16 top-1/2"
        />
      </div>
    </div>
  );
};

Loader.propTypes = {
  onAnimationEnd: PropTypes.func.isRequired,
};
