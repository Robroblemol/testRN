import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import {Card,CardItem} from 'native-base'


const ContactCard= ({ name, lastName, age, phone }) => (
  <View>
      {
          <View>
            <Card>
              <CardItem>
                <Text>{name}</Text>
                <Text>{lastName}</Text>
                <Text>{age}</Text>
                <Text>{phone}</Text>

              </CardItem>
            </Card>
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
