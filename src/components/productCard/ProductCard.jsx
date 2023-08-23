import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <View style={styles.inner_container}>
         <Text style={styles.title}>{product.title}</Text> 
         <Text style={styles.price}>{product.price}</Text>   
         {!product.inStock && <Text style={styles.stock}>STOKTA YOK</Text> }
      </View>
    </View>
  );
};

export default ProductCard;
