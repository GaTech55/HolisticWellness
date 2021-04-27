import React from 'react';
import { Navbar, NavDropdown, Nav, FormControl, Form, Button } from 'react-bootstrap';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="text-center">
            <Navbar variant="light" expand="lg" id="navBar" className="navbar-custom text-center">
                {/* <Navbar.Brand href="#home">HWK</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto py-3">
                        <Nav.Link href="#home" className="mx-2 px-4 navLink">Home</Nav.Link>
                        <Nav.Link href="#link" className="mx-2 px-4 navLink">About</Nav.Link>
                        <Nav.Link href="#link" className="mx-2 px-4 navLink">Podcast</Nav.Link>
                        <Nav.Link href="#link" className="mx-2 px-4 navLink">Contact</Nav.Link>
                        <Nav.Link href="#link" className="mx-2 px-4 navLink">Products</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown" className="mx-2 px-4 navLink">
                            <NavDropdown.Item className="dropdownItem" href="#action/3.1">Mind</NavDropdown.Item>
                            <NavDropdown.Item className="dropdownItem" href="#action/3.2">Body</NavDropdown.Item>
                            <NavDropdown.Item className="dropdownItem" href="#action/3.3">Spirit</NavDropdown.Item>
                            <NavDropdown.Item className="dropdownItem" href="#action/3.4">Motherhood</NavDropdown.Item>
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