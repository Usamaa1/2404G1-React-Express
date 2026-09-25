import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import MyUseEffect from "./MyHooksComponent/MyUseEffect";
import SecondComponent from "./SecondComponent";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SecondComponent />} />
      <Route path="/MyUseEffect" element={<MyUseEffect />} />
    </Routes>
  </BrowserRouter>
);