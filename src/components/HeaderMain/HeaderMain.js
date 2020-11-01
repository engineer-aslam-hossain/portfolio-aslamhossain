import React from 'react';
import {
  faLinkedin,
  faGithubSquare,
  faMedium,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhoneAlt,
  faEnvelope,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HeaderMain.css';
import logo from '../../images/aslam.png';
import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
import Typical from 'react-typical';

const HeaderMain = () => {
  const windowSize = window.innerWidth;
  return (
    <section className='header-main' id='home'>
      <ParticleCanvas />
      <div className='container headerMainContainer'>
        <div className='row headerMainRow'>
          <div
            className='col-md-8 myImg'
            data-aos={windowSize > 1000 ? 'zoom-in' : 'fade-up'}
            data-aos-duration='500'
            data-aos-delay='700'>
            <img src={logo} alt='' className='img-fluid' />
          </div>
          <div
            className='col-md-4 myInfo d-flex flex-column justify-content-center'
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-delay='700'>
            <h6>Hello Everybody, I am</h6>
            <h1>Aslam Hossain</h1>

            <h5>
              I'm a
              <Typical
                steps={[
                  ' Front end developer',
                  1000,
                  ' Full Stack Developer',
                  1000,
                  ' MERN Stack Developer',
                  1000,
                ]}
                loop={Infinity}
                wrapper='b'
              />
            </h5>
            <p>
              Currently I'm working with M E R N stack. 40+ Project Completed
              and have well knowledged in React, MongoDB, Express, Firebase.
            </p>
            <div className='personalInfo'>
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} />
                (+880)130-387-4241
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                aslamhossain.dev@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faHome} />
                Dhaka, Bangladesh
              </p>
            </div>
            <div className='socailIcon'>
              <a
                target='blank'
                href='https://www.linkedin.com/in/aslamhossain-dev/'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                target='blank'
                href='https://github.com/engineer-aslam-hossain'>
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
              <a target='blank' href='https://medium.com/@aslamhossain.dev'>
                <FontAwesomeIcon icon={faMedium} />
              </a>
              <a
                target='blank'
                href='https://web.facebook.com/AslamHossain.dev/'>
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderMain;
