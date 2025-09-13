import React, { useEffect, useState } from 'react'
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
import axios from 'axios';


const Home = () => {
  const[mydata,setMydata] = useState([]);

  const loadData = async()=>{
    let api = "http://localhost:3000/products";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }

  useEffect(()=>{
    loadData();
  },[])

  const ans = mydata.map((key)=>{
    return(
      <>
        <Card className='w-56'>
      <Card.Img variant="top" src={key.image} className='w-10 h-48' />
      <Card.Body>
        <Card.Title>{key.brand}</Card.Title>
        <Card.Text>
           {key.name}
           <br />
           <span style={{color:"red"}}>Category : {key.category}</span> 
           <br />
           <span style={{color:"navy" , fontWeight:"bold"}}>Price : {key.price}</span> 
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
      </>
    )
  })

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

    <div id='topwatches' className='flex justify-evenly items-center  flex-wrap'>
      {ans}
      
    </div>
   </>
  )
}

export default Home