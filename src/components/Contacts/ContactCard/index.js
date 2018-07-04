import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardItem, Conteriner, Text, Header, Body  } from 'native-base';


const ContactCard= ({ name, lastName, age, phone }) => (
<View>

  <CardItem>
    <Card>
    <CardItem header>
      <Text>{name}</Text>
    </CardItem>
        <Text>{lastName}</Text>
        <Text>{age}</Text>
        <Text>{phone}</Text>
    </Card>
  </CardItem>

</View>


);

 ContactCard.propTypes = {
   name: PropTypes.string.isRequired,
   lastName:PropTypes.string.isRequired,
   age:PropTypes.string.isRequired,
   phone:PropTypes.string.isRequired,
 };

export default ContactCard;
