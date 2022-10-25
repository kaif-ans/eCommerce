import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ProductsDetail from "./ProductsDetail";
import Products from "./Products";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1 >Products</h1>
        <div className="icons">
          <i
            className="fa fa-user-o"
            style={{ fontSize: "37px", color: "black",cursor:"pointer" }}
          ></i>
          <i
            className="fa fa-heart-o"
            style={{ fontSize: "37px", color: "black",cursor:"pointer" }}
          ></i>
          <i
            className="fa fa-shopping-cart"
            style={{ fontSize: "45px", color: "black", marginRight: "40px",cursor:"pointer" }}
          ></i>
        </div>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/:productId">
          <ProductsDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
