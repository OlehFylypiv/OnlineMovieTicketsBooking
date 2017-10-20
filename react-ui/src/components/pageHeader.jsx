import { Navbar } from 'react-bootstrap';
import { NavItem  } from 'react-bootstrap';
import { NavDropdown  } from 'react-bootstrap';
import { Nav } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'
import React, { Component } from 'react';

require('../css/stylesForMainNavBar.css');

class MainNavBar extends Component {
 
    render() {
        return (
            <Navbar inverse collapseOnSelect className="main-navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Lviv Cinema 4DX</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Item 1</MenuItem>
                            <MenuItem eventKey={3.2}>Item 2</MenuItem>
                            <MenuItem eventKey={3.3}>Item 3</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Contacts</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Sing In</NavItem>
                        <NavItem eventKey={2} href="#">Sing Up</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MainNavBar;
