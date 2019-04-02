import React, { Component } from 'react';
import { ThemeProvider } from 'react-native-elements'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Main from './pages/Main';
import Header from './pages/Main/Header';

const AppNavigator = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions:({navigation}) => {
      console.log(navigation)
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: routeName === 'Home' ? <Header/> : null
      }
    }
  }
}, {
  initialRouteName: "Main",
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
    const one = 123
    return (
      <ThemeProvider theme={theme}>
        <AppContainer/>
      </ThemeProvider>
    )
  }
}
