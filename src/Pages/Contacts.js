import React, { Component } from 'react'
import { Container, Form, Button } from "react-bootstrap";

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{width: '500px'}}>
        <h1 className='text-center'>Contact Us</h1>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>
              Email adress
            </Form.Label>
            <Form.Control type='email' placeholder='email'></Form.Control>
            <Form.Text>we'll share your email</Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>
              Textarea
            </Form.Label>
            <Form.Control as='textarea' rows="3" />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label="Check me out" />
          </Form.Group>
          <Button variant="primary">Submit</Button>
        </Form>
      </Container>
    )
  }
}
