import React, { useEffect, useState } from "react";
import ProductWindow from "./ProductWindow";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import "./sectionWindow.css";

function SectionWindow(props) {
  let [dataList, setDataList] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${props.section}`)
      .then((response) => {
        setDataList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let category = "";
  if (props.section === "men's clothing") {
    category = "clothes";
  } else {
    category = props.section;
  }
  return (
    <>
      <div className="container">
        <div className="section text-center">
          <h1 className="my-5">{category}</h1>
          <div className="items-slider border w-100 p-3">
            <div className="row">
              {dataList &&
                dataList.map((item, index) => {
                  if (index <= 2) {
                    return (
                      <div
                        key={index}
                        className="my-2 col-12 col-lg-4 col-md-6"
                      >
                        <ProductWindow data={item}></ProductWindow>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
            </div>
            <button className="btn btn-outline-danger mt-5">
              <Nav.Link
                className="text-dark w-100"
                as={Link}
                to={`/${category}`}
              >
                See All Products
              </Nav.Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWindow;
