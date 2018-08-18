import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

export class Contacts extends Component {
  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div className="row">
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
