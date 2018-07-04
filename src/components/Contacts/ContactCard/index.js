import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import {
  Card,
  CardItem,
  Text,
  Button,
   } from 'native-base';

class ContactCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    lastName:PropTypes.string.isRequired,
    age:PropTypes.string.isRequired,
    phone:PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
  }
  state = {
    name: '',
    lastName: '',
    age: '',
    phone: '',
  }
  deleteContact = () => {

  }
  render(){
    return(
      <View>

        <CardItem>
          <Card>
            <CardItem header>
              <Text>{name}</Text>
            </CardItem>
            <Text>{lastName}</Text>
            <Text>{age}</Text>
            <Text>{phone}</Text>
            <Button bordered>
              <Text>borrar</Text>
            </Button>
          </Card>
        </CardItem>

      </View>

    )
  }
}

export default ContactCard;
