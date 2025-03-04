import react , {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { API_URL } from '@env';
import Config from 'react-native-config'
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';



const Products = () => {   
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []); 
    
    const fetchData = async () => {
        const {data: productData}= await axios.get(API_URL);
        setData(productData);

    };


    const renderProduct = ({item}) => <ProductCard product={item} />;


    return (
        <SafeAreaView >
            <FlatList data={data} renderItem={renderProduct}/>
        </SafeAreaView>
    );
}
export default Products;