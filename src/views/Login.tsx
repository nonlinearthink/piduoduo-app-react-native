// react native
import React from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
// react native extensions
import {Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
// my components
import LoginForm from '../components/containers/LoginForm';
// styles
import styles from './Login.style';

const Login = () => {
  return (
    <ScrollView style={styles.page}>
      {/* logo */}
      <View style={styles.logo}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>批多多</Text>
      </View>
      {/* 登录表单 */}
      <LoginForm />
      {/* 其他登录选项 */}
      <View style={styles.options}>
        <Button title="注册新用户" type="clear" />
        <Button title="游客模式" type="clear" onPress={Actions.home} />
        <Button title="忘记密码" type="clear" />
      </View>
    </ScrollView>
  );
};

export default Login;
