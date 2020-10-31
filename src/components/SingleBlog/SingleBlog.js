import React from 'react';
import { Card } from 'react-bootstrap';
import './SingleBlog.css';
const SingleBlog = ({ blog }) => {
  const { img, title, details } = blog;
  return (
    <Card
      className='p-4'
      data-aos='fade-up'
      data-aos-duration='700'
      data-aos-delay='600'>
      <Card.Img variant='top' src={img} />
      <Card.Body className='p-0 mt-4'>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBlog;
