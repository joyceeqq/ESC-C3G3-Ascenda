import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
       
        <NavMenu>
        <NavLink to='/' activeStyle>
            Home
            </NavLink>
          <NavLink to='/redeem' activeStyle>
            Redeem Rewards
          </NavLink>
          <NavLink to='/history' activeStyle>
            Rewards History
          </NavLink>
          
          

        </NavMenu>
        
      </Nav>
    </>
  );
};
  
export default Navbar;