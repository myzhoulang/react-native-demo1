import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class ListItem extends Component {
  constructor(prop) {
    super(prop);
  }

  render(){
    return (
      <View style={[styles.item, styles.flex]}>
        <View style={styles.text}>
          <Text style={styles.title} numberOfLines={2}>外交部回应"大陆军机飞越台海中线":不是外交问题,外交部回应"大陆军机飞越台海中线":不是外交问题</Text>
          <View style={[styles.flex]}>
            <Text style={styles.extr}>澎湃新闻</Text>
            <Text style={styles.extr}>4小时前</Text>
            <Text style={styles.extr}>1678跟贴</Text>
          </View>
        </View>
        <View style={styles.image}>
          <Image source={{uri: 'https://inews.gtimg.com/newsapp_ls/0/8399564729_294195/0'}} style={{width: 116, height: 72}} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    padding: 10,
    borderBottomWidth:1,
    borderBottomColor:'#eee',
  },
  title: {
    color:'#111',
    lineHeight: 24,
    paddingBottom: 10
  },
  text: {
    flex: 1,
    color: 'red',
    paddingRight: 15
  },
  extr: {
    fontSize: 12,
    color: '#999',
    paddingRight: 6
  },
  image:{
    width: 116
  }
});