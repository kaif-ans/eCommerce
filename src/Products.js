import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";

export default function Products() {
  const products = productsData.map((product) => (
    <div key={product.id} className="box">
      <Link to={`/${product.id}`}>
        <img src={product.image} alt="products" className="prod-img" />
      </Link>
      <h4>
        {product.title} - ${product.price}
      </h4>
    </div>
  ));
  return (   
      <div className="main">{products}</div>   
  );
}


