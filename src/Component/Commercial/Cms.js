import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CmsJSON from '../Cms.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import GradeIcon from '@mui/icons-material/Grade';
import Carousel from 'react-bootstrap/Carousel';
import "./Cms.css"

const Cms = () => {
  return (
    <>
      <Container>
        <Row>
          {CmsJSON.Cms.map((C) => (
            <Col xs={1} lg={3} md={2} xl={4} key={C.Cms_id}>


              <figure className="snip1418">
                <Carousel slide={false}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={C.Cms_img1} height={230}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={C.Cms_img2} height={230}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={C.Cms_img3} height={230}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={C.Cms_img4} height={230}
                      alt="fourth slide"
                    />
                  </Carousel.Item>
                </Carousel>
                {/* <img src={C.Cms_img1} alt="sample85" height={230} /> */}
                <div className="add-to-cart"> <GradeIcon /><span>New Model</span></div>
                <figcaption>
                  <h3 className='sph'>{C.Cms_name}</h3>
                  <p className='spp'>All this modern technology just makes people try to do everything at once.</p>
                </figcaption><a href="#"></a>
              </figure>

              {/* <Card className='mm'>
                <Card.Img variant="top" src={C.Cms_img1} className='rcard1' />
                <Card.Body>
                  <Card.Title>{C.Cms_name}</Card.Title>

                  <Button variant="primary">View more</Button>

                </Card.Body>
              </Card> */}
            </Col>
          ))}
        </Row>
      </Container>

    </>
  )
}

export default Cms