import React from 'react';
import {View} from 'react-native';
import SettingCell from '../../components/SettingCell';
import styles from './Setting.style';
import {Button} from 'react-native-elements';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {clearToken, initUserInfo} from '../../store/actions';
import {Actions} from 'react-native-router-flux';
import {StoreState} from '../../types';

interface Props {
  isLogin?: boolean;
  onQuit: () => void;
}

const SettingMain = (props: Props) => {
  return (
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
  );
};

const mapStateToProps = (state: StoreState) => ({
  isLogin: state.session.isLogin,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onQuit: () => {
    dispatch(clearToken());
    dispatch(initUserInfo());
    Actions.replace('login');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingMain);