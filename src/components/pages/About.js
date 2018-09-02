import React from 'react';

const About = () => {
  return (
    <div className="animated fadeIn pt-5">
      <h1 className="page-title text-center">
        About Contact Manager (Context)
      </h1>
      <p className="lead text-center">
        This is a REACT CRUD App which uses the following technologies:{' '}
      </p>
      <ul className="list-group">
        <li className="list-group-item">React Stateful Components</li>
        <li className="list-group-item">React Stateless Components</li>
        <li className="list-group-item">React Event Handlers</li>
        <li className="list-group-item">React Routing</li>
        <li className="list-group-item">React Context API</li>
        <li className="list-group-item">JSON Server at the backend</li>
        <li className="list-group-item">SCSS/CSS</li>
        <li className="list-group-item">Bootstrap 4 SCSS</li>
        <li className="list-group-item">Animate.css</li>
        <li className="list-group-item">Yarn Build Process</li>
        <li className="list-group-item">Docker Container</li>
        <li className="list-group-item">NginX WebServer</li>
      </ul>
    </div>
  );
};

export default About;
