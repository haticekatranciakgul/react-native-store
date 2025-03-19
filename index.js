import { registerRootComponent } from 'expo';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import Wrapper from './src/Wrapper';
import {name as appName} from './app.json';


export default registerRootComponent(Wrapper);