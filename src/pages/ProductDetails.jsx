import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { CartContex } from "../context/CartContext";

function ProductDetails() {
  let cart = useContext(CartContex);
  let { id } = useParams();
  let [productData, setproductData] = useState();
  let getAllUseres = async () => {
    let response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setproductData(response.data);
  };
  useEffect(() => {
    getAllUseres();
  });
  let x = useContext(CartContex);

  let orderItem = () => {
    let cartList = [];
    if (localStorage.getItem("cartList")) {
      cartList = JSON.parse(localStorage.getItem("cartList"));
      cartList.push(productData);
      localStorage.setItem("cartList", JSON.stringify(cartList));
    } else {
      cartList.push(productData);
      localStorage.setItem("cartList", JSON.stringify(cartList));
    }
    x.addItem();
  };
  return (
    <>
      {productData && (
        <div className="productDetail w-75 mx-auto my-5 border p-3 text-center">
          <img className="img-fluid" src={productData?.image} alt="" />
          <h2 className="m-5">{productData?.title}</h2>
          <p className="m-5">{productData?.description}</p>
          <div className="d-flex justify-content-around">
            <p>{`price : ${productData?.price}$`}</p>{" "}
            <p>{`rate : ${productData?.rating?.rate}`}</p>
          </div>
          <Nav.Link
            onClick={orderItem}
            className="btn btn-outline-danger text-dark my-3"
            as={Link}
            to={`/cart`}
          >
            Order Now
          </Nav.Link>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
