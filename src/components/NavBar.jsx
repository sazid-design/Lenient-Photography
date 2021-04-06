import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles.css";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Package from "../pages/Package";
import Contacts from "../pages/Contacts";

export default function NavBar() {
  return (
    <>
      <div className="appbar">
        <div className="title">Leninent Photography</div>
      </div>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <div className="navbar">
            <Navbar.Brand href="/">Lenient Photography</Navbar.Brand>
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>

              <LinkContainer to="packages">
                <Nav.Link>Packages</Nav.Link>
              </LinkContainer>

              <LinkContainer to="contacts">
                <Nav.Link>Contacts</Nav.Link>
              </LinkContainer>
            </Nav>
          </div>
        </Navbar>

        <Route path="/" exact component={Homepage}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/packages" component={Package}></Route>
        <Route path="/contacts" component={Contacts}></Route>
      </BrowserRouter>
    </>
  );
}
