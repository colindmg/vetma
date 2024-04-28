import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const ImageCarousel = (props) => {
  const imageList = useRef(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const hoveredImageRef = useRef(null);
  let imageListAnimation = useRef(null);

  // ANIMATION DU SLIDER
  useGSAP(() => {
    const totalWidth = imageList.current.scrollWidth / 2;
    imageListAnimation.current = gsap.fromTo(
      imageList.current,
      { x: props.direction === "left" ? 0 : -totalWidth },
      {
        x: props.direction === "left" ? -totalWidth : 0,
        duration: 60,
        ease: "linear",
        repeat: -1,
        onRepeat: () => {
          gsap.set(imageList.current, {
            x: props.direction === "left" ? 0 : -totalWidth,
          });
        },
      }
    );
  }, [imageList]);

  // ANIMATION DU SLIDER AU HOVER D'UNE IMAGE
  const mousePos = useRef({ x: 0, y: 0 });
  useEffect(() => {
    if (hoveredImage === null) return;

    console.log(hoveredImage, hoveredImageRef.current);

    const handleMouseMove = (e) => {
      const boundingRect = hoveredImageRef.current.getBoundingClientRect();
      const mouseX = e.clientX - boundingRect.left;
      const mouseY = e.clientY - boundingRect.top;

      mousePos.current.x = (mouseX / boundingRect.width) * 100;
      mousePos.current.y = (mouseY / boundingRect.height) * 100;

      gsap.to(hoveredImageRef.current, {
        "--x": `${mousePos.current.x}%`,
        "--y": `${mousePos.current.y}%`,
        duration: 0.1,
        ease: "sine.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove); // Nettoyage correct
    };
  }, [hoveredImage]);

  return (
    <div className="relative w-screen inline-block whitespace-nowrap overflow-hidden">
      {/* IMAGES DE LOGOS DU SLIDER */}
      <div ref={imageList} className="inline-bloc">
        {/* Dupliquer le contenu pour donner l'effet infini */}
        {[...props.images, ...props.images].map((img, index) => (
          <div
            key={index}
            className="wrappertest relative h-[250px] inline-block mx-1 overflow-hidden rounded-sm group "
            onMouseEnter={() => {
              setHoveredImage(index);
            }}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img
              src={img}
              className="h-full object-cover object-center"
              alt={`Image ${index + 1}`}
            />

            {/* EFFET DE CLIP PATH INVERTED */}
            <img
              ref={hoveredImage === index ? hoveredImageRef : null}
              src={img}
              className={`carousel-inverted absolute top-0 left-0 h-full w-full object-cover object-center transition-all invert duration-300 opacity-0 group-hover:opacity-100 ${
                hoveredImage === index ? "isActive" : ""
              }`}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* EFFET DE BLUR DES BORDS */}
      <div className="absolute top-0 left-0 w-20 z-[999] h-full bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute top-0 right-0 w-20 z-[999] h-full bg-gradient-to-l from-white to-transparent"></div>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  direction: PropTypes.string.isRequired,
};

export default ImageCarousel;
