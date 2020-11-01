import React from 'react';
import './About.css';
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
              Pulling hair when code doesn't work is a common things to do...
              I'm a technology explorer and learner. I love to learn new
              technology and explore them . Becoming a Full-Stack software
              engineer is my goal. I'm a simply simple person with lots of
              interests.
            </p>
            <div className='d-flex aboutBtn'>
              <div className='totalInfo pt-3 mr-3'>
                <a
                  href='https://drive.google.com/uc?export=download&id=17sRDN4hhP0RKmVPJNkCYHaS8kGhlMYoA'
                  target='blank'
                  className='allArticle'>
                  resume
                </a>
              </div>
              <div className='totalInfo'>
                <button className='allArticle'>Hire me</button>
              </div>

              {/* <div className='totalInfo'>
                <FontAwesomeIcon icon={faBook} />
                <h4>40</h4>
                <span>Total Project</span>
              </div>
              <div className='totalInfo'>
                <FontAwesomeIcon icon={faUserFriends} />
                <h4>12300</h4>
                <span>Total Users</span>
              </div> */}
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
