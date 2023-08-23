import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  price: {
    fontSize: 13,
    color: 'gray',
    padding: 5,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
  },
  stock: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 13,
    padding: 5,
  },
});
