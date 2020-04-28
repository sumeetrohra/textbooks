import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Text, Button} from 'native-base';
import Pdf from 'react-native-pdf';

const PdfView = ({uri}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [newPageNumber, setNewPageNumber] = useState();

  return (
    <>
      <Pdf
        source={{
          uri,
          cache: true,
        }}
        page={pageNumber}
        style={styles.pdf}
      />
      <View style={styles.inputContainerStyle}>
        <Text style={styles.searchTextStyle}>Jump to page:</Text>
        <TextInput
          style={styles.textInputStyle}
          value={newPageNumber}
          onChangeText={(text) => setNewPageNumber(parseInt(text, 10))}
        />
        <Button
          onPress={() => (newPageNumber ? setPageNumber(newPageNumber) : null)}>
          <Text>GO</Text>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  inputContainerStyle: {
    display: 'flex',
    backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchTextStyle: {color: 'white'},
  textInputStyle: {backgroundColor: 'white', width: '20%', margin: 5},
});

export default PdfView;
