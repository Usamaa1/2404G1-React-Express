import React from 'react'
import img2 from './assets/images/img2.jpg'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import MyNavbar from './Navbar';


const FirstComponent = ({username, lastname}) => {
 return (
    <div>
      <MyNavbar></MyNavbar>
       <h1>Hello</h1>
       <p>{username} {lastname}</p>
       
       <img src={img2}></img>
       <button className='btn btn-primary'>Click</button>
       <Button variant='danger'>Second Button</Button>

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
 )
}




// const FirstComponent = (props) => {
//  return (
//     <div>
//        <h1>Hello</h1>
//        <p>{props.username} {props.lastname}</p>
       
//        <img src={img2}></img>
//     </div>
//  )
// }

export default FirstComponent