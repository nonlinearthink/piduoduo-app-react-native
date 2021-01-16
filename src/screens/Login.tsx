// react native
import React from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
// react native extensions
import {Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
// my components
import LoginForm from '../containers/LoginForm';
// styles
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScaledSheet} from 'react-native-size-matters';
import {primaryTextColor} from '../theme/colors';

const Login = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
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
          <Button title="游客模式" type="clear" onPress={Actions.Home} />
          <Button title="忘记密码" type="clear" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

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
  safeAreaContainer: {
    flex: 1,
  },
});
