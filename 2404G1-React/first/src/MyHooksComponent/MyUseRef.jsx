import React, { useRef } from 'react'

export const MyUseRef = () => {

    const emailRef = useRef();
    const passwordRef = useRef();

    const signInForm = (e)=>{
        e.preventDefault();
        console.log(emailRef.current.value,passwordRef.current.value)
    }





    return (
        <div>
            <h1 className='text-center'>MyUseRef</h1>
           <div className="container">
             <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" ref={emailRef} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" ref={passwordRef} />
                </div>
          
                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={signInForm}>Sign in</button>
                </div>
            </form>
           </div>
        </div>
    )
}
