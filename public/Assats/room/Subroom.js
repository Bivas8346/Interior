import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import RoomJSON from '../Room.json'

const Subroom = () => {
  let { room_i } = useParams();
    console.log("Recived from url in subitem", room_i);
    let sub_r = RoomJSON.Room.find((data) => data.Room_id === room_i)
    console.log("sub room:", sub_r)
  return (
    <>
    <Container>
                <h1>{sub_r.Room_name}</h1>
                <Row xs={1} md={2} lg={3} xl={4}>
                    {
                        sub_r.sub_room.map((Y) => (
                            <Col key={Y.sub_id}>
                                <Card.Img variant="top" src={Y.sub_img} />
                                <Card.Body>
                                    <Card.Title>{Y.sub_name}</Card.Title>

                                    <Button variant="primary">More</Button>

                                </Card.Body>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
    </>
  )
}

export default Subroom