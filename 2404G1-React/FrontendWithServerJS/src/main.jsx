import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import App from './App.jsx'
import { ViewProduct } from './Pages/ViewProduct.jsx';
import { AddProduct } from './Pages/AddProduct.jsx';
import { UpdateProduct } from './Pages/UpdateProduct.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index:true,
        Component: ViewProduct
      },
      {
       path: "addProduct",
        Component: AddProduct
      },
      {
        path: 'updateProduct/:id',
        Component: UpdateProduct
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />

  </StrictMode>
)
