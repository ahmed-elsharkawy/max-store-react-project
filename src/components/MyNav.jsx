import { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContex } from "../context/CartContext";

function MyNav() {
  let cartLength = useContext(CartContex).cartLength;
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <i className="fa-solid fa-m mx-1 p-2 rounded bg-danger text-light h2"></i>
          ax store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav.Link
          as={Link}
          to="/cart"
          className=" border mx-3 px-3 rounded text-dark"
        >
          <i className="fa-solid fa-cart-plus"></i>
          <span className="ml-3">{cartLength}</span>
        </Nav.Link>
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/electronics">
              Electronics
            </Nav.Link>
            <Nav.Link as={Link} to="/clothes">
              Clothes
            </Nav.Link>
            <Nav.Link as={Link} to="/jewelery">
              Jewelery
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
