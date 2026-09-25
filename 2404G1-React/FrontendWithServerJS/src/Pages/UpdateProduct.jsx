import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';

export const UpdateProduct = () => {



  const [isProduct,setProduct]= useState('');
  
    const nav = useNavigate();

  const prodName = useRef();
  const prodPrice = useRef();
  const prodDesc = useRef();


  const {id} = useParams();

  console.log(id)


  const updateProduct = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.put(
        `http://localhost:3000/api/updateProduct/${id}`,
        {
          prodName: prodName.current.value,
          prodPrice: prodPrice.current.value,
          prodDesc: prodDesc.current.value
        }
      );
      console.log(response.data);
      nav('/')
      
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Request completed");
    }
  };


    const viewProduct = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/api/singleProduct/${id}`);
            console.log(response.data);
            setProduct(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            console.log("Request completed");
        }
    };

    useEffect(() => {
        viewProduct();
    }, [])



  return (
    <>
      <h1 className='text-center'>Update Product</h1>
      <div className="container">
        <Form onSubmit={updateProduct}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" defaultValue={isProduct.prodName} ref={prodName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="text" defaultValue={isProduct.prodPrice} ref={prodPrice} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Product Description</Form.Label>
            <Form.Control type="text" defaultValue={isProduct.prodDesc} ref={prodDesc} />
          </Form.Group>
          <Button type='submit' >Update Product</Button>
        </Form>
      </div>
    </>
  )
}
