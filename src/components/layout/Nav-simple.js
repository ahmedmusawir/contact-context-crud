import React from 'react';

const Nav = () => {
  return (
    <div className="navbar navbar-dark bg-primary">
      <nav className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Active
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Longer nav link
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
      </nav>
    </div>
  );
};

export default Nav;
