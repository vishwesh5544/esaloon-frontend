import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import BookAppointment from "./pages/BookAppoinment";
import Dashboard from './pages/Dashboard';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/signup"} element={<Signup/>}></Route>
                <Route path={"/login"} element={<Login/>}></Route>
                <Route path={"/book-appointment"} element={<BookAppointment/>}></Route>
                <Route path={"/dashboard"} element={<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
