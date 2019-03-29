/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  ThemeProvider, Button, Header
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Octicons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Bananas extends Component {
  render(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    )
  }
}

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

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      search: '',
    };
  }

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header
         leftComponent={{ text: '網易', style: { color:'#fff', fontSize: 18 } }}
         rightComponent={<Icon name='beaker' color='#fff' size={20}/>}
        />
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonText: {
    padding: 20,
    color: 'red'
  }
});