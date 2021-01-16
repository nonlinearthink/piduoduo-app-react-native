// react native
import React from 'react';
import {View} from 'react-native';
// react native extensions
import {Button, Header, Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
// redux tool
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {clearToken, initUserInfo} from '../store/actions';
// my components
import SettingCell from '../components/SettingCell';
// types
import {StoreState} from '../types';
// style tool
import {ScaledSheet} from 'react-native-size-matters';
// colors
import {
  defaultBackgroundColor,
  secondaryAccentColor,
  accentTextColor,
  primaryColor,
  accentIconsColor,
} from '../theme/colors';

interface Props {
  isLogin?: boolean;
  onQuit: () => void;
}

const SettingMain = (props: Props) => {
  return (
    <View style={styles.safeAreaContainer}>
      <Header
        centerComponent={{
          text: '设置',
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
          title="账号资料"
          isLink
          onPress={() => Actions.jump('UserInfoSetting')}
        />
        <SettingCell
          title="安全隐私"
          isLink
          onPress={() => Actions.jump('SecuritySetting')}
        />
        <SettingCell
          title="关于批多多"
          isLink
          onPress={() => Actions.jump('About')}
        />
        {(() => {
          return props.isLogin ? (
            <View>
              <Button
                title="退出登录"
                type="clear"
                titleStyle={styles.quitText}
                onPress={props.onQuit}
              />
            </View>
          ) : undefined;
        })()}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  settingGroup: {
    backgroundColor: defaultBackgroundColor,
    paddingHorizontal: '16@s',
  },
  quitText: {
    color: secondaryAccentColor,
  },
  safeAreaContainer: {
    flex: 1,
  },
});

const mapStateToProps = (state: StoreState) => ({
  isLogin: state.session.isLogin,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onQuit: () => {
    dispatch(clearToken());
    dispatch(initUserInfo());
    Actions.replace('Login');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingMain);
