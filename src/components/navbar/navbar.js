import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './navbar.scss';

const Navbar = () => {

    return (

        <div className='navbarcontainer'>
            <nav>
                <div className='homecontainer'>
                    <Link to="/">Home</Link>
                </div>

                <div className='communitycontainer'>
                    <Link to="/Community">Community</Link>
                </div>
        </nav>
  
        <Outlet />
      </div>
    );
}
export default Navbar;