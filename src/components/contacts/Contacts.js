import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

export class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div className="home-page pt-5">
              <h1 className="text-center mb-4">Contact List</h1>
              <div className="row">
                {contacts.map(contact => (
                  <Contact
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    email={contact.email}
                    phone={contact.phone}
                  />
                ))}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
