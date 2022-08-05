import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ReactComponent as Logo } from "../logo.svg";



function NavBar(props) {

    
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
                <Nav >
                    {/* <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    <NavDropdown title="Informes" id="collasible-nav-dropdown"  >
                        <NavDropdown.Item href="#action/3.1" >Informe 1</NavDropdown.Item>
                        <NavDropdown.Item href="/PivotTable">Informe dinamico</NavDropdown.Item>
                        <NavDropdown.Item href='VentasCajeroAfil'>Ventas cajero Afiliado</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item href='VentasCajeroNoAfil'>Ventas cajero total</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="DinamicasDeVenta" >DashBoard</Nav.Link>
                    <Nav.Link href="/"  >Cerrar Sesion</Nav.Link>
                </Nav>

            </Navbar.Collapse>

        </Navbar>
    );
}
export default NavBar

