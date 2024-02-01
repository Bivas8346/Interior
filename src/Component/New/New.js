import React from 'react';
import Card from 'react-bootstrap/Card';
import './New.css'
import { Col, Container, Row } from 'react-bootstrap';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const New = () => {
    return (
        <>



            <div className='visitm'>
                <div className='visitl'>
                    <h3>Find Nearest Store Around You</h3>
                    <input type="search" placeholder='Find Store' className='visitin' /><button className='visitb'>LOCATE STORE</button>
                </div>
                <Container className='visitcon'>
                    <Row>
                        <Col >
                            <Card style={{ width: '10rem' }} className='visiticon'>
                                <Card.Body>
                                    <LocationCityIcon fontSize='large' />
                                    <Card.Title>Kolkata</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '10rem' }} className='visiticon'>
                                <Card.Body>
                                    <LocationCityIcon fontSize='large' />
                                    <Card.Title>Mumbai</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '10rem' }} className='visiticon'>
                                <Card.Body>
                                    <LocationCityIcon fontSize='large' />
                                    <Card.Title>Delhi</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '10rem' }} className='visiticon'>
                                <Card.Body>
                                    <LocationCityIcon fontSize='large' />
                                    <Card.Title>Deharadun</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '10rem' }} className='visiticon'>
                                <Card.Body>
                                    <LocationCityIcon fontSize='large' />
                                    <Card.Title>Lackhnow</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '10rem' }} className='visiticon'>
                                <Card.Body>
                                    <LocationCityIcon fontSize='large' />
                                    <Card.Title>Assam</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Card style={{ width: '10rem' }} className='visiticon'>
                                <Card.Body>
                                    <LocationCityIcon fontSize='large' />
                                    <Card.Title>Jaipur</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '10rem' }} className='visiticon'>
                                <Card.Body>
                                    <LocationCityIcon fontSize='large' />
                                    <Card.Title>Puna</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '10rem' }} className='visiticon'>
                                <Card.Body>
                                    <LocationCityIcon fontSize='large' />
                                    <Card.Title>Hydrabad</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '10rem' }} className='visiticon'>
                                <Card.Body>
                                    <LocationCityIcon fontSize='large' />
                                    <Card.Title>Chennai</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '10rem' }} className='visiticon'>
                                <Card.Body>
                                    <LocationCityIcon fontSize='large' />
                                    <Card.Title>Bhopal</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '10rem' }} className='visiticon'>
                                <Card.Body>
                                    <LocationCityIcon fontSize='large' />
                                    <Card.Title>GurGaon</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <div className='visitadd'>
                    <br />
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>More Spacious Interiors</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Call - 4568923718</Card.Subtitle>
                            <Card.Text>
                                Bura Bazar, BT Road, Tobin Road, Kolkata - 700090
                            </Card.Text>
                            <Card.Link href="#">Locat The Store</Card.Link>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>More Spacious Interiors</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Call - 4568923718</Card.Subtitle>
                            <Card.Text>
                                Bura Bazar, BT Road, Tobin Road, Kolkata - 700090
                            </Card.Text>
                            <Card.Link href="#">Locat The Store</Card.Link>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>More Spacious Interiors</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Call - 4568923718</Card.Subtitle>
                            <Card.Text>
                                Bura Bazar, BT Road, Tobin Road, Kolkata - 700090
                            </Card.Text>
                            <Card.Link href="#">Locat The Store</Card.Link>
                        </Card.Body>
                    </Card>

                </div>
                <div className='visitmap'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14737.407726206508!2d88.40635058950845!3d22.565937036930514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275eff23edf37%3A0xdc56c0a757ecff53!2sWebskitters%20Academy!5e0!3m2!1sen!2sin!4v1683829215944!5m2!1sen!2sin"
                        width="700" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>'
                </div>
            </div>
        </>
    )
}

export default New