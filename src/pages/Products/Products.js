import react from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ActivityIndicator } from 'react-native';
import { API_URL } from '@env';
import Config from 'react-native-config'
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hook/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';


const Products = () => {
    const {loading, data, error} = useFetch(API_URL);
    // console.log("render");
    // console.log({loading, data: data.length, error});
    // console.log('--------------------')


    const renderProduct = ({ item }) => <ProductCard product={item} />

    if (loading) {
        return (
            <Loading></Loading>
        );
    }
    if(error){
        return (
            <Error></Error>
        );
    }




    return (
        <SafeAreaView >
            <FlatList data={data} renderItem={renderProduct} />
        </SafeAreaView>
    );
}
export default Products;