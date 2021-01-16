import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {
  accentTextColor,
  primaryColor,
  accentIconsColor,
  defaultBackgroundColor,
} from '../theme/colors';
import {Actions} from 'react-native-router-flux';
import {updateUserPassword} from '../apis/user';
import Toast from 'react-native-root-toast';

const PasswordChangeSetting = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <View>
      <Header
        centerComponent={{
          text: '修改密码',
          style: {color: accentTextColor, fontSize: 16},
        }}
        leftComponent={
          <Icon
            name="left"
            type="antdesign"
            color={accentIconsColor}
            onPress={() => Actions.pop()}
          />
        }
        rightComponent={
          <TouchableHighlight
            onPress={() => {
              updateUserPassword({
                passwordConfirm: confirmPassword,
                newPassword: newPassword,
                oldPassword: password,
              })
                .then((res) => {
                  console.log(res.data);
                  Toast.show('更新成功', {
                    position: Toast.positions.CENTER,
                    animation: true,
                    hideOnPress: true,
                  });
                  setPassword('');
                  setNewPassword('');
                  setConfirmPassword('');
                  Actions.pop();
                })
                .catch((err) => {
                  console.error(err);
                  Toast.show(err.response.data.msg, {
                    position: Toast.positions.CENTER,
                    animation: true,
                    hideOnPress: true,
                  });
                });
            }}>
            <Text style={{color: accentTextColor}}>修改</Text>
          </TouchableHighlight>
        }
        backgroundColor={primaryColor}
      />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>旧密码</Text>
          <TextInput
            value={password}
            placeholder="请输入旧密码"
            onChangeText={(text) => {
              setPassword(text);
            }}
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>新密码</Text>
          <TextInput
            value={newPassword}
            placeholder="请输入新密码"
            onChangeText={(text) => {
              setNewPassword(text);
            }}
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>确认新密码</Text>
          <TextInput
            value={confirmPassword}
            placeholder="请确认新密码"
            onChangeText={(text) => {
              setConfirmPassword(text);
            }}
            secureTextEntry
          />
        </View>
      </View>
    </View>
  );
};

export default PasswordChangeSetting;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    width: 80,
  },
  container: {
    paddingHorizontal: 16,
    backgroundColor: defaultBackgroundColor,
  },
});
