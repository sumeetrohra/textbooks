/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-bitwise */
import React from 'react';
import {Content, ListItem, Text, H3, Separator} from 'native-base';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

import data from '../data/data.json';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default ({setUri}) => {
  return (
    <Content>
      {Object.keys(data.medium).map((mediumOfStudy) => {
        return (
          <Collapse>
            <CollapseHeader>
              <Separator bordered>
                <H3>{`Medium: ${mediumOfStudy}`.toUpperCase()}</H3>
              </Separator>
            </CollapseHeader>
            <CollapseBody>
              {Object.keys(data.medium[mediumOfStudy].class).map((standard) => {
                return (
                  <Collapse>
                    <CollapseHeader>
                      <Separator bordered>
                        <Text
                          style={{
                            fontSize: 16,
                          }}>{`Standard: ${standard}`}</Text>
                      </Separator>
                    </CollapseHeader>
                    <CollapseBody>
                      {data.medium[mediumOfStudy].class[standard].map(
                        ({bookName, bookUrl}) => (
                          <ListItem
                            key={uuidv4()}
                            onPress={() => setUri(bookUrl)}>
                            <Text>{bookName}</Text>
                          </ListItem>
                        ),
                      )}
                    </CollapseBody>
                  </Collapse>
                );
              })}
            </CollapseBody>
          </Collapse>
        );
      })}
    </Content>
  );
};

// <ListItem itemDivider>
//           <Text>A</Text>
//         </ListItem>
//         <ListItem>
//           <Text>Aaron Bennet</Text>
//         </ListItem>
//         <ListItem>
//           <Text>Ali Connors</Text>
//         </ListItem>
//         <ListItem itemDivider>
//           <Text>B</Text>
//         </ListItem>
//         <ListItem>
//           <Text>Bradley Horowitz</Text>
//         </ListItem>
