import react from 'react';
import LottieView from 'lottie-react-native';

function Loading() { 
    return (
        <LottieView source={require('../../assets/loading.json')} autoPlay loop>

        </LottieView>
    );
}
export default Loading;