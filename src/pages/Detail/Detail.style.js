import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

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
        width: deviceSize.width,
        height: deviceSize.height/3,
        resizeMode: 'contain', // Görselin tam olarak görünmesi için
        borderRadius: 10,     // Opsiyonel, daha iyi görünüm için
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },  
    desc: {
        fontStyle: 'italic',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
    },

});