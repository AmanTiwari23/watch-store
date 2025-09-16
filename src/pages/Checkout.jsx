import axios from "axios";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [input,setInput] = useState({});
    const navigate = useNavigate();
    const cartdata = useSelector(store=> store.mycart.cart);
    

    const handleInput = (e)=>{
       let name = e.target.name;
       let value = e.target.value;

       setInput(values=> ({...values , [name]:value}));
       
    }
     
    let products=[];
    let totalAmount= 0;
    const ans = cartdata.map((key)=>{
         products.push(key.name);
         totalAmount+=key.price*key.qnty;
    });

   const handleSubmit = async (e)=>{
      e.preventDefault();
      let api = "http://localhost:3000/checkout";
      
      let response = await axios.post(api,input)
       console.log(response);
      navigate("/paydone");


   }

  return (
    <>
      <h1>CheckOut</h1>
      <h6>Products : {products}</h6>
      <h3>Net Payble Amount : {totalAmount}</h3>
       <Form style={{margin:"auto", width:"400px"}}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name="city" onChange={handleInput} />
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Shipping Address</Form.Label>
        <Form.Control type="text" name="shipadd" onChange={handleInput}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Contact No.</Form.Label>
        <Form.Control type="text" name="contact" onChange={handleInput}/>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Pin Code</Form.Label>
        <Form.Control type="text" name="zipcode" onChange={handleInput}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      </Form>
    </>
  );
};

export default Checkout;
