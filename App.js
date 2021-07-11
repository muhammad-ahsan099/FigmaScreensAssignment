/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import LoginDark from './src/components/LoginDark/LoginDark';
import Intro from './src/components/intro/Intro';
import LoginScreen from './src/components/loginScreen/LoginScreen';
import SignupScreen from './src/components/signupScreen/SignupScreen';
import LoginOneScreen from './src/components/loginOneScreen/LoginOneScreen';
import Dashborad from './src/components/dashboard/Dashboard';
import Cuenta from './src/components/cuenta/Cuenta';




import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


function App() {


  return (

    // <LoginDark />
    // <Intro />
    // <LoginOneScreen />
    // <LoginScreen />
    // <SignupScreen/ />
    // <Dashborad />
    <Cuenta />
  );
};
export default App;
