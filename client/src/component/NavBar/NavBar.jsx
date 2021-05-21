import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import "./NavBar.css";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <div className="text-center">
      <Navbar
        variant="light"
        expand="lg"
        id="navBar"
        className="navbar-custom text-center"
      >
        {/* <Navbar.Brand href="#home">HWK</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto py-3">
            <LinkContainer to="/">
              <Nav.Link className="mx-2 px-4 Nav.Link">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="mx-2 px-4 Nav.Link">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link className="mx-2 px-4 Nav.Link">Podcast</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link className="mx-2 px-4 Nav.Link">
                Contact
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link to="#link" className="mx-2 px-4 Nav.Link">
                Products
              </Nav.Link>
            </LinkContainer>
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              className="mx-2 px-4 Nav.Link"
            >
              {/* Need to apply the same process as above with the linkcontainer below and add a "to" but then remove the href in the dropdown item */}
              <LinkContainer to="/mind">
                <NavDropdown.Item className="dropdownItem">
                  Mind
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/body">
                <NavDropdown.Item className="dropdownItem">
                  Body
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/spirit">
                <NavDropdown.Item className="dropdownItem">
                  Spirit
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/motherhood">
                <NavDropdown.Item className="dropdownItem">
                  Motherhood
                </NavDropdown.Item>
              </LinkContainer>

            </NavDropdown>
          </Nav>
          {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-dark">Search</Button>
                    </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
