import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

import PropTypes from "prop-types";

export const HorizontalImage = (props) => {
  const imageRef = useRef(null);

  // ANIMATION D'APPARITION
  useGSAP(() => {
    if (!props.animate) return;
    else if (props.animate === true) {
      gsap.to(imageRef.current, {
        width: props.width,
        opacity: 1,
        duration: 1,
      });
    }
  }, [props.animate]);

  return (
    <div
      style={{
        position: props.isAbsolute ? "absolute" : "relative",
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
      }}
    >
      <img
        ref={imageRef}
        src={props.src}
        alt={props.alt}
        style={{
          width: props.markers ? 0 : props.width,
          height: props.height,
          opacity: props.markers ? 0 : 1,
        }}
      />
      {props.markers == 1 && (
        <>
          <div className="absolute -top-2 -right-2 border-t-2 border-r-2 border-darkgray w-5 h-5"></div>
          <div className="absolute -bottom-2 -left-2 border-b-2 border-l-2 border-darkgray w-5 h-5"></div>
        </>
      )}
      {props.markers == 2 && (
        <>
          <div className="absolute -top-2 -left-2 border-t-2 border-l-2 border-darkgray w-5 h-5"></div>
          <div className="absolute -bottom-2 -right-2 border-b-2 border-r-2 border-darkgray w-5 h-5"></div>
        </>
      )}
    </div>
  );
};

HorizontalImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  top: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  isAbsolute: PropTypes.bool,
  animate: PropTypes.bool,
  markers: PropTypes.number,
};
