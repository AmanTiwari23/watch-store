import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/titan-logo.svg";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const TopMenu = () => {
  const [show,setShow] = useState(false);
  const [email,setEmail]= useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const handleShow = () => setShow(true);
  const handleClose = ()=>setShow(false);

  const handleSubmit = async(e)=>{
    e.preventDefault();
    let api = `http://localhost:3000/admin/?adminid=${email}`;

    const response = await axios.get(api);

    console.log(response.data);

    if(response.data.length>=1){
      
        if(response.data[0].password == password){
                navigate("/admin");
        }else{
          alert("wrong password");
        }
      
    }else{
      alert("Invalid Email");
    }

  }

  return (
    <>
    <div id='topmenu' className='flex justify-between items-center ml-3.5 mr-3.5'>
      <div id='logo'className='ml-6'>
        <img src={logo} alt="logo" className='w-32' />
      </div>

      <div id='mainmenu' className='w-[50%] p-1'>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <div id='rightmenu'>
         <Button variant="secondary" onClick={handleShow}> Admin login</Button>
         
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
           <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleSubmit}>
       Login
      </Button>
    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
    </>
  )
}

export default TopMenu;