import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const Orders = () => {

    const [mydata,setMydata] = useState([]);

    const loadData = async()=>{
     let api = "http://localhost:3000/checkout";

     let response = await axios.get(api);
     setMydata(response.data);
     console.log(response.data);

    }
     
    useEffect(()=>{
    loadData();
    },[]);
    let sno = 0;
    const ans = mydata.map((key)=>{
        sno++;
        return(
            <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.contact}</td>
                <td>{key.shipadd}</td>
                <td>{key.zipcode}</td>
            </tr>
        )
    }) ;


  return (

    


    <>
      <h1 className='text-center'>Order List</h1>
       <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>City</th>
          <th>Contact No</th>
          <th>Shiping Add.</th>
          <th>Pincode</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
    </Table>

    </>
  )
}

export default Orders