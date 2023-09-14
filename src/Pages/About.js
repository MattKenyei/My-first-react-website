import React, { Component } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-coloumn mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">First</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Second</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Third</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Fourth</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img src="https://avatars.mds.yandex.net/get-mpic/4818396/img_id1629069491418859679.png/orig" alt="1" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam molestias itaque fugiat tempore hic perspiciatis
                    sunt vitae natus. Doloribus voluptates, nisi hic maiores
                    ipsam quidem?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="https://yt3.googleusercontent.com/rWemIgxZ1f2Pdd9Trgw5EG4BBSLDlUmgHCxmv_fUW7yQAqQ7qIlHRa3r-9aL8LLm8_ruzg-KEQ=s900-c-k-c0x00ffffff-no-rj" alt="2" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa libero doloremque reprehenderit, earum a ad nostrum
                    quidem reiciendis. Sapiente vero corporis ea consequuntur
                    excepturi voluptatum.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="https://zakazposterov.ru/fotooboi/img/13875?effects=sp" alt="1" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam molestias itaque fugiat tempore hic perspiciatis
                    sunt vitae natus. Doloribus voluptates, nisi hic maiores
                    ipsam quidem?
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="https://dob.kz/upload/iblock/dc1/c7l8liw4bfhnc3oqwr3rds4frae1aqea/E_001.jpg" alt="1" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam molestias itaque fugiat tempore hic perspiciatis
                    sunt vitae natus. Doloribus voluptates, nisi hic maiores
                    ipsam quidem?
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
