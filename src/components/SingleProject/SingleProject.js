import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SingleProject.css';
import ParticleCanvas from '../ParticleCanvas/ParticleCanvas';
const SingleProject = ({ project }) => {
  const { id, name, img, git, live, url, details, client } = project;

  const windowWidth = window.innerWidth;

  return (
    <div
      className={`row my-5 singleProject ${id % 2 === 0 && 'flex-row-reverse'}`}
      data-aos={
        windowWidth > 1000
          ? `${id % 2 === 0 ? 'fade-left' : 'fade-right'}`
          : 'fade-up'
      }
      data-aos-duration='700'
      data-aos-delay='300'>
      <ParticleCanvas />
      <div className='col-md-7 work-pic'>
        <a href={url} target='blank'>
          <img className='img-fluid' src={img} alt='' />
        </a>
      </div>
      <div className='col-md-5 work-details'>
        <h3>{name} </h3>
        <p>{details}</p>
        <div className='technology d-flex flex-wrap'>
          {project.tools.map((tool, index) => (
            <span className='tools' key={index}>
              {tool.name}
            </span>
          ))}
        </div>
        <div className='link'>
          <a href={url} target='blank'>
            <FontAwesomeIcon icon={live} />
          </a>
          <a href={client} target='blank'>
            <FontAwesomeIcon icon={git} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
