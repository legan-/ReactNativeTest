import {
  createStackNavigator,
} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

export default createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
});
