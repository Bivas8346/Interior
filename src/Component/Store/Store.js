import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import StoreJSON from '../Store.json'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import './Store.css'

const Store = () => {
  return (
    <>
      <Container>
        <Row>
          {StoreJSON.Store.map((store) => (
            <Col xs={1} lg={3} md={2} xl={4} key={store.Store_id}>
              <Card className='sacard'>
                <Link to={`sub-store/${store.Store_id}`}>
                  <Card className="bg-white text-white">
                    <Card.Img src={store.Store_img} alt="Card image" className='sacard1' />
                    <Card.ImgOverlay>
                      <Card.Title className='sacard2'>{store.Store_name}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Card>
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
  )
}

export default Store