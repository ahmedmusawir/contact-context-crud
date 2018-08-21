import React, { Component } from 'react';
import { Consumer } from '../../context';
import InputGroup from '../layout/InputGroup';
import uuid from 'uuid';

export class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    //Check For Errors
    if (name === '') {
      this.setState({
        errors: {
          name: 'Name Is Required'
        }
      });
      return;
    }

    if (email === '') {
      this.setState({
        errors: {
          email: 'Email Is Required'
        }
      });
      return;
    }

    if (phone === '') {
      this.setState({
        errors: {
          phone: 'Phone Is Required'
        }
      });
      return;
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    //Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="add-contact-from-container">
              <div className="card mb-3">
                <div className="card-header text-danger">
                  <strong>Add Contact</strong>
                </div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <div className="">
                      <InputGroup
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.onChange}
                        error={errors.name}
                      />

                      <div className="row">
                        <div className="col-md-6">
                          <InputGroup
                            name="email"
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={this.onChange}
                            error={errors.email}
                          />
                        </div>
                        <div className="col-md-6">
                          <InputGroup
                            name="phone"
                            type="phone"
                            placeholder="Enter Phone"
                            value={phone}
                            onChange={this.onChange}
                            error={errors.phone}
                          />
                        </div>
                      </div>
                      <div className="mx-auto">
                        <input
                          type="submit"
                          className="form-control form-control-lg btn btn-light mt-2"
                          value="Add Contact"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;