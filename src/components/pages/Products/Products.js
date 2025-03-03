import react from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { API_URL } from '@env';
import Config from 'react-native-config'


const Products = () => {   
    console.log(API_URL);
    return (
        <SafeAreaView >
           <Text>products  {API_URL}</Text>
        </SafeAreaView>
    );
}
export default Products;