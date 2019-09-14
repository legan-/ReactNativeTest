import React, { Component } from 'react';

import {
  createDrawerNavigator,
} from 'react-navigation-drawer';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

import {
  Text,
  View
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import styles from '../styles';

function Drawer() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>
        Drawer
      </Text>
    </View>
  );
}

export default createDrawerNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
}, {
  initialRouteName: 'Home',
  // contentComponent: Drawer,
  drawerBackgroundColor: 'rgba(255, 255, 255, 0.9)',
  drawerWidth: wp('50%'),
  overlayColor: 'rgba(0, 0, 0, 0.3)'
});
