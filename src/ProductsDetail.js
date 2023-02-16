import React from "react";
import productsData from "./productsData";
import { useParams } from "react-router-dom";

export default function ProductsDetail() {
  const { productId } = useParams();
  const thisProduct = productsData.find((prod) => prod.id == productId);
  return (
    <div>
      <div className="detail-box">
        <img src={thisProduct.image} alt="product" className="detail-img" />
        <h2>{thisProduct.title}</h2>
        <h3>Price : ${thisProduct.price}</h3>
        <p>{thisProduct.description}</p>
        <br />
        <button className="cart-btn">Add to Cart</button>
        <label> Qty : </label>
        <select className="dropdown">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
    </div>
  );
}




