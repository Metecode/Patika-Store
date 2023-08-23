import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const searchBar = () => {
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="black"
        placeholder="  Ara..."
        inlineImageLeft="search_icon"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: 'black',
    backgroundColor: '#ECEFF1',
    margin: 10,
    borderRadius: 25,
  },
});

export default searchBar;
