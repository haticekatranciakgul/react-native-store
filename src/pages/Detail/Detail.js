import react from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import styles from './Detail.style';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useFetch from '../../hook/useFetch/useFetch';
import { API_URL } from '@env';


const Detail = ({ route }) => {
    const { id } = route.params;
    const { loading, error, data } = useFetch(`${API_URL}/${id}`);
    console.log(id);
    console.log("API'den gelen data:", data);


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
        <View style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <View>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price}</Text>
            </View>
        </View>
    );
}
export default Detail;