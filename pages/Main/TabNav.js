import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createTabNavigator, StackNavigator } from 'react-navigation';

class HomeScreen extends Component {
  render(){
    return (
      <Text>首页</Text>
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

const TabNavigator = createTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default StackNavigator({
  Component: {screen: TabNavigator}
});