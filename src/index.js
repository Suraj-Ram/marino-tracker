import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <App /> */}

    <BrowserRouter>
    <Routes>
      <Route path="/marino" element={<>Marino stub <Outlet/> </>}>
        <Route path="today" element={"marino today view"} />
        <Route path="historical" element={"marino hist view"} />
      </Route>
      <Route path="/squash" element={<>Squash stub <Outlet/> </>}>
        <Route path="today" element={"squash today view"} />
        <Route path="historical" element={"squash hist view"} />
      </Route>

    </Routes>
    
    </BrowserRouter>




  </React.StrictMode>
);
