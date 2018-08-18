import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onShowClick = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };
  onDeteClick = () => {
    // console.log(this.state);
    this.props.deleteClickHandler();
  };

  render() {
    const { name, email, phone } = this.props;
    const { showContactInfo } = this.state;

    return (
      <div className="col-sm-6 col-md-6 col-lg-6">
        <div className="card card-body mb-3">
          <h4>
            <i
              className="fa fa-arrow-circle-down"
              aria-hidden="true"
              onClick={this.onShowClick}
              style={{ cursor: 'pointer' }}
            />{' '}
            {name}
            <i
              className="fa fa-times float-right"
              aria-hidden="true"
              onClick={this.onDeteClick}
              style={{ cursor: 'pointer' }}
            />
          </h4>
          <ul
            className={
              showContactInfo ? 'list-group animated bounceIn' : 'd-none'
            }
          >
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
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};
export default Contact;
