import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import RoomJSON from '../Room.json'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Room = () => {
  return (
    <>
    <Container>
    <Row>
        {RoomJSON.Room.map((room)=>(
          <Col xs={1} lg={3} md={2} xl={4} key={room.Room_id}>
          <Card className='mm'>
            <Card.Img variant="top" src={room.Room_img} />
            <Card.Body>
              <Card.Title>{room.Room_name}</Card.Title>
              <Link to={`sub-room/${room.Room_id}`}>
                <Button variant="primary">View more</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>

    </Container>

    </>
  )
}

export default Room