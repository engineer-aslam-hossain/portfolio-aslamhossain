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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              error ad minima ex eos a consequuntur dignissimos autem quos
              aliquam?
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
