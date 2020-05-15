import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Fragment>
      <h1>About Page</h1>
      <p>This is a text of my about page</p>
      <Link to='/'>Back to home</Link>
    </Fragment>
  );
};

export default About;
