import React from 'react';
import { CardDeck } from 'react-bootstrap';
import fakeBlogs from '../../fakeData/fakeBlogs';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css';
const Blog = () => {
  return (
    <section className='blog' id='blog'>
      <div className='container'>
        <div className='blogHead d-flex flex-column align-items-center mb-5'>
          <h3>Some Of my Article</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
            excepturi?
          </p>
        </div>
        <CardDeck>
          {fakeBlogs.map(blog => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </CardDeck>
        <div className='d-flex justify-content-center mt-5'>
          <button className='allArticle'>All My Article</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
