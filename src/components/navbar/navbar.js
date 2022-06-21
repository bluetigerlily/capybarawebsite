import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './navbar.scss';

const Navbar = () => {

    return (

        <div className='navbarcontainer'>
            <div className='linkcontainer'>
                <Link to="/">Home</Link>
                <Link to="/community">Community</Link>
            </div>
            <Outlet />
  
      </div>
    );
}
export default Navbar;