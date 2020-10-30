import React from 'react';
import fakeProjectData from '../../fakeData/fakeProjectData';
import SingleProject from '../SingleProject/SingleProject';
import './Project.css';
const Project = () => {
  return (
    <section className='project'>
      <div className='container'>
        <div className='projectHeading d-flex flex-column align-items-center'>
          <h2>My latest featured project</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
            placeat.
          </p>
        </div>
        <div className='row'>
          {fakeProjectData.map(project => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
        <div className='allProject d-flex justify-content-center mt-5'>
          <button className='allArticle'>All My Project</button>
        </div>
      </div>
    </section>
  );
};

export default Project;
