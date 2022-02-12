import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './home';
import User from './user';
import Navbar from './navbar';

/*
this is the routing mapped in the website
the navbar is always placed on top of the indivudal webpage
user info url determined by id as parameter
*/ 


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