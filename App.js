import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from './src/screens/FirstScreen'
import SigninScreen from './src/screens/SigninScreen'
import SignupScreen from './src/screens/SignupScreen'
import Navigator from './src/navigation/Navigator';
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './src/screens/PaymentScreen';
import Test from './src/screens/Test';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Test" component={Test} options={{ headerShown: false }} /> */}
        <Stack.Screen name="First" component={FirstScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={SigninScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Navigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
function App() {
  return (
    <StripeProvider publishableKey="pk_test_51IsiGeERaO9lvsvDPuC3K4mxPf0HwBIZXt5bE3f0XArZE6yFTs9ETnr5bOFfhp2hNNM5CImOCzXaIybketwxF6wZ00uzqnWqUP">
      <Router />
    </StripeProvider>
  );
}

export default App;