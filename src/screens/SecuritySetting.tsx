import React from 'react';
import {View} from 'react-native';
import {
  accentTextColor,
  primaryColor,
  accentIconsColor,
  defaultBackgroundColor,
} from '../theme/colors';
import {Actions} from 'react-native-router-flux';
import {Header, Icon} from 'react-native-elements';
import SettingCell from '../components/SettingCell';
import {useSelector} from 'react-redux';
import {StoreState} from '../types';
import {ScaledSheet} from 'react-native-size-matters';

const SecuritySetting = () => {
  const email = useSelector((store: StoreState) => store.user.email);
  const safeEmail = (text: string) => {
    let str = text.split('@');
    return (
      str[0].substring(0, 3) +
      '*****' +
      str[1].substring(str[1].length - 4, str[0].length)
    );
  };
  return (
    <View>
      <Header
        centerComponent={{
          text: '安全隐私',
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
        backgroundColor={primaryColor}
      />
      <View style={styles.settingGroup}>
        <SettingCell
          title="更改注册邮箱"
          isLink
          description={email ? safeEmail(email) : ''}
        />
        <SettingCell
          title="更改密码"
          isLink
          onPress={() => Actions.jump('PasswordChangeSetting')}
        />
      </View>
    </View>
  );
};

export default SecuritySetting;

const styles = ScaledSheet.create({
  settingGroup: {
    backgroundColor: defaultBackgroundColor,
    paddingHorizontal: '16@s',
  },
});
