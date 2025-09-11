import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/ban1.webp";
import ban2 from "../images/ban2.webp";
import ban3 from "../images/ban3.webp";
import ban4 from "../images/ban4.webp";
import ban5 from "../images/ban5.webp";
import ban6 from "../images/ban6.webp";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import card1 from "../images/card1.webp"
import card2 from "../images/card2.webp"
import card3 from "../images/card3.webp"
import card4 from "../images/card4.webp"
import card5 from "../images/card5.webp"


const Home = () => {
  return (
   <>
    <Carousel className="">
      <Carousel.Item >
       <img src={ban1} alt='banner'  className='max-w-full h-1/3'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={ban2} alt='banner'  className='w-full h-1/3'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ban3} alt='banner' className='w-full h-1/3'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item >
       <img src={ban4} alt='banner'  className='w-full h-1/3'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item >
       <img src={ban5} alt='banner'  className='w-full h-1/3'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item >
       <img src={ban6} alt='banner'  className='w-full h-1/3'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <h1 className='bg-gray-100 justify-center text-center mt-1 mb-1' >Our Top Collection</h1>

    <div id='topwatches' className='flex justify-center items-center gap-1 flex-wrap'>
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card4} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card5} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
   </>
  )
}

export default Home