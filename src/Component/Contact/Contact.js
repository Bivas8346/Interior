import React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import "./Contact.css";

const Contact = () => {
    return (
        <>
            <section className="contact-page-section">
                <div className="container">
                    <div className="sec-title">
                        <div className="title">Contact Us</div>
                        <h2 className='contactin'>Let's Get in Touch.</h2>
                    </div>
                    <div className="inner-container">
                        <div className="row clearfix">

                            {/* <!--Form Column--> */}
                            <div className="form-column col-md-8 col-sm-12 col-xs-12">
                                <div className="inner-column">

                                    {/* <!--Contact Form--> */}
                                    <div className="contact-form">
                                        <form method="post" action="sendemail.php">
                                            <div className="row clearfix">
                                                <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                    <input className='inputcont' type="text" name="name" placeholder="Name" required />
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                    <input className='inputcone' type="email" name="email" placeholder="Email" required />
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                    <input className='inputcont' type="text" name="subject" placeholder="Subject" required />
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                                    <input className='inputcont' type="text" name="phone" placeholder="Phone" required />
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                                    <textarea className='inputconm' name="message" placeholder="Massage"></textarea>
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                                    <button type="submit" className="theme-btn btn-style-one">Send Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!--End Contact Form--> */}

                                </div>
                            </div>

                            {/* <!--Info Column--> */}
                            <div className="info-column col-md-4 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                    <h2 className='Contactin'>Contact Info</h2>
                                    <ul className="list-info">
                                        <li className='conlist'><PublicIcon className='contacticon'/>123 lorem ispum Abc, Street Chandigarh.</li>
                                        <li className='conlist'><AlternateEmailIcon className='contacticon'/>example@test</li>
                                        <li className='conlist'><PhoneIphoneIcon className='contacticon'/>1-234-567-890 <br />1-234-567-890</li>
                                    </ul>
                                    <ul className="social-icon-four">
                                        <li className="follow">Follow on: </li>
                                        <li className='conlist'><a href="#" className='Contactlink'><FacebookIcon className='contacticon'/></a></li>
                                        <li className='conlist'><a href="#" className='Contactlink'><TwitterIcon className='contacticon'/></a></li>
                                        <li className='conlist'><a href="#" className='Contactlink'><InstagramIcon className='contacticon'/></a></li>
                                        <li className='conlist'><a href="#" className='Contactlink'><GoogleIcon className='contacticon'/></a></li>
                                        <li className='conlist'><a href="#" className='Contactlink'><PinterestIcon className='contacticon'/></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact