import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StoreJSON from "../Store.json";
// import "./Store.css";
import './Substore.css'

const Substore = () => {
  let { store_i } = useParams();
  console.log("Recived from url in subitem", store_i);
  let sub_s = StoreJSON.Store.find((data) => data.Store_id === store_i);
  console.log("sub store:", sub_s);
  return (
    <>
      <Container>
        <h1>{sub_s.Store_name}</h1>
        <Row xs={1} md={2} lg={3} xl={4}>
          {sub_s.sub_store.map((Y) => (
            <Col key={Y.sub_id}>
              <Link to={`subo_store/${Y.sub_id}`} className="sslink">
                <div className="shell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="wsk-cp-product">
                          <div className="wsk-cp-img">
                            <img src={Y.sub_img} alt="Product" className="img-responsive" />
                          </div>
                          <div className="wsk-cp-text">
                            <div className="category">
                              <span className="caspan">New</span>
                            </div>
                            <div className="title-product">
                              <h3>{Y.sub_name}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container >
      <div className='hcard7'>
        <img src='../../../../Assats/home1/ff.jpg' alt='photo' width={1500} />
        <p className='hcardlp'>Make Your Dream Home As You Like</p>
        <Link to={"/Contact"}> <button className='hcardlpb'>JOURNEY WITH US</button> </Link>
      </div>

    </>

  );
};

export default Substore;
