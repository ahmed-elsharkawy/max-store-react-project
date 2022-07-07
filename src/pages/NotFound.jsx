import React from "react";
import { useNavigate } from "react-router-dom";
import "./notFound.css";

function NotFound() {
  let navigate = useNavigate();
  function goHomePage() {
    navigate("/home");
  }
  return (
    <>
      <h1 className="notFound">404</h1>
      <button
        className="go-home btn btn-outline-danger px-5 py-3"
        onClick={goHomePage}
      >
        go to home
      </button>
    </>
  );
}

export default NotFound;
