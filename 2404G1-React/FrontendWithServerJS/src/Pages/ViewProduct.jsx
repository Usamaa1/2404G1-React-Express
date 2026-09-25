import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
export const ViewProduct = () => {



    const nav = useNavigate();


    const [isProduct, setProduct] = useState([]);


    const viewProduct = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/api/viewProduct");
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



    const deleteProduct = async (id) => {
        try {
            const response = await axios.delete(
                `http://localhost:3000/api/deleteProduct/${id}`
            );
            console.log(response.data);
            viewProduct();
        } catch (error) {
            console.error(error);
        } finally {
            console.log("Request completed");
        }
    };



    return (
        <div>
            <h1 className='text-center'>All Products</h1>
            <div className="container">
                {isProduct.map(({ _id, prodName, prodPrice, prodDesc }) => (
                    <Card style={{ width: '18rem' }} key={_id}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>{prodName}</Card.Title>
                            <Card.Text>
                                {prodPrice}
                            </Card.Text>
                            <Card.Text>
                                {prodDesc}
                            </Card.Text>
                            <Button variant="danger" onClick={()=>deleteProduct(_id)}>Delete</Button>
                            <Button variant="warning" onClick={()=>nav(`UpdateProduct/${_id}`)}>Update</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    )
}
