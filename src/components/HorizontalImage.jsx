import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const HorizontalImage = (props) => {
  const imageRef = useRef(null);

  return (
    <img
      ref={imageRef}
      src={props.src}
      alt={props.alt}
      style={{
        position: props.isAbsolute ? "absolute" : "relative",
        width: props.width,
        height: props.height,
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
      }}
    />
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
};
