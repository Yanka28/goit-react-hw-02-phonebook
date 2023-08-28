import { Layout } from './Layout/Layout';
import { FilterName } from './FilterName/FilterName';
import { ContactForm } from './ContactForm/ContactForm';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { ContactsList } from './ContactsList/ContactsList';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  name = '';
  number = '';

  handleChangeName = e => {
    this.name = e.target.value;
  };

  handleChangeNumber = e => {
    this.number = e.target.value;
  };

  handleSubmit = e => {
    const isExist = this.state.contacts.find(
      contact => contact.name === this.name
    );
    if (isExist) {
      alert(`${this.name} is already in contacts.`);
      return;
    }
    e.preventDefault();
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: this.name, number: this.number },
      ],
      filter: '',
    }));
  };

  // reset = e => {
  //   e.preventDefault();
  //   e.target.reset();
  // };

  onDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const filtername = contacts.find(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtername;
  };

  handleChangeFilter = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts,
      filter: e.target.value,
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    let filtername = this.filterContacts(filter);

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm
          filter={filter}
          handleChangeName={this.handleChangeName}
          handleChangeNumber={this.handleChangeNumber}
          handleSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <FilterContacts
          filter={filter}
          handleChangeFilter={this.handleChangeFilter}
          filterContacts={this.filterContacts}
        />
        {!filter && (
          <ContactsList contacts={contacts} onDelete={this.onDelete} />
        )}
        {filter && <FilterName filtername={filtername} filter={filter} />}
        <GlobalStyle />
      </Layout>
    );
  }
}
