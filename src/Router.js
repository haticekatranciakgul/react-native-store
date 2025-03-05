import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './pages/Products/Products';
import Detail from '../src/pages/Detail/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: 'Store',
            headerStyle: { backgroundColor: '#64b5f6' },
            headerTitleStyle: { color: 'white' }
          }} />
        <Stack.Screen name="DetailPage" component={Detail}
          options={{
            title: 'Detail',
            headerStyle: { backgroundColor: '#64b5f6' },
            headerTitleStyle: { color: 'white' }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
