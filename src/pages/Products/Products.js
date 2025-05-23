import react from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ActivityIndicator } from 'react-native';
import { API_PRODUCT_URL } from '@env';
import Config from 'react-native-config';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hook/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

const Products = ({ navigation }) => {
    const user = useSelector(s => s.user);
    const { loading, data, error } = useFetch(API_PRODUCT_URL);
    const handleProductSelect = id => {
        navigation.navigate('DetailPage', {id});
    }

    const renderProduct = ({ item }) => (
        <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
    );

    if (loading) {
        return (
            <Loading></Loading>
        );
    }

    if (error) {
        return (
            <Error></Error>
        );
    }

    return (
        <View >
            <Text>Hello : {user.name.firstname}</Text>
            <FlatList data={data} renderItem={renderProduct} />
        </View>
    );
}
export default Products;