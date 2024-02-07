import { BigTitle } from "../components/BigTitle";
import { ProductCard } from "../components/ProductCard";
import {
  WTeeFront,
  WTeeDetail,
  BTeeFront,
  BTeeDetail,
} from "../assets/products";

export const Merchandising = () => {
  return (
    <div className="flex flex-col bg-white py-20 px-40 max-md:items-center">
      <BigTitle textContent="Merch" />
      <div className="flex max-md:flex-col">
        <ProductCard
          firstImg={WTeeFront}
          hoverImg={WTeeDetail}
          url="https://vetma.fr/products/special-magic-tee"
          productName="White Magic Tee"
          productPrice="€40.00"
        />
        <ProductCard
          firstImg={BTeeFront}
          hoverImg={BTeeDetail}
          url="https://vetma.fr/products/blue-magic-tee"
          productName="Blue Magic Tee"
          productPrice="€40.00"
        />
      </div>
    </div>
  );
};
