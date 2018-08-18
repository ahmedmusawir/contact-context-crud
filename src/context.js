import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
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

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
