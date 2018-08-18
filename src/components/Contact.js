import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
  render() {
    let { name, email, phone } = this.props;
    console.log(name);
    return (
      <div className="col-sm-6 col-md-6 col-lg-6">
        <div className="card card-body mb-3">
          <h4>{name}</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <strong className="text-danger">
                <i class="fa fa-phone-square" aria-hidden="true" /> Phone:
              </strong>{' '}
              {email}
            </li>
            <li className="list-group-item">
              <strong className="text-danger">
                <i class="fa fa-envelope" aria-hidden="true" /> Email:
              </strong>{' '}
              {phone}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};
export default Contact;
