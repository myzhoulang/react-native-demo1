import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Header, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';

const InputComponent = () => (
  <Input 
    placeholder='马云高考数学1分'
    placeholderTextColor='#fff'
    leftIcon={<Icon name='search1' color='#fff' size={15}/>}
    inputStyle={styles.searchInput}
    inputContainerStyle={styles.searchInputContainer}/>
)

export default class LayoutHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      search: '',
    };
  }

  render(){
    return (
      <Header
        leftComponent={{ text: '網易', style: { color:'#fff', fontSize: 18 } }}
        centerComponent={InputComponent}
        rightComponent={
        <View style={{color:'#fff', alignItems:'center'}}>
          <Icon name='videocamera' color='#fff' size={20}/>
          <Text style={{color: '#fff', fontSize: 14}}>直播</Text>
        </View>}
      />
    )
  }
}

const styles = StyleSheet.create({
  searchInputContainer: {
    paddingLeft: 3,
    paddingRight: 3,
    borderBottomWidth: 0, 
    borderRadius: 24,
    height: 24,
    backgroundColor: 'rgba(255, 255, 255, .5)'
  },
  searchInput: {
    fontSize: 14, 
    paddingLeft: 3, 
    color: '#fff',
  }
});