/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from './Header';
import ListItem from '../../components/ListItem';

const data = [
  {key:'a'},
  {key:'b'},
  {key:'c'},
  {key:'d'},
  {key:'e'},
  {key:'f'},
  {key:'g'},
  {key:'h'},
]

class HomeScreen extends Component {
  render(){
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (<ListItem/>)}
        />
      </View>
    )
  }
}

class VideoScreen extends Component {
  render(){
    return (
      <Text>Video</Text>
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
    navigationOptions:()=>({
      title: '首页'
    })
  },
  Video: {
    screen: VideoScreen,
    navigationOptions:()=>({
      title: '视频'
    })
  },

  Speak: {
    screen: SpeakScreen,
    navigationOptions:()=>({
      title: '讲讲'
    })
  },

  My: {
    screen: MyScreen,
    navigationOptions:()=>({
      title: '我的'
    })
  }
}, {
  initialRouteName: 'Home',
  tabBarPosition: 'bottom',
  headerMode:'screen',
  tabBarOptions:{
    activeTintColor: '#d60000',
    inactiveTintColor: '#aaa',
    labelStyle: {
      fontSize: 10
    },
    inactiveBackgroundColor: '#fff'
  },
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = FeatherIcon;
      const tabIConMap = {
        Home: 'home',
        Video: 'play',
        Speak: 'send',
        My: 'user'
      }
      const iconName = tabIConMap[routeName];
      // You can return any component that you like here!
      return <IconComponent name={iconName} size={18} color={tintColor} />;
    },
  })
});

export default TabNavigator;
