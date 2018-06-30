import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardItem, Conteriner, Text } from 'native-base';


const ContactCard= ({ name, lastName, age, phone }) => (
  <Container>
      {
          <Container>
            <Card
              <CardItem
                <Text>{name}</Text>
              //  <Text>{lastName}</Text>
              //  <Text>{age}</Text>
              //  <Text>{phone}</Text>
              />
            />
          </Container>
      }
  </Container>
);

 ContactCard.propTypes = {
   name: PropTypes.String.isRequired,
   lastName:PropTypes.String.isRequired,
   age:PropTypes.String.isRequired,
   phone:PropTypes.String.isRequired,
 };

export default ContactCard;
