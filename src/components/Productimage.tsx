import { useState } from "react";
import nextIcon from "../images/icon-next.svg";
import prevIcon from "../images/icon-previous.svg";
import imageOne from "../images/image-product-1.jpg";
import imageTwo from "../images/image-product-2.jpg";
import imageThree from "../images/image-product-3.jpg";
import productOneThumbnail from "../images/image-product-1-thumbnail.jpg";
import productTwoThumbnail from "../images/image-product-2-thumbnail.jpg";
import productThreeThumbnail from "../images/image-product-3-thumbnail.jpg";
import productFourThumbnail from "../images/image-product-4-thumbnail.jpg";

export default function ProductImage() {
  const [product, setProduct] = useState(0);
  const productImage = [imageOne, imageTwo, imageThree];

  function nextImage() {
    return product === 2 ? setProduct(0) : setProduct((prev) => prev + 1);
  }

  function prevImage() {
    return product === 0 ? setProduct(2) : setProduct((prev) => prev - 1);
  }

  return (
    <div className="product__image-section">
      <img src={prevIcon} alt="" className="prev__icon" onClick={prevImage} />
      <img src={`${productImage[product]}`} alt="" className="product-images" />
      <img src={nextIcon} alt="" className="next__icon" onClick={nextImage} />
      <div className="product__thumbnails">
        <img src={productOneThumbnail} alt="" />
        <img src={productTwoThumbnail} alt="" />
        <img src={productThreeThumbnail} alt="" />
        <img src={productFourThumbnail} alt="" />
      </div>
    </div>
  );
}
