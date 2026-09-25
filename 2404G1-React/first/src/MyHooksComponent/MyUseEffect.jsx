import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';

 const MyUseEffect = () => {


    const [isNum, setNum] = useState(1)


    const increment = () => {

        setNum(isNum + 2);
        console.log(isNum);

    }
    const decrement = () => {

        setNum(isNum - 2);
        console.log(isNum);

    }



    const getPosts = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts/1"
            );

            console.log(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    })


    return (
        <>
            <div>
                <h1 className='text-center'>MyUseEffect</h1>
                <div className="container">
                    <Button onClick={increment}>Increment</Button>
                    <Button onClick={decrement}>Decrement</Button>
                </div>
            </div>
            <h1>Home Page</h1>
            <Link to="/MyUseEffect">Go to Use Effect Page</Link>
        </>
    )
}
export default MyUseEffect