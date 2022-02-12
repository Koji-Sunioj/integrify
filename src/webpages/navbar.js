import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";

const Navbar = () => {
  
return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                < Link to={'/'} className="nav-link"> <span>Home</span> </Link>  
            </div>
         </nav>
    );
}
export default Navbar;