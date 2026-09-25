import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export const MyUseNav = () => {

    const navLink = useNavigate();



  return (
    <div>
        <h1 className='text-center'>MyUseNav</h1>
        <Button onClick={()=> navLink('www.google.com')}>Go to Google</Button>
    </div>
  )
}
