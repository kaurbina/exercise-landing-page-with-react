import React from 'react';
import './Menu.css';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown'

class Menu extends React.Component {
    render() {
        return (
            <Nav className="navbar-expand-md navbar-dark fixed-top bg-dark">    
                <a className="navbar-brand ml-4" href="/#">Mi Proyecto</a>
                <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>

                <div className="collapse navbar-collapse justify-content-end mr-4" id="navbarCollapse">
                    <Nav.Item as="li">
                        <Nav.Link className="text-white" href="/#">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link className="text-white" href="/#">About</Nav.Link>
                    </Nav.Item>
                    <NavDropdown className="text-white" title="Services" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item as="li">
                        <Nav.Link className="text-white" href="/#">Contact</Nav.Link>
                    </Nav.Item>
                </div>
            </Nav>
        )
    }
}

export default Menu;