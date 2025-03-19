import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './Input.style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Input = ({ placeholder, value, onType, iconName, isSecure }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder={placeholder} onChangeText={onType} value={value} secureTextEntry={isSecure} />
            <MaterialCommunityIcons name={iconName} size={25} color="gray" />
        </View>
    );
};

export default Input