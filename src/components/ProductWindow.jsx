import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./productWindow.css";

function ProductWindow(props) {
  let {
    id,
    title,
    price,
    image,
    rating: { rate },
  } = props.data;
  return (
    <>
      <div className="product-window border p-2">
        <div className="img">
          <img className="img-fluid" src={image} alt="" />
        </div>
        <h5 className="product-title my-3">{title}</h5>
        <div className="d-flex justify-content-around">
          <p>{`price : ${price}$`}</p> <p>{`rate : ${rate}`}</p>
        </div>
        <Nav.Link
          className="btn btn-outline-danger text-dark"
          as={Link}
          to={`/productDetails/${id}`}
        >
          Order Now
        </Nav.Link>
      </div>
    </>
  );
}

export default ProductWindow;
