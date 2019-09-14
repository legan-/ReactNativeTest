import React, { Component } from 'react';

import {
  DrawerActions,
} from 'react-navigation-drawer';

import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from '../styles';

export default class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Home',
    // headerLeft: (
    //   <Button
    //     onPress={ () => console.log('open') }
    //     title='Menu'
    //   />
    // ),
    // headerRight: (
    //   <Button
    //     onPress={ () => navigation.navigate('Login') }
    //     title='Login'
    //   />
    // ),
  });

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>Home Screen</Text>
      </View>
    );
  }
}
