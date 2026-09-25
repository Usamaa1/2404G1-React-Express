import React from 'react'
import { useNavigate } from 'react-router'

export const MyUseNavigate = () => {
    
    const navLink = useNavigate();


  return (
    <div>
        <button onClick={()=>navLink('user')}>Go to user</button>
    </div>
  )
}
