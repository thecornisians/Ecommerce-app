import { useState } from "react";
import Button from "./Button";
import ProductImage from "./Productimage";
import plusIcon from "../images/icon-plus.svg";
import minusIcon from "../images/icon-minus.svg";
import "../styles/Main.css";

export default function Main() {
  const [product, setProduct] = useState("");
  const [addToCart, setAddToCart] = useState(0);

  function addOne() {
    setAddToCart((prev) => prev + 1);
  }

  function removeOne() {
    setAddToCart((prev) => {
      return prev > 0 ? prev - 1 : 0;
    });
  }

  return (
    <main className="main__section">
      <ProductImage />
      <div className="text__section">
        <h3 className="company__name">SNEAKER COMPANY</h3>
        <h2 className="leading__heading">Fall Limited Edition Sneakers</h2>
        <p className="leading__paragraph">
          These low-profile sneakers are your perfect casual wear
          companion.Featuring a durable rubber outer sole, they’ll withstand
          everything the weather can offer.
        </p>
        <div className="cost__section">
          <p className="price">$125.00</p>
          <p className="discount">50%</p>
          <p className="old__price">$250.00</p>
        </div>
        <div className="cart__button-section">
          <div className="add_to_cart">
            <div>
              <img src={minusIcon} alt="" onClick={removeOne} />
            </div>
            <span>{addToCart}</span>
            <div>
              <img src={plusIcon} alt="" onClick={addOne} />
            </div>
          </div>
          <Button />
        </div>
      </div>
    </main>
  );
}
