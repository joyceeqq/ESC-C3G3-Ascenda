import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/redeem' activeStyle>
            Redeem
          </NavLink>
          <NavLink to='/history' activeStyle>
            History
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
