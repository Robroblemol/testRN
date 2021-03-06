import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';

class ContactForm extends Component {

  static propTypes = {
    createContact: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    lastName: '',
    age: '',
    phone: '',
  };

  handleOnChange = (value, key) => this.setState({ [key]: value });

  render() {
    console.log(this.state);
    return (
      <View>
        <View>
          <TextInput
            placeholder="Name"
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
          />
        </View>
        <View>
          <TextInput
            placeholder="Last Name"
            value={this.state.lastName}
            onChangeText={lastName => this.handleOnChange(lastName, 'lastName')}
          />
        </View>
        <View>
          <TextInput
            placeholder="Age"
            value={this.state.age}
            onChangeText={age => this.handleOnChange(age, 'age')}
          />
        </View>
        <View>
          <TextInput
            placeholder="Phone"
            value={this.state.phone}
            onChangeText={phone => this.handleOnChange(phone, 'phone')}
          />
        </View>
        <Button
          title="Save"
          onPress={() => this.props.createContact(this.state)}
        />
      </View>
    );
  }
}

export default ContactForm;
