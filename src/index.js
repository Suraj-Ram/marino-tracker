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
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Dashboard from "./dashboard_template/Dashboard";
import MarinoToday from "./pages/MarinoToday";
import NewSimpleLayout from "./pages/NewSimpleLayout";


const root = ReactDOM.createRoot(document.getElementById("root"));
const mdTheme = createTheme();

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ThemeProvider theme={mdTheme}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NewSimpleLayout></NewSimpleLayout>} />
      <Route path="/marino" element={<Dashboard mainContent={<Outlet/>} />}>
        <Route path="today" element={<MarinoToday/>} />
        <Route path="historical" element={"marino hist view"} />
      </Route>
      <Route path="/squash" element={<>Squash stub <Outlet/> </>}>
        <Route path="today" element={"squash today view"} />
        <Route path="historical" element={"squash hist view"} />
      </Route>

    </Routes>
    
    </BrowserRouter>
    </ThemeProvider>




  </React.StrictMode>
);
