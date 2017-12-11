import { Navbar, Modal, Button, FormControl } from 'react-bootstrap';
import { NavItem  } from 'react-bootstrap';
import { NavDropdown  } from 'react-bootstrap';
import { Nav } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'
import React, { Component } from 'react';

require('../css/stylesForMainNavBar.css');
 
class MainNavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            showAbout: false
        };

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.aboutClose = this.aboutClose.bind(this);
        this.aboutOpen = this.aboutOpen.bind(this);
    }
    
    close() {
        this.setState({ showModal: false });
    }
    
    open() {
        this.setState({ showModal: true });
    }

    aboutClose() {
        this.setState({ showAbout: false });
    }

    aboutOpen() {
        this.setState({ showAbout: true });
    }

    render() {
        return (
            <div>
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
                                <MenuItem eventKey={3.1} onClick={this.aboutOpen}>About</MenuItem>
                                <MenuItem eventKey={3.2}>Career</MenuItem>
                                <MenuItem eventKey={3.3}>Team</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Contacts</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#" onClick={this.open}>Sing In</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <FormControl
                                className="inputs-seats-free"
                                type="email"
                                placeholder="Enter your email"
                                required="true"
                            />
                            <FormControl
                                className="inputs-seats-free"
                                type="password"
                                placeholder="Enter your pasword"
                                required="true"
                            />
                            <Button type="submit" className="inputs-seats-free" bsStyle="success">Enter</Button>
                        </form>
                    </Modal.Body>
                </Modal>
                
                <Modal show={this.state.showAbout} onHide={this.aboutClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>About our Cinema</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                           <b>Lviv Cinema 4DX</b> is your affordable movie option! We are located in the Great East Plaza at the Eastwood Mall complex in Niles, near Buffalo Wild Wings. Encore features digital projection in all auditoriums and digital surround sound. We also have the lowest concession prices of any indoor theatre in the area. Our friendly staff is here to help ensure that you have the best experience possible. We also operate Warren's oldest continually operated drive-in theatre, Skyway Twin Drive-In Theatre on North Leavitt Rd. For the most up to date news and information on Encore Cinema, please like us on Facebook. We hope to see you soon! We also operate the North Leavitt Rd. Skyway Twin Drive-In Theatre. Laser Storm laser tag parties are available at Skyway all year round. Visitwww.skywaydrivein.com or call the laser tag info line at 330-647-6250 for more information. You can also visit us at Boardman Movies 8 in the Shops at Boardman Park for great discount movies. Visit www.boardmanmovies8.com for more info.
                        </p>       
                    </Modal.Body>
                </Modal>

            </div>
        );
    }
}

export default MainNavBar;


 
      

  