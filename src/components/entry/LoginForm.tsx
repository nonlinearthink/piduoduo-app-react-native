// react native 官方插件
import React, {useState} from 'react';
import {View} from 'react-native';
// react native 第三方插件
import {Input, Icon, Button} from 'react-native-elements';
import {ScaledSheet} from 'react-native-size-matters';
import Toast from 'react-native-root-toast';
// HTTP API
import {login} from '../../apis/user';
// 样式
import {primaryColor, darkPrimaryColor} from '../../theme/colors';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // 是否加密密码，默认加密
  const [securePassword, setSecurePassword] = useState(true);
  // 按钮显示加载
  const [loading, setLoading] = useState(false);
  /**
   * 登录
   */
  function onLogin() {
    // 开启加载动效
    setLoading(true);
    login({username, password})
      .then((res) => {
        console.log(res.data);
        // 取消加载动效
        setLoading(false);
        // 显示登录成功
        Toast.show('登录成功', {
          position: Toast.positions.CENTER,
          animation: true,
          hideOnPress: true,
          delay: 1,
        });
      })
      .catch((err) => {
        console.error(err);
        // 取消加载动效
        setLoading(false);
        // 如果是请求错误则显示报错
        if (err.response) {
          Toast.show(`${err.response.data.msg}`, {
            position: Toast.positions.CENTER,
            animation: true,
            hideOnPress: true,
            delay: 1,
          });
        }
      });
  }
  return (
    <View>
      <Input
        placeholder="用户名"
        leftIcon={
          <Icon
            name="user-circle-o"
            type="font-awesome"
            color={darkPrimaryColor}
          />
        }
        leftIconContainerStyle={styles.prefixIcon}
        onChangeText={setUsername}
      />
      <Input
        placeholder="密码"
        leftIcon={
          <Icon
            name={securePassword ? 'eye' : 'eye-off'}
            type={'ionicon'}
            color={darkPrimaryColor}
            onPress={() => setSecurePassword(!securePassword)}
          />
        }
        leftIconContainerStyle={styles.prefixIcon}
        secureTextEntry={securePassword}
        onChangeText={setPassword}
      />
      {/* 登录按钮 */}
      <Button
        title="登录"
        buttonStyle={styles.blockButton}
        loading={loading}
        onPress={onLogin}
      />
    </View>
  );
};

export default LoginForm;

const styles = ScaledSheet.create({
  prefixIcon: {
    marginHorizontal: '4@s',
  },
  blockButton: {
    backgroundColor: primaryColor,
    marginVertical: '16@s',
  },
});
