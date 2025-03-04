import react from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { API_URL } from '@env';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {

    return (
        <View>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: product.image }}
                />
            </View>
            <View style={styles.body_container} >
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price} TL</Text>

            </View>
        </View>
    );
}
export default ProductCard;