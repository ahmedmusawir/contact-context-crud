import React, { Component } from 'react';
import Contact from './Contact';

export class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe 1',
          email: 'jdoe1@email.com',
          phone: '111.111.1111'
        },
        {
          id: 2,
          name: 'John Doe 2',
          email: 'jdoe2@email.com',
          phone: '222.222.2222'
        },
        {
          id: 3,
          name: 'John Doe 3',
          email: 'jdoe3@email.com',
          phone: '333.333.3333'
        },
        {
          id: 4,
          name: 'John Doe 4',
          email: 'jdoe4@email.com',
          phone: '444.444.4444'
        }
      ]
    };
  }

  deleteContact = id => {
    // console.log('deleted: ' + id);
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    // console.log(newContacts);
    this.setState({
      contacts: newContacts
    });
  };
  render() {
    const { contacts } = this.state;

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
  }
}

export default Contacts;
