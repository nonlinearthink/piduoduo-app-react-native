// react native
import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import UserInfoCard from '../../containers/UserInfoCard';
import SettingCell from '../../components/SettingCell';
import {primaryColor, primaryTextColor} from '../../theme/colors';
import styles from './User.style';
import Toast from 'react-native-root-toast';
import {Actions} from 'react-native-router-flux';

const User = () => {
  return (
    <View>
      <UserInfoCard />
      <View style={styles.floatCardContainer}>
        <View style={styles.floatCard}>
          <View>
            <Icon
              name="star-o"
              type="font-awesome"
              size={32}
              color={primaryTextColor}
            />
            <Text>我的收藏</Text>
          </View>
          <View>
            <Icon
              name="history"
              type="material-community"
              size={32}
              color={primaryTextColor}
            />
            <Text>浏览记录</Text>
          </View>
          <View>
            <Icon
              name="like2"
              type="antdesign"
              size={32}
              color={primaryTextColor}
            />
            <Text>我赞过的</Text>
          </View>
        </View>
        <SettingCell
          title="会员中心"
          prefix={
            <Icon
              name="wallet-membership"
              type="material-community"
              color={primaryColor}
              containerStyle={styles.icon}
            />
          }
          isLink
          onPress={() => {
            Toast.show('暂未开放', {
              position: Toast.positions.CENTER,
              animation: true,
              hideOnPress: true,
            });
          }}
        />
      </View>
      <View style={styles.settingGroup}>
        <SettingCell
          title="帮助手册"
          prefix={
            <Icon
              name="help-circle-outline"
              type="material-community"
              color={primaryColor}
              containerStyle={styles.icon}
            />
          }
          isLink
        />
        <SettingCell
          title="意见反馈"
          prefix={
            <Icon
              name="envelope-o"
              type="font-awesome"
              color={primaryColor}
              containerStyle={styles.icon}
            />
          }
          isLink
        />
        <SettingCell
          title="设置"
          prefix={
            <Icon
              name="setting"
              type="antdesign"
              color={primaryColor}
              containerStyle={styles.icon}
            />
          }
          isLink
          onPress={() => {
            Actions.jump('settingMain');
          }}
        />
      </View>
    </View>
  );
};

export default User;
