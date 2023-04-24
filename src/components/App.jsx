import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export class App extends Component  {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
    filter: '',
  };

  addContact = newContact => {
    this.setState(pervState => ({
      contacts: [...pervState.contacts, newContact]
    }));
  };

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  };

  render() {
    const { filter, contacts } = this.state;

    let normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));


    return(
    <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        <ContactList contacts={visibleContacts} />
        <GlobalStyle />
    </div>
  );
  };
  
};