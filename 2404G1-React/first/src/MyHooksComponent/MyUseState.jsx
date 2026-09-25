import React, { useState } from 'react'

export const MyUseState = () => {


    // let num = 23;

    const [isNum, setNum] = useState(1)


   const increment = ()=> {
    
        setNum(isNum + 2);
        console.log(isNum``);

    }



  return (
    <div>
        <p>{isNum}</p>
        <button onClick={increment} className='btn btn-primary'>Increment</button>
    </div>
  )
}
