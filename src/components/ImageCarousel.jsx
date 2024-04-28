import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PropTypes from "prop-types";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const ImageCarousel = (props) => {
  const imageList = useRef(null);
  let imageListAnimation = useRef(null);

  useGSAP(() => {
    const totalWidth = imageList.current.scrollWidth / 2; // La moitié de la largeur totale (car il y a deux fois le contenu)
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

  // const handleMouseEnter = () => {
  //   imageListAnimation.current.pause();
  // };

  // const handleMouseLeave = () => {
  //   imageListAnimation.current.resume();
  // };

  return (
    <div
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      className="relative w-screen inline-block whitespace-nowrap overflow-hidden"
    >
      {/* IMAGES DE LOGOS DU SLIDER */}
      <div ref={imageList} className="inline-bloc">
        {/* Dupliquer le contenu pour donner l'effet infini */}
        {[...props.images, ...props.images].map((img, index) => (
          <div
            key={index}
            className=" h-72 inline-block mx-1 overflow-hidden cursor-crosshair rounded-sm "
          >
            <img
              src={img}
              className="h-full object-cover object-center hover:scale-[1.2] transition-all duration-300 ease-in-out"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* EFFET DE BLUR DES BORDS */}
      <div className="absolute top-0 left-0 w-20 z-[999] h-full bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute top-0 right-0 w-20 z-[999] h-full bg-gradient-to-l from-white to-transparent"></div>

      {/* EFFET DE BLUR SUR LE DEUXIEME SLIDER */}
      {/* {props.direction === "right" && (
        <div className="cursor-event-none absolute bottom-0 right-0 h-1/2 z-[999] w-full bg-gradient-to-t from-white  to-transparent"></div>
      )} */}
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  direction: PropTypes.string.isRequired,
};

export default ImageCarousel;
