import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
  state = {
    showContactInfo: true
  };
  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
    // console.log(this.state);
  };

  render() {
    const { name, email, phone } = this.props;
    const { showContactInfo } = this.state;

    return (
      <div className="col-sm-6 col-md-6 col-lg-6">
        <div className="card card-body mb-3">
          <h4>
            {name}
            <i
              className="fa fa-arrow-circle-down float-right"
              aria-hidden="true"
              onClick={this.onShowClick}
            />
          </h4>
          {showContactInfo ? (
            <ul className="list-group">
              <li className="list-group-item">
                <strong className="text-danger">
                  <i className="fa fa-phone-square" aria-hidden="true" /> Phone:
                </strong>{' '}
                {email}
              </li>
              <li className="list-group-item">
                <strong className="text-danger">
                  <i className="fa fa-envelope" aria-hidden="true" /> Email:
                </strong>{' '}
                {phone}
              </li>
            </ul>
          ) : null}
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
