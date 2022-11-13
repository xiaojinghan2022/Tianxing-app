'use strict';
import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 NativeModules,
 View,
 ToastAndroid,
 DeviceEventEmitter
} from 'react-native';
let title = 'React Native界面';

class reactNative extends Component {

/**加载完成*/
componentWillMount() {
  let result = NativeModules.MyNativeModule.Constant;
  console.log('原生端返回的常量值为：' + result);
}

/**
* 原生调用RN
*/
componentDidMount() {
   DeviceEventEmitter.addListener('nativeCallRn',(msg)=>{
        title = "React Native界面,收到数据：" + msg;
        ToastAndroid.show("发送成功", ToastAndroid.SHORT);
   })
}
render() {
return (
  <View style={styles.container}>
    <Text style={styles.welcome} >
        {title}
    </Text>

    <Text style={styles.instructions}>
      To get started, edit index.android.js
    </Text>

    <Text style={styles.instructions}>
      Double tap R on your keyboard to reload,{'\n'}
      Shake or press menu button for dev menu
    </Text>

    <Text style={styles.welcome}>
      我是RN界面!
    </Text>
  </View>
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
});
AppRegistry.registerComponent('reactNative', () => reactNative);