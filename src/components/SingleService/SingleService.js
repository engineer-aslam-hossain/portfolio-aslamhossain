import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SingleService.css';
const SingleService = ({ service }) => {
  const { icon, name, details } = service;
  return (
    <div
      className='col-md-4 singleService'
      data-aos='fade-up'
      data-aos-duration='700'
      data-aos-delay='300'>
      <FontAwesomeIcon icon={icon} />
      <h4>{name} </h4>
      <p>{details} </p>
    </div>
  );
};

export default SingleService;
