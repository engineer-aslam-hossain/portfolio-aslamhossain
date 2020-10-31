import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  if (scrolled) {
    document.querySelector('header').classList.add('scrolled');
  }

  return (
    <header
      className='header container  m-0'
      id='test'
      data-aos='fade-down'
      data-aos-delay='300'
      data-aos-duration='600'>
      <div className='container'>
        <Navbar expand='lg'>
          <Navbar.Brand>
            <Link to='/'>
              <h3>A</h3>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav '>
            <Nav className='ml-auto justify-content-center align-items-center'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#about'>About</Nav.Link>
              <Nav.Link href='#project'>Project</Nav.Link>
              <Nav.Link href='#blog'>Blog</Nav.Link>
              <Nav.Link href='#contact'>Contact</Nav.Link>
              <a
                href='https://drive.google.com/uc?export=download&id=17sRDN4hhP0RKmVPJNkCYHaS8kGhlMYoA'
                target='blank'
                className='resume'>
                resume
              </a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
