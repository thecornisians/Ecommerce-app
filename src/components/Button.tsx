import cart from "../images/icon-cart.svg";
import "../styles/Main.css";

export default function Button() {
  return (
    <div className="button__div">
      <button>
        <img src={cart} alt="" />
        Add to Cart
      </button>
    </div>
  );
}
