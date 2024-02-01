import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'

const Header = () => {
    let navi = useNavigate();
    let jump = window.sessionStorage.getItem("token");

    let handleLogout = () => {
        window.sessionStorage.clear();
        console.log("log out done");
        alert("log out");
        navi("/log");
    }
    return (
        <>
            {/* navebar1 */}
            <Navbar expand="lg" sticky="top" className='nav1'>
                <Container>
                    <Navbar.Brand as={Link} to="/" ><img src='../../../../Assats/Blog/logof.png' width={150} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/Room" className='navp2'>Interiors</Nav.Link>
                            <Nav.Link as={Link} to="/Store" className='navp2'>Store</Nav.Link>
                            <NavDropdown as={Link} to="/new" title="Cities" id="basic-nav-dropdown" className='navp2'>
                                <option value="delhi">Delhi</option>
                                <option value="maharastha">Mumbai</option>
                                <option value="WB">Kolkata</option>
                                <option value="TN">Chennai</option>
                                <option value="kerala">Kochi</option>
                                <option value="karnatak">Bangalore</option>
                                <option value="AP">Hydrabad</option>
                                <option value="rajasthan">Jaipur</option>
                                <option value="maharastha">Puna</option>
                                <option value="WB">Siliguri</option>
                                <option value="UK">Deharadun</option>
                                <option value="MP">Bhopal</option>
                                <option value="UP">Lackhnow</option>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/about" className='navp2'>About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <NavDropdown title="Sign up/Log in" id="basic-nav-dropdown" className='navp2a'>
                            {!jump ? (
                            <>
                                <NavDropdown.Item as={Link} to="/reg">Sign UP</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/log">Login</NavDropdown.Item>
                            </>
                            ) : (
                                <>
                                    <NavDropdown.Item as={Link} to="/pro">Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                                </>
                            )}
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* navebar2 */}
            <Navbar variant="light" className='nav2'>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/contact" className='navp2'>Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/blog" className='navp2'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/cms" className='navp2'>Commercial Interiors</Nav.Link>
                        <Nav.Link as={Link} to="/new" className='navp2'>Visit Us</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default Header