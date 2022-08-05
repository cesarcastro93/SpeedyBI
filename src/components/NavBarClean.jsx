import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "../logo.svg";



function NavBarClean(props) {

    const [stateLogin, setstateLogin] = useState(false);

   
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >
                <Logo
                    alt=""
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />
                SpeedyBI
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="me-auto" >

                </Nav>
               

            </Navbar.Collapse>

        </Navbar>
    );
}
export default NavBarClean

