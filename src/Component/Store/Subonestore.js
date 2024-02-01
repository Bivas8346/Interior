import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StoreJSON from "../Store.json";

const Subonestore = () => {
  let { store_i, store_o } = useParams();
  console.log("Recived from url in subitem", store_o);
  let subo = StoreJSON.Store.find((data) => data.Store_id === store_i);
  console.log("sub store:", subo);

  let subs = subo.sub_store.find((data) => data.sub_id === store_o);
  console.log("sub store:", subs);

  return (
    <>
      <Container>
        <h1>{subs.sub_name}</h1>
        <Row xs={1} md={2} lg={3} xl={4}>
          {subs.pro_store.map((Y) => (
            <Col key={Y.pro_id}>
              <ul className="scards">
                <li className="sards_item">
                  <div className="scard">
                    <div className="scard_image"><img className="simg" src={Y.pro_img} /></div>
                    <div className="scard_content">
                      <h2 className="scard_title">{Y.pro_name}</h2>
                      <p className="scard_text"></p>
                      <Link to={`storedes/${Y.pro_id}`} className="scardl"><button className="sbtn scard_btn">See More</button></Link>
                    </div>
                  </div>
                </li>
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
      <div className='hcard7'>
        <img src='../../../../Assats/home1/ff.jpg' alt='photo' width={1500} />
        <p className='hcardlp'>Make Your Dream Home As You Like</p>
        <Link to={"/Contact"}> <button className='hcardlpb'>JOURNEY WITH US</button> </Link>
      </div>
    </>
  );
};

export default Subonestore;
