/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Header from './Header';

class HomeScreen extends Component {
  render(){
    return (
      <Text>首页ssss</Text>
    )
  }
}

class SettingsScreen extends Component {
  render(){
    return (
      <Text>首页--set'ti'ne</Text>
    )
  }
}

class SpeakScreen extends Component {
  render(){
    return (
      <Text>首页--set'ti'ne</Text>
    )
  }
}

class MyScreen extends Component {
  render(){
    return (
      <Text>首页--set'ti'ne</Text>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen:HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.routeName,
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  },
  video: {
    screen: SettingsScreen,
  },

  Speak: {
    screen: SpeakScreen
  },

  My: {
    screen: MyScreen
  }
}, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  headerMode:'screen',
});


export default TabNavigator;
