import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { branding } = props;

  return (
    <nav
      id="header"
      className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <ul className="navbar-nav ml-auto flex-row">
          <li className="nav-item">
            <a href="/" className="nav-link active">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Add
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'Demo Context App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};
export default Header;
