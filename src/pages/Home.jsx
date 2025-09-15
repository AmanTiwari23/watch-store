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
import axios from 'axios';
import { addTocart } from '../cartSlice';
import { useDispatch } from 'react-redux';


const Home = () => {
  const[mydata,setMydata] = useState([]);
  const dispatch = useDispatch();

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
      <Card className="w-full sm:w-60 md:w-64 lg:w-72 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden m-2">
  {/* Image */}
  <Card.Img
    variant="top"
    src={key.image}
    className="h-48 w-full object-cover"
  />

  {/* Card Body */}
  <Card.Body className="p-4">
    {/* Brand */}
    <Card.Title className="text-lg font-semibold mb-1">{key.brand}</Card.Title>

    {/* Product Name (truncate after 2 lines) */}
    <Card.Text className="text-sm text-gray-700 line-clamp-1 mb-2">
      {key.name}
    </Card.Text>

    {/* Category */}
    <p className="text-sm text-red-500 mb-1">
      Category: {key.category}
    </p>

    {/* Price */}
    <p className="text-base font-bold text-blue-900 mb-3">
      Price: ₹{key.price}
    </p>

    {/* Button */}
    <Button
      variant="primary"
      className="w-full py-2 font-medium rounded-lg"  onClick={()=>{dispatch(addTocart({id:key.id, name:key.name, brand:key.brand, category:key.category, price:key.price, image:key.image, qnty:1}))}}
    >
      Add To Cart
    </Button>
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

    <div id='topwatches' className='flex justify-evenly items-center  flex-wrap w-[90%] m-auto'>
      {ans}
      
    </div>
   </>
  )
}

export default Home