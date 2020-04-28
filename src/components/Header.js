/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Header, Body, Title, H3, Right, Button, Text} from 'native-base';
export default ({uri, setUri}) => {
  return (
    <Header>
      <Body>
        <Title>
          <H3 style={{color: 'white'}}>SSC Textbooks</H3>
        </Title>
      </Body>

      <Right>
        {uri ? (
          <Button hasText transparent onPress={() => setUri('')}>
            <Text>Back</Text>
          </Button>
        ) : null}
      </Right>
    </Header>
  );
};
