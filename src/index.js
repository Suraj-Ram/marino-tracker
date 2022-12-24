import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
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
