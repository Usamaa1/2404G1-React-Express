import React from 'react'
import { Link } from 'react-router'

export const MyNavbar = () => {
  return (
    <div> <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Brand</Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <Link to="addProduct" className="nav-item nav-link active">Add Product</Link>
    
                   
                </div>
                <div className="navbar-nav ms-auto">
                    <a href="#" className="nav-item nav-link">Login</a>
                </div>
            </div>
        </div>
    </nav></div>
  )
}
