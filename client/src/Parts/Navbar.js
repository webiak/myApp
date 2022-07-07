import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

import Logo from '../images/znak.png';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={Logo} alt='logo' height={40} width={40} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Domov
          </NavLink>
          <NavLink to='/galery' activeStyle>
            Galeria
          </NavLink>
          <NavLink to='/rules' activeStyle>
            Pravidla
          </NavLink>
          <NavLink to='/registration' activeStyle>
            Registracia
          </NavLink>
          <NavLink to='/login' activeStyle>
            Prihlasenie
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

/*<img src={require('../../images/logo.svg')} alt='logo' />*/