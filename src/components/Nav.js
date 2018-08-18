import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <h4 className="pt-2">
          <i className="fa fa-film" aria-hidden="true" />
          Golden Cinema
        </h4>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav my-0 mx-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/movies" className="nav-link" href="#">
              Movies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className="nav-link" href="#">
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/comments" className="nav-link" href="#">
              Comments
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
