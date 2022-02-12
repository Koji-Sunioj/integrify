import React from 'react';
import {
  BrowserRouter,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home';
import User from './user';
import Navbar from './navbar';

const Webpages = () => {
    return(
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path = "/user/:id" element={<User/>}  />
            </Routes>
        </BrowserRouter>
    );
};


export default Webpages;