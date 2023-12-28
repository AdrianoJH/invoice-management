import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, MobileMenu, ContentMenu } from './HeaderStyle';
import { FaFileInvoiceDollar, FaBars, } from "react-icons/fa";
import { FaXmark } from 'react-icons/fa6';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  return (
    <Container>
      <div id='button'>
        <button id='btn-menu-mobile' onClick={toggleMenu}>{isMenuVisible ? <FaXmark id='close' /> : <FaBars id='open' />}</button>
      </div>
      <MobileMenu className={isMenuVisible ? 'visible' : 'hidden'}>
        <ul>
          <li onClick={() => toggleMenu(isMenuVisible)}><Link to='/'>Home</Link></li>
          <li onClick={() => toggleMenu(isMenuVisible)}><Link to='/dashboard'>Dashboard</Link></li>
          <li onClick={() => toggleMenu(isMenuVisible)}><Link to='/invoice-library'>Faturas</Link></li>
          <FaFileInvoiceDollar />
        </ul>
      </MobileMenu>
      <ContentMenu>
        <FaFileInvoiceDollar />
        <ul>
          <li> <Link to='/'>Home</Link></li>
          <li> <Link to='/dashboard'>Dashboard</Link></li>
          <li> <Link to='/invoice-library'>Faturas</Link></li>
        </ul>
      </ContentMenu>
    </Container>
  )
}

export default Header