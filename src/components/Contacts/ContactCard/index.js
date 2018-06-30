import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';


const ContactCard= ({name, lastName, age, phone}) => (
  <View>
      {
          <View>
            <Text>{name}</Text>
            <Text>{lastName}</Text>
            <Text>{age}</Text>
            <Text>{phone}</Text>
          </View>
      }
  </View>
);

 ContactCard.propTypes = {
   name: PropTypes.String.isRequired,
   lastName:PropTypes.String.isRequired,
   age:PropTypes.String.isRequired,
   phone:PropTypes.String.isRequired,
 };

export default ContactCard;
