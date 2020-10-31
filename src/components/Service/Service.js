import React from 'react';
import fakeService from '../../fakeData/fakeService';
import SingleService from '../SingleService/SingleService';
import './Service.css';
const Service = () => {
  return (
    <section className='service'>
      <div className='container'>
        <div className='row align-items center justify-content-center'>
          <div className='serviceHeader d-flex align-items-center justify-content-center flex-column'>
            <h2>offering to my clients</h2>
            <p>
              I can make just front end or full stack Website for you as per
              instruction
            </p>
          </div>
          <div className='row'>
            {fakeService.map(service => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
