import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { MyUseNavigate } from './MyUseNavigate'



const router = createBrowserRouter([
  {
    path: "/",
    Component: MyUseNavigate  
  },
  {
    path: "/user",
    element:(
      <>
        <h1>Arif Alvi</h1>
      </>
    )  
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
