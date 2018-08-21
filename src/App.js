import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import Header from './components/layout/Header';
import NotFound404 from './components/NotFound404';
import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="contact-context-app">
          <Header branding="Contacts" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
