import axios from 'axios';
import React, { useRef } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export const AddProduct = () => {



  const prodName = useRef();
  const prodPrice = useRef();
  const prodDesc = useRef();



  const addProduct = async (e) => {
    e.preventDefault();
  try {
    const response = await axios.post(
      "http://localhost:3000/api/addProduct",
      {
       prodName:prodName.current.value,
       prodPrice:prodPrice.current.value,
       prodDesc:prodDesc.current.value
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Request completed");
  }
};






  return (
    <>
      <h1 className='text-center'>AddProduct</h1>
      <div className="container">
        <Form onSubmit={addProduct}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Product Name" ref={prodName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="text" placeholder="Enter Product Price" ref={prodPrice}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Product Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Product Description" ref={prodDesc} />
          </Form.Group>
          <Button type='submit' >Add Product</Button>
        </Form>
      </div>
    </>
  )
}
