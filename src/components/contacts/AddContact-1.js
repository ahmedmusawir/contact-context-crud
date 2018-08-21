import React, { Component } from 'react';

export class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="add-contact-from-container">
        <div className="card mb-3">
          <div className="card-header text-danger">
            <strong>Add Contact</strong>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  className="form-control form-control-lg mb-2"
                  value={name}
                  placeholder="Insert Name"
                  required
                  onChange={this.onChange}
                />

                <div className="row">
                  <div className="col-md-6">
                    <input
                      name="email"
                      type="email"
                      className="form-control form-control-lg mb-2"
                      value={email}
                      placeholder="Insert email"
                      required
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="phone"
                      type="tel"
                      className="form-control form-control-lg mb-2"
                      value={phone}
                      placeholder="Insert Phone Number"
                      required
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                <div className="col-md-8 mx-auto">
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
  }
}

export default AddContact;
