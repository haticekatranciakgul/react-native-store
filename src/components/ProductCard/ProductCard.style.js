import {StyleSheet} from 'react-native';

export default StyleSheet.create({      
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    image: {
        height: 200,
        resizeMode: 'contain',
    },
    body_container: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
    },
    price: {
        color: 'gray',
    },
});
