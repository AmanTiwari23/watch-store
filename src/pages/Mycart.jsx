import React from "react";
import Table from "react-bootstrap/Table";
import { FaPlusSquare } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cartDataRemove, decQnty, incQnty } from "../cartSlice";

const Mycart = () => {
  const cartdata = useSelector((store) => store.mycart.cart);
  const dispatch = useDispatch();

  let TotalAmount = 0;
  const ans = cartdata.map((key) => {
    TotalAmount += key.price * key.qnty;
    return (
      <>
        <tr>
          <td>
            <img src={key.image} alt="" />
          </td>
          <td>{key.name}</td>
          <td>{key.brand}</td>
          <td>{key.category}</td>
          <td>{key.price}</td>
          <td>
            <FaSquareMinus
              onClick={() => {
                dispatch(decQnty({ id: key.id }));
              }}
            />
            {key.qnty}
            <FaPlusSquare
              onClick={() => {
                dispatch(incQnty({ id: key.id }));
              }}
            />
          </td>
          <td>{key.price * key.qnty}</td>
          <td>
            <button
              onClick={() => {
                dispatch(cartDataRemove({ id: key.id }));
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <h1 className="text-center"> Cart Data</h1>
      <h3 className="flex items-center justify-center gap-1 font-semibold">
        Total Amount :
        <FaRupeeSign className="inline-block" />
        {TotalAmount}
      </h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
    </>
  );
};

export default Mycart;
