import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='foot'>
                <Container className='footc'>
                    <Row>
                        <Col sm><img src='../../../../Assats/Blog/logof.png' width={190}/>
                            <h3>Join Us</h3>
                            <Link to='https://www.facebook.com/' target="_blank" className='fimg'>
                                <img
                                    src='../Assats/Footer/facebook.png' className='fimg1' />
                            </Link>
                            <Link to='https://twitter.com/?lang=en-in' target="_blank" className='fimg'>
                                <img
                                    src='../Assats/Footer/twitter.png' className='fimg2' />
                            </Link>
                            <Link to='https://www.instagram.com/?hl=en' target="_blank" className='fimg'>
                                <img
                                    src='../Assats/Footer/insta.png' className='fimg3' />
                            </Link>
                            <Link to='https://www.youtube.com/' target="_blank" className='fimg'>
                                <img
                                    src='../Assats/Footer/youtube.png' className='fimg4' />
                            </Link>
                            <Link to='https://in.linkedin.com/' target="_blank" className='fimg'>
                                <img
                                    src='../Assats/Footer/linkedin.png' className='fimg5' />
                            </Link>
                            <div className='fappsp'>
                                <p>DOWNLOAD OUR APPS</p>
                                <Link to='https://play.google.com/store/games' target="_blank">
                                    <img
                                        src='../Assats/Footer/gapp.jpg' className='fapps1' /></Link>
                                <Link to='https://www.apple.com/app-store/' target="_blank">
                                    <img
                                        src='../Assats/Footer/oapp.jpg' className='fapps2' /></Link>

                            </div>
                        </Col>
                        <Col sm>
                            <p>COMPANY</p>
                            <ul className='fp'>
                                <p>Policies</p>
                                <p>Visit us</p>
                                <p>Careers</p>
                                <p>Terms & Condition</p>
                                <p>Interior Designe</p>
                                <p>Our Location</p>
                                <p>Privecy</p>
                            </ul>
                        </Col>
                        <Col sm>
                            <p>Contact Us</p>
                            <p className='fp1'>Call Us</p>
                            <p className='fp2'>7894561236</p>
                            <p className='fp1'>Email Us</p>
                            <p className='fp2'>Abcdefg@gnail.in</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer