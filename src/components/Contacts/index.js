import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import ContactList from './ContactList';
import ContactForm from './ContactForm';

class Contacts extends Component {
  state = {
    contacts: []
  };

  createContact = contact => {
    const contacts = [...this.state.contacts, {...contact, id: this.state.contacts.length + 1}];
    this.setState({ contacts });
  }

  render() {
    return (
      <View>
        <ContactForm createContact={this.createContact} />
        <ScrollView>
          <ContactList contacts={this.state.contacts} />
        </ScrollView>
      </View>

    )
  }

}

export default Contacts;
