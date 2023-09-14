import React, { Component } from "react";
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
          <div className="d-flex align-items-center m-5">
            <div className="flex-shrink-0">
              <img width={150} height={150} className="mr-3" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/23101492884387.5e5aaf3141f01.jpg" alt="..."/>
            </div>
            <div class="flex-grow-1 ms-3">
              <h5>Blog Post</h5>
              <p>Это какой-то контент из медиа-компонента. Вы можете заменить его любым содержимым и при необходимости отрегулировать его.</p>
            </div>
          </div>
          <div className="d-flex align-items-center m-5">
            <div className="flex-shrink-0">
              <img width={150} height={150} className="mr-3" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/23101492884387.5e5aaf3141f01.jpg" alt="..."/>
            </div>
            <div class="flex-grow-1 ms-3">
              <h5>Blog Post</h5>
              <p>Это какой-то контент из медиа-компонента. Вы можете заменить его любым содержимым и при необходимости отрегулировать его.</p>
            </div>
          </div>
          <div className="d-flex align-items-center m-5">
            <div className="flex-shrink-0">
              <img width={150} height={150} className="mr-3" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/23101492884387.5e5aaf3141f01.jpg" alt="..."/>
            </div>
            <div class="flex-grow-1 ms-3">
              <h5>Blog Post</h5>
              <p>Это какой-то контент из медиа-компонента. Вы можете заменить его любым содержимым и при необходимости отрегулировать его.</p>
            </div>
          </div>
          <div className="d-flex align-items-center m-5">
            <div className="flex-shrink-0">
              <img width={150} height={150} className="mr-3" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/23101492884387.5e5aaf3141f01.jpg" alt="..."/>
            </div>
            <div class="flex-grow-1 ms-3">
              <h5>Blog Post</h5>
              <p>Это какой-то контент из медиа-компонента. Вы можете заменить его любым содержимым и при необходимости отрегулировать его.</p>
            </div>
          </div>
          </Col>
          <Col md='3'>
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroupItem>
                  Html/css
                </ListGroupItem>
                <ListGroupItem>
                  JS
                </ListGroupItem>
                <ListGroupItem>
                  Python
                </ListGroupItem>
                <ListGroupItem>
                  Bootstrap
                </ListGroupItem>
              </ListGroup>
            </Card>

            <Card className="mt-5" bg="light">
              <Card.Body>
                <Card.Title className="text-center">Widget</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur.
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
