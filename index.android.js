/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { InputItem} from 'antd-mobile';

class AwesomeProject extends Component{
    render(){
        return (
            <View style={styles.container}>
                    <View style={{ height: 150 }}>
                      <InputItem style={{ height: 150 }} type="number" maxLength={11} ><Text style={{ color: '#8A8A8A' }}>手机号</Text></InputItem>
                      <InputItem style={{ height: 150 }} maxLength={20}><Text style={{ color: '#8A8A8A' }}>密码</Text></InputItem>
                    </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#E8EBF4'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
