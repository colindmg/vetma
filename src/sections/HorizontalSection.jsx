import {
  BackMag,
  BlueTee,
  CoverMag1,
  CoverMag2,
  DetailsTee,
  Scratch1,
  Scratch2,
  StarBlack,
  WhiteTee,
} from "../assets/img";

import { useEffect, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HorizontalImage } from "../components/HorizontalImage";
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

export const HorizontalSection = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useGSAP(() => {
    const totalWidth = 3700;

    // Initialisez l'animation avec ScrollTrigger
    gsap.to(sectionsRef.current, {
      x: () => -totalWidth + window.innerWidth,
      ease: "none",
      scrollTrigger: {
        id: "horizontalScroll",
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        ease: "none",
        // start: "top top",
        end: () => "+=" + totalWidth,
        // markers: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // PROGRESSION DE SCROLL
  const [progress, setProgress] = useState(0);
  let firstStar = useRef(null);
  let secondStar = useRef(null);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY < window.innerHeight) {
        return;
      }
      setProgress(
        ScrollTrigger.getById("horizontalScroll").progress.toFixed(3) * 100
      );
    };

    window.addEventListener("scroll", scrollListener);
  }, []);

  // ANIMATION DES ÉTOILES
  useGSAP(() => {
    if (progress == 100) return;
    if (progress <= 0.5) {
      gsap.to(firstStar.current, {
        opacity: 0.3,
        scale: 1,
        duration: 0.5,
      });
      gsap.to(secondStar.current, {
        opacity: 0.3,
        scale: 1,
        duration: 0.5,
      });
    }

    if (progress > 0) {
      gsap.to(firstStar.current, {
        opacity: 1,
        scale: 1.5,
        duration: 0.5,
      });
    }

    if (progress > 99) {
      gsap.to(secondStar.current, {
        opacity: 1,
        scale: 1.5,
        duration: 0.5,
      });
    } else {
      gsap.to(secondStar.current, {
        opacity: 0.3,
        scale: 1,
        duration: 0.5,
      });
    }
  }, [progress]);

  return (
    <div className="overflow-x-hidden z-50 relative" id="scroll">
      {/* CONTAINER DU SCROLL HORIZONTAL */}
      <div
        ref={containerRef}
        className="flex items-center px-24 h-screen w-full min-w-max bg-white"
      >
        {/* BARRE DE PROGRESSION */}
        <div className="absolute z-[100] w-[400px] h-[2px] bg-darkgray/30 top-16 left-[50vw] transform -translate-x-1/2">
          <div
            className="h-full bg-darkgray"
            style={{ width: progress + "%" }}
          ></div>

          {/* ÉTOILES */}
          <img
            ref={firstStar}
            src={StarBlack}
            className="absolute top-1/2 -left-5 w-4 opacity-30 transform -translate-y-1/2"
            alt="Étoile"
          />
          <img
            ref={secondStar}
            src={StarBlack}
            className="absolute top-1/2 -right-5 w-4 opacity-30 transform -translate-y-1/2"
            alt="Étoile"
          />
        </div>

        {/* Gradient de flou blanc */}
        <div className="absolute top-0 left-0 w-20 z-[100] h-full bg-gradient-to-r from-white to-transparent"></div>

        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="relative ml-40"
        >
          <HorizontalImage
            src={CoverMag1}
            alt={"Cover du magazine Vetma Collector"}
            height={"507px"}
          />
          <HorizontalImage
            src={CoverMag2}
            alt={"Cover du magazine de base"}
            height={"258px"}
            bottom={"-80px"}
            right={"-112px"}
            isAbsolute
          />
          <HorizontalImage
            src={BackMag}
            alt={"Back du magazine"}
            height={"258px"}
            top={"25%"}
            left={"-128px"}
            isAbsolute
          />
        </div>

        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="relative flex flex-col w-[630px] ml-48"
        >
          <h2 className="text-[64px] font-avec uppercase text-darkgray tracking-wider">
            Éphéméride
          </h2>
          <h4 className="text-darkgray text-xl absolute top-[75px] font-inter font-normal">
            2023 - Collector Magazine
          </h4>
          <p className="text-darkgray font-inter text-[16px] tracking-wide leading-tight mt-7">
            In this inaugural issue of{" "}
            <span className="font-medium">Vetma</span> magazine, discover all
            the brands that have made their mark at the start of 2023. Featuring
            interviews, photos, and deep dives, this 104-page magazine has it
            all.
            <br />
            <br />
            Written by @jeuneaki - Typo by @kgmye
          </p>
        </div>

        <div
          className="relative h-[507px] w-[550px]"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <HorizontalImage
            src={WhiteTee}
            width={"381px"}
            alt={"White Magic Tee"}
          />
          <HorizontalImage
            src={BlueTee}
            width={"381px"}
            alt={"Blue Magic Tee"}
            top={"50%"}
            right={"0"}
            isAbsolute
          />
          <HorizontalImage
            src={DetailsTee}
            width={"100px"}
            alt={"Details Magic Tee"}
            top={"56px"}
            right={"-24px"}
            isAbsolute
          />
        </div>

        <div
          className="relative flex flex-col w-[630px] ml-48 h-3/5"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className="text-[64px] font-avec uppercase text-darkgray tracking-wider">
            Magic tees
          </h2>
          <h4 className="text-darkgray text-xl absolute top-[75px] font-inter font-normal">
            2024 - Merchandising
          </h4>
          <p className="text-darkgray font-inter text-[16px] tracking-wide leading-tight mt-7">
            SPECIAL MAGIC TEE - 100% COTTON 230 GSM - Screen-Printed
            <br />
            Classic size, take a size up for a wide fit.
            <br />
            Manufactured in China
            <br />
            Ready to ship / Worldwide shipping
            <br />
            <br />
            Design by @jeuneaki with @rocketboy
          </p>

          <HorizontalImage
            src={Scratch2}
            width={"427px"}
            alt={"Scratch Magic Tee"}
            bottom={"-50px"}
            right={"50px"}
            isAbsolute
          />
        </div>

        <div
          className="relative w-[638px] h-[525px] ml-20 flex flex-col justify-end h-3/5"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <p className="text-darkgray font-inter text-[16px] tracking-wide leading-tight mt-6">
            <span className="font-medium">BEHIND THE SCENES : ROCKETBOY</span>
            <br />
            <br />
            For this first Vetma merchandise collection, it was crucial for me
            to collaborate with an artist who shares my vision. A year before
            the creation of the media, I came across the work of{" "}
            <span className="font-medium">Rocketboy</span>, an artist inspired
            by retro and old-school video games.
            <br />
            In February 2023, we began brainstorming a textile project that
            highlights the very essence of Vetma:{" "}
            <span className="font-medium">the creation of clothing</span>. This
            is, the magician who conjures up garments in his cauldron was born.
          </p>
          <HorizontalImage
            src={Scratch1}
            width={"427px"}
            alt={"Scratch Magic Tee"}
            top={"0"}
            left={"0"}
            isAbsolute
          />
        </div>
      </div>
    </div>
  );
};
