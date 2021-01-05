// react native 官方插件
import React from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
// react native 第三方插件
import {Button} from 'react-native-elements';
import {ScaledSheet} from 'react-native-size-matters';
// 自定义组件
import LoginForm from '../components/entry/LoginForm';
// 样式
import {primaryTextColor} from '../theme/colors';

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
        <Button title="游客模式" type="clear" />
        <Button title="忘记密码" type="clear" />
      </View>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  page: {
    paddingHorizontal: '16@s',
  },
  logo: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: '16@s',
  },
  logoImage: {
    width: '100@s',
    height: '100@s',
    borderRadius: '25@s',
  },
  logoText: {
    fontSize: '16@s',
    color: primaryTextColor,
    margin: '8@s',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Login;
