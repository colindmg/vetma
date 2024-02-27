import { useState } from "react";
import { bigTitle } from "../constants";

export const MovingTitle = () => {
  const [headerBigTitle, setHeaderBigTitle] = useState(bigTitle);
  const [isAnimating, setIsAnimating] = useState(false);

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
    if (!isAnimating) {
      setHeaderBigTitle(reverseTitle());
      sortTitle();
    }
  };

  return (
    <div className="flex" onMouseEnter={handleMouseEnter}>
      {headerBigTitle.map((item, index) => (
        <img
          className="pr-1 max-md:h-[50px]"
          key={index}
          src={item.image[item.currentImage]}
          alt={item.letter}
        />
      ))}
    </div>
  );
};
