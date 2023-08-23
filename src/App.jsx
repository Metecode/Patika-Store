import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import productData from './data.json';
import ProductCard from './components/productCard/ProductCard';
import SearchBar from './components/searchBar/SearchBar';

function App() {
  const renderProduct = ({item}) => <ProductCard product={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Patika Store</Text>
      <SearchBar />
      <FlatList
        numColumns={2}
        data={productData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProduct}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'black',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#800080',
  },
});
export default App;
