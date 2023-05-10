import React, { useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const Products = () => {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    <div className="products" lg="3" md="4" sm="6" xs="6">
      {items.map((item) => {
        return (
          <div className="product__item mt-5" key={item.id}>
            <h6>{item.ctegory_type}</h6>
            <div className="product__img">
              <img src={item.img} alt="product-img" className="w-100" />
            </div>
            <h6>{item.size}</h6>
            <div className="d-flex align-items-center justify-content-between px-5">
              <p>Price:{item.price}</p>
              <p>MRP:{item.mrp}</p>
            </div>
            <button
              className="addTOCart__btn"
              onClick={() => dispatch(addToCart(item))}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
