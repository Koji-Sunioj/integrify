import React from 'react';
import {Link} from "react-router-dom";

//this is a simple component which renders as a navbar, pointing to the home page on all webpages

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