import React from 'react';
import { SafeAreaView, Text, View, Image, Alert } from 'react-native';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './Login.style';
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import usePost from '../../hook/usePost/usePost';
import Config from 'react-native-config';
import { API_AUTH_URL } from '@env';
import { useDispatch } from 'react-redux';


// AsyncStorage.setItem('@user','ASSAD');
// AsyncStorage.getItem('@user');
// AsyncStorage.removeItem('');


const Login = ({ navigation }) => {
    const { data, post, loading, error } = usePost();
    const dispatch = useDispatch();

    function handleLogin(values) {
        post(API_AUTH_URL + '/login', values)
    }

    if (error) {
        Alert.alert('Store', 'Error jfhjfjf!')

    }

    console.log(data)

    if (data) {
        if (data.status === 'Error') {
            Alert.alert('Store', 'User Not Found!')

        }
        else {
            dispatch({type: 'SET_USER', payload:{user}})
            navigation.navigate('ProductsPage');
           // dispatch({ type: 'SET-USER', payload: { user } })
        }

    }


    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/login-logo.png')} />
            </View>
            <Formik initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}>
                {({ handleSubmit, handleChange, values, iconName }) => (
                    <View style={styles.body_container}>
                        <Input placeholder="Name"
                            value={values.username}
                            onType={handleChange('username')}
                            iconName="account" />
                        <Input placeholder="Password"
                            value={values.password}
                            onType={handleChange('password')}
                            iconName="key" isSecure />
                        <Button text="Login" onPress={handleSubmit} loading={loading}></Button>
                    </View>
                )}
            </Formik>
        </SafeAreaView>

    )

}

const user =
{
    "address": {
        "geolocation": {
            "lat": "-37.3159",
            "long": "81.1496"
        },
        "city": "kilcoole",
        "street": "new road",
        "number": 7682,
        "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
        "firstname": "john",
        "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0
}


export default Login;