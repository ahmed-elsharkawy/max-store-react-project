import React from "react";
import "./myHeader.css";

function MyHeader() {
  return (
    <>
      <div className="head position-relative">
        <div className="layer w-100 h-100 d-flex justify-contnet-center align-items-center ">
          <div className="container">
            <h1 className="text-light text-center w-75 m-auto line">
              Happiness is not in money, but in shopping
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyHeader;
