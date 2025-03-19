import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './pages/Products/Products';
import Detail from '../src/pages/Detail/Detail';
import Login from '../src/pages/Login/Login';
import { useSelector } from 'react-redux';
import Loading from './components/Loading';

const Stack = createNativeStackNavigator();

const Router = () => {
  const userSession = useSelector(s => s.user)
  const isAuthLoading = useSelector(s => s.isAuthLoading)



  return (
    <NavigationContainer >
        {isAuthLoading ?
        (
          <Loading />
        )
        :
        
        !userSession ? (
          <Stack.Navigator>

           <Stack.Screen
           name="LoginPage"
           component={Login}
           options={{
             headerShown: false,
           }} />
               </Stack.Navigator>

        )
          : (
            <>
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
          </>
          )
        }
  
    </NavigationContainer>
  );
}

export default Router;
