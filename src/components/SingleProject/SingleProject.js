import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleProject.css';
const SingleProject = ({ project }) => {
  const { id, name, img, git, live, url, details, client } = project;

  return (
    <div
      className={`row my-5 singleProject ${id % 2 === 0 && 'flex-row-reverse'}`}
      data-aos={`${id % 2 === 0 ? 'fade-left' : 'fade-right'}`}
      data-aos-duration='700'
      data-aos-delay='300'>
      <div className='col-md-7 work-pic'>
        <a href={url}>
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