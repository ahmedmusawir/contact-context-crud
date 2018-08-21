import React, { Component } from 'react';

export class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  static defaultProps = {
    name: 'Bibo Moose',
    email: 'keyabibo@gmail.com',
    phone: '770.218.1998'
  };

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  render() {
    const { name, email, phone } = this.props;
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
                  defaultValue={name}
                  placeholder="Insert Name"
                  required
                  ref={this.nameInput}
                />

                <div className="row">
                  <div className="col-md-6">
                    <input
                      name="email"
                      type="email"
                      className="form-control form-control-lg mb-2"
                      defaultValue={email}
                      placeholder="Insert email"
                      required
                      ref={this.emailInput}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      name="phone"
                      type="tel"
                      className="form-control form-control-lg mb-2"
                      defaultValue={phone}
                      placeholder="Insert Phone Number"
                      required
                      ref={this.phoneInput}
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
