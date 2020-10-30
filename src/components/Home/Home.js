import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Header from '../Header/Header';
import HeaderMain from '../HeaderMain/HeaderMain';
import Project from '../Project/Project';
import Service from '../Service/Service';

const Home = () => {
  return (
    <div>
      <Header />
      <HeaderMain />
      <About />
      <Project />
      <Service />
      <Experience />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
