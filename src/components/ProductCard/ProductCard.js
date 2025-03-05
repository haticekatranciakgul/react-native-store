import react from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableWithoutFeedback } from 'react-native';
import { API_URL } from '@env';
import styles from './ProductCard.style';

const ProductCard = ({ product, onSelect }) => {

    return (
        <View>
            <TouchableWithoutFeedback onPress={onSelect}>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{ uri: product.image }}
                    />
                </View>

            </TouchableWithoutFeedback>

            <View style={styles.body_container} >
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price} TL</Text>

            </View>
        </View>
    );
}
export default ProductCard;