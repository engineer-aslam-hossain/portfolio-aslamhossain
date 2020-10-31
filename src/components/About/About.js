import React from 'react';
import {
  faDatabase,
  faBook,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProgressBar } from 'react-bootstrap';
const About = () => {
  return (
    <section className='about' id='about'>
      <div className='container'>
        <div className='row'>
          <div
            className='col-md-6 aboutMySelf'
            data-aos='fade-right'
            data-aos-duration='700'
            data-aos-delay='300'>
            <h3>About Myself</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              sed, amet beatae quod rerum sequi repellendus voluptatum veritatis
              ab laboriosam, eaque necessitatibus consequatur sapiente
              cupiditate?
            </p>
            <div className='d-flex justify-content-between'>
              <div className='totalInfo'>
                <FontAwesomeIcon icon={faDatabase} />
                <h4>$2.5M</h4>
                <span>Total Donation</span>
              </div>
              <div className='totalInfo'>
                <FontAwesomeIcon icon={faBook} />
                <h4>40</h4>
                <span>Total Project</span>
              </div>
              <div className='totalInfo'>
                <FontAwesomeIcon icon={faUserFriends} />
                <h4>12300</h4>
                <span>Total Users</span>
              </div>
            </div>
          </div>
          <div
            className='col-md-6 progressBar'
            data-aos='fade-right'
            data-aos-duration='700'
            data-aos-delay='300'>
            <p>Javascript 85%</p>
            <ProgressBar now={85} />
            <p>React 75%</p>
            <ProgressBar animated now={75} />
            <p>Node 65%</p>
            <ProgressBar animated now={65} />
            <p>Express 75%</p>
            <ProgressBar animated now={75} />
            <p>MongoDB 70%</p>
            <ProgressBar animated now={70} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
