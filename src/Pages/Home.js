import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Button, Card, CardGroup, Container, Row } from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
      <>
      <CarouselBox/>
      <Container>
        <h2 className="text-center m-4">our team</h2>
        <CardGroup className='m-4'>
          <Card className='me-2' border='success'>
            <Card.Img variant='top' src='https://techfruit.com/wp-content/uploads/2017/09/office-2.jpg' />
            <Card.Body>
              <Card.Title>
                Developers
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem in veniam.
              </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body> 
          </Card>
          <Card className='me-2'border='success'>
            <Card.Img variant='top' src='https://www.theparagraph.ru/wp-content/uploads/2019/12/O6NM390.jpg' />
            <Card.Body>
              <Card.Title>
                Bigs
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem in veniam.
              </Card.Text>
              <Button variant='primary'>About them</Button>
            </Card.Body> 
          </Card>
          <Card className='me-2'border='success'>
            <Card.Img variant='top' src='https://s0.rbk.ru/v6_top_pics/media/img/2/38/756179764002382.jpg' />
            <Card.Body>
              <Card.Title>
                Developers
              </Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quidem in veniam.
              </Card.Text>
              <Button variant='primary'>About team</Button>
            </Card.Body> 
          </Card>
        </CardGroup>
      </Container>
      </>
    )
  }
}
