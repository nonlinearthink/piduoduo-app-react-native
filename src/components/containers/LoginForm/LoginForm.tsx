// react native
import React, {useState} from 'react';
import {View} from 'react-native';
// react native extensions
import {Input, Icon, Button} from 'react-native-elements';
import Toast from 'react-native-root-toast';
import {Actions} from 'react-native-router-flux';
// http apis
import {login} from '../../../apis/user';
// styles
import {darkPrimaryColor} from '../../../theme/colors';
import styles from './LoginForm.style';
// types
import {UserInfo} from '../../../types';

interface Props {
  onSetToken: (token: string) => void;
  onUpdateUserInfo: (user: UserInfo) => void;
}

const LoginForm = (props: Props) => {
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
    if (username === '' || password === '') {
      Toast.show('用户名或者密码为空', {
        position: Toast.positions.CENTER,
        animation: true,
        hideOnPress: true,
      });
      return;
    }
    // 开启加载动效
    setLoading(true);
    login({username, password})
      .then((res) => {
        console.log(res.data);
        // 取消加载动效
        setLoading(false);
        Actions.jump('home');
        // 显示登录成功
        Toast.show('登录成功', {
          position: Toast.positions.CENTER,
          animation: true,
          hideOnPress: true,
        });
        // 更新 token
        props.onSetToken(res.data.data.token);
        // 更新用户信息
        props.onUpdateUserInfo(res.data.data.user);
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
          });
        }
      });
  }

  return (
    <View>
      {/* 用户名输入框 */}
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
      {/* 密码输入框 */}
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
