import React, { Component } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import styles from '../styles';

export default class LoginScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Login',
    // title: 'Login',
    // headerLeft: (
    //   <Button
    //     onPress={ () => navigation.goBack() }
    //     title='Back'
    //   />
    // )
  });

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>Login Screen</Text>
      </View>
    );
  }
}
