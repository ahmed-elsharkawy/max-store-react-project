import React, { useContext, useEffect, useState } from "react";
import "../components/sectionWindow.css";
import { CartContex } from "../context/CartContext";

function Cart() {
  let cart = JSON.parse(localStorage.getItem("cartList"));

  return (
    <>
      <div className="container">
        <div className="section text-center">
          <h1 className="my-5">Cart</h1>
          <div className="items-slider border w-100 p-3">
            <div className="row">
              {cart &&
                cart.map((item, index) => {
                  if (index <= cart.length) {
                    return (
                      <div
                        key={index}
                        className="my-2 col-12 col-lg-4 col-md-6"
                      >
                        <div className="product-window border p-2">
                          <div className="img">
                            <img
                              className="img-fluid"
                              src={item.image}
                              alt=""
                            />
                          </div>
                          <h5 className="product-title my-3">{item.title}</h5>
                          <div className="d-flex justify-content-around">
                            <p>{`price : ${item.price}$`}</p>{" "}
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
