import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import RoomJSON from "../Room.json";
import "./Subroom.css";

const Subroom = () => {
  let { room_i } = useParams();
  console.log("Recived from url in subitem", room_i);
  let sub_r = RoomJSON.Room.find((data) => data.Room_id === room_i);
  console.log("sub room:", sub_r);
  return (
    <>
      <Container>
        <h1>{sub_r.Room_name}</h1>
        <Row xs={1} md={2} lg={3} xl={3}>
          {sub_r.sub_room.map((Y) => (
            <Col key={Y.sub_id}>
              <ul className="scards">
                <li className="sards_item">
                  <div className="scard">
                    <div className="scard_image"><img className="simg" src={Y.sub_img} /></div>
                    <div className="scard_content">
                      <h2 className="scard_title">{Y.sub_name}</h2>
                      <p className="scard_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                      <Link className="scardlink" to={`details/${Y.sub_id}`}><button className="sbtn scard_btn">Read More</button></Link>
                    </div>
                  </div>
                </li>
              </ul>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="Page">
        <div className="Main-page">
          <div className="pin-board">
            <ul className="pins">
              <li className="pin">
                <div className="pin-inner">
                  <div className="pin-thumbnail">
                    <div className="pin-hover">
                      <i className="fa fa-eye"></i>
                    </div>
                    <img src="https://s-media-cache-ak0.pinimg.com/736x/d9/01/63/d90163df2645f4e123a71a647ca68769.jpg" />
                  </div>
                  <div className="pin-bar">
                    <span>Lorem ipsum</span>
                    <span>8 Pins</span>
                    <div className="pin-edit">
                      {/* <button type="submit"><i className="fa fa-pencil"></i></button> */}
                      {/* <button type="submit"><i className="fa fa-close"></i></button> */}
                    </div>
                  </div>
                  <div className="pin-info">
                    <div className="pin-title">Scandinavian interior</div>
                    <div className="pin-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur, enim autem deleniti totam commodi quae vero quod aut nemo sunt expedita, veritatis, molestias. Ad praesentium, ea quas rerum minima.</div>
                  </div>
                </div>
              </li>

              <li className="pin">
                <div className="pin-inner">
                  <div className="pin-thumbnail">
                    <div className="pin-hover">
                      <i className="fa fa-eye"></i>
                    </div>
                    <img src="http://cdn.decoist.com/wp-content/uploads/2015/05/Scandinavian-home-office-decorating-idea.jpg" />
                  </div>
                  <div className="pin-bar">
                    <span>Lorem ipsum</span>
                    <span>18 Pins</span>
                    <div className="pin-edit">
                      {/* <button type="submit"><i className="fa fa-pencil"></i></button> */}
                      {/* <button type="submit"><i className="fa fa-close"></i></button> */}
                    </div>
                  </div>
                  <div className="pin-info">
                    <div className="pin-title">Scandinavian interior</div>
                    <div className="pin-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, repellendus obcaecati ipsa commodi ea quos rerum, unde eaque odit, ipsum fugit distinctio facere. Eos quos nemo, incidunt quibusdam architecto quo?</div>
                  </div>
                </div>
              </li>


              <li className="pin">
                <div className="pin-inner">
                  <div className="pin-thumbnail">
                    <div className="pin-hover">
                      <i className="fa fa-eye"></i>
                    </div>
                    <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2015/12/Scandinavian-dining-room-design-ideas-wooden-table-wood-flooring.jpg" />
                  </div>
                  <div className="pin-bar">
                    <span>Lorem ipsum</span>
                    <span>2 Pins</span>
                    <div className="pin-edit">
                      {/* <button type="submit"><i className="fa fa-pencil"></i></button> */}
                      {/* <button type="submit"><i className="fa fa-close"></i></button> */}
                    </div>
                  </div>
                  <div className="pin-info">
                    <div className="pin-title">Scandinavian interior</div>
                    <div className="pin-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi doloremque quae placeat dolores atque dolore ducimus, harum debitis possimus, ex numquam, temporibus illum perferendis et excepturi culpa id modi magnam?</div>
                  </div>
                </div>
              </li>


              <li className="pin">
                <div className="pin-inner">
                  <div className="pin-thumbnail">
                    <div className="pin-hover">
                      <i className="fa fa-eye"></i>
                    </div>
                    <img src="https://s-media-cache-ak0.pinimg.com/736x/bb/5c/2a/bb5c2a26e2b8ca2af7fd0f0ecbb2e1ba.jpg" />
                  </div>
                  <div className="pin-bar">
                    <span>Lorem ipsum</span>
                    <span>32 Pins</span>
                    <div className="pin-edit">
                      {/* <button type="submit"><i className="fa fa-pencil"></i></button> */}
                      {/* <button type="submit"><i className="fa fa-close"></i></button> */}
                    </div>
                  </div>
                  <div className="pin-info">
                    <div className="pin-title">Scandinavian interior</div>
                    <div className="pin-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias est placeat odit, ullam repudiandae ratione ipsam impedit dolorum eligendi, delectus pariatur animi quia libero, sequi praesentium! Consectetur ea consequatur dolores!</div>
                  </div>
                </div>
              </li>
              <li className="pin">
                <div className="pin-inner">
                  <div className="pin-thumbnail">
                    <div className="pin-hover">
                      <i className="fa fa-eye"></i>
                    </div>
                    <img src="https://s-media-cache-ak0.pinimg.com/736x/ef/3a/d8/ef3ad838c7905baaaac44324828f9192.jpg" />
                  </div>
                  <div className="pin-bar">
                    <span>Lorem ipsum</span>
                    <span>8 Pins</span>
                    <div className="pin-edit">
                      {/* <button type="submit"><i className="fa fa-pencil"></i></button> */}
                      {/* <button type="submit"><i className="fa fa-close"></i></button> */}
                    </div>
                  </div>
                  <div className="pin-info">
                    <div className="pin-title">Scandinavian interior</div>
                    <div className="pin-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dicta id libero doloribus delectus, tenetur, at enim pariatur quibusdam commodi quas eum sunt natus mollitia amet voluptatem, assumenda. Ab, quam.</div>
                  </div>
                </div>
              </li>
              <li className="pin">
                <div className="pin-inner">
                  <div className="pin-thumbnail">
                    <div className="pin-hover">
                      <i classNames="fa fa-eye"></i>
                    </div>
                    <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2015/12/Scandinavian-dining-room-design-ideas-wooden-table-wood-flooring.jpg" />
                  </div>
                  <div className="pin-bar">
                    <span>Lorem ipsum</span>
                    <span>24 Pins</span>
                    <div className="pin-edit">
                      {/* <button type="submit"><i className="fa fa-pencil"></i></button> */}
                      {/* <button type="submit"><i className="fa fa-close"></i></button> */}
                    </div>
                  </div>
                  <div className="pin-info">
                    <div className="pin-title">Scandinavian interior</div>
                    <div className="pin-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio laudantium, omnis deleniti magnam, nisi amet. Temporibus voluptas, praesentium eveniet ab, iusto harum explicabo, laboriosam dignissimos exercitationem perspiciatis beatae
                      ullam commodi.</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </>
  );
};

export default Subroom;
