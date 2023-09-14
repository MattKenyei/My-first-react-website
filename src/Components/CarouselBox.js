import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import firstImg from '../assets/12.jpeg';
import secondImg from '../assets/23.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
            <img
                className='d-block w-100'
                src={firstImg}
                alt='1'
            />
            <Carousel.Caption>
                <h3>Perfect view</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, excepturi?</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className='d-block w-100'
                src={secondImg}
                alt='2'
            />
            <Carousel.Caption>
                <h3>Perfect world</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, expedita!</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
