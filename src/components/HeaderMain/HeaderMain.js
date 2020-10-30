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
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
const HeaderMain = () => {
  return (
    <section className='header-main'>
      <div className='container headerMainContainer'>
        <div className='row'>
          <div
            className='col-md-8 myImg'
            data-aos='zoom-in-up'
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
            <h5>Front end web developer</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              harum, fugiat nesciunt accusantium facilis adipisci!
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
