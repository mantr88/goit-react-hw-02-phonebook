import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';


export class App extends Component  {
  state = {
    contacts: [],
    name: '',
    number: ''
  };

  addContact = newContact => {
    this.setState(pervState => ({
      contacts: [...pervState.contacts, newContact]
    }));
  };

  render() {
    return(
    <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
        <GlobalStyle />
    </div>
  );
  };
  
};