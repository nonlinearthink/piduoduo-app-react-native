import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {Header, Icon, CheckBox} from 'react-native-elements';
import {
  accentTextColor,
  primaryColor,
  accentIconsColor,
  defaultBackgroundColor,
} from '../theme/colors';
import {Actions} from 'react-native-router-flux';
import {useSelector, useDispatch} from 'react-redux';
import {StoreState} from '../types';
import {updateUserDetail} from '../apis';
import {updateUserInfo} from '../store/actions';
import Toast from 'react-native-root-toast';

const UserInfoSetting = () => {
  const [nickname, setNickname] = useState('');
  const [isMale, setIsMale] = useState(false);
  const [phone, setPhone] = useState('');
  const [signature, setSignature] = useState('');
  const user = useSelector((state: StoreState) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    user.nickname ? setNickname(user.nickname) : '';
    user.isMale ? setIsMale(user.isMale) : '';
    user.phone ? setPhone(user.phone) : '';
    user.signature ? setSignature(user.signature) : '';
  }, [user]);
  return (
    <View>
      <Header
        centerComponent={{
          text: '编辑资料',
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
              const userTemp = {
                nickname: nickname,
                isMale: isMale,
                phone: phone,
                signature: signature,
              };
              updateUserDetail(userTemp).then((res) => {
                console.log(res.data);
                dispatch(updateUserInfo(userTemp));
                Toast.show('更新成功', {
                  position: Toast.positions.CENTER,
                  animation: true,
                  hideOnPress: true,
                });
                Actions.pop();
              });
            }}>
            <Text style={{color: accentTextColor}}>保存</Text>
          </TouchableHighlight>
        }
        backgroundColor={primaryColor}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>昵称</Text>
        <TextInput
          value={nickname}
          placeholder="请输入昵称"
          onChangeText={(text) => {
            setNickname(text);
          }}
        />
      </View>
      <View style={styles.checkContainer}>
        <Text style={styles.inputLabel}>性别</Text>
        <View style={styles.checkGroup}>
          <CheckBox
            title="男"
            checked={isMale}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => setIsMale(!isMale)}
          />
          <CheckBox
            title="女"
            checked={!isMale}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => setIsMale(!isMale)}
          />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>手机号</Text>
        <TextInput
          value={phone}
          placeholder="请输入手机号"
          onChangeText={(text) => {
            setPhone(text);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>个性签名</Text>
        <TextInput
          value={signature}
          placeholder="请输入个性签名"
          onChangeText={(text) => {
            setSignature(text);
          }}
          numberOfLines={3}
          multiline
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default UserInfoSetting;

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: defaultBackgroundColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  inputLabel: {
    width: 80,
    padding: 8,
  },
  checkContainer: {
    flexDirection: 'row',
    backgroundColor: defaultBackgroundColor,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  checkGroup: {
    flexDirection: 'row',
    flex: 1,
  },
});
