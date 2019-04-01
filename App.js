import React, { Component } from 'react';
import { ThemeProvider } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/Main';
import Header from './pages/Main/Header';


const AppNavigator = createStackNavigator({
  Main: {
    screen: Main
  }
}, {
  initialRouteName: "Main",
  headerMode:'screen',
});
const AppContainer = createAppContainer(AppNavigator);
const theme = {
  Header: {
    backgroundColor: '#d60000'
  },
  Button: {
    titleStyle: {
      color: '#fff',
    },
  },
};
export default class App extends Component{
  render(){
    return (
      <ThemeProvider theme={theme}>
        <AppContainer/>
      </ThemeProvider>
    )
  }
}
