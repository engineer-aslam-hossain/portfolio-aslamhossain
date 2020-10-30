import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <header
      className='header container px-0'
      data-aos='fade-down'
      data-aos-delay='300'
      data-aos-duration='600'>
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
            <Nav.Link href='#service'>Service</Nav.Link>
            <Nav.Link href='#project'>Project</Nav.Link>
            <Nav.Link href='#portfolio'>Portfolio</Nav.Link>
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
    </header>
  );
};

export default Header;
