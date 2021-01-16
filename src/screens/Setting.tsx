// react native
import React from 'react';
import {View, SafeAreaView} from 'react-native';
// react native extensions
import {Button} from 'react-native-elements';
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
import {defaultBackgroundColor, secondaryAccentColor} from '../theme/colors';

interface Props {
  isLogin?: boolean;
  onQuit: () => void;
}

const SettingMain = (props: Props) => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.settingGroup}>
        <SettingCell title="账号资料" isLink />
        <SettingCell title="安全隐私" isLink />
        <SettingCell title="关于批多多" isLink />
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
    </SafeAreaView>
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
