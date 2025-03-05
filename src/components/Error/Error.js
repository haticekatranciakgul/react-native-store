import react from 'react';
import LottieView from 'lottie-react-native';


function Error({ error }) {
    return (
        <LottieView source={require('../../assets/error.json')} autoPlay loop>

        </LottieView> 
    );
}

export default Error;