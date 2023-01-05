import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter, Route,
  Routes
} from "react-router-dom";
import "./index.css";
import NewSimpleLayout from "./pages/NewSimpleLayout";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NewSimpleLayout></NewSimpleLayout>} />
    </Routes>
    
    </BrowserRouter>

  </React.StrictMode>
);
