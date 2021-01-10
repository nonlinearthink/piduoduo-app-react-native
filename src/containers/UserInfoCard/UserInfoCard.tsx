// react native
import React from 'react';
import {Text, View} from 'react-native';
// react native extensions
import {Avatar, Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
// styles
import styles from './UserInfoCard.style';
// types
import {UserInfo} from '../../types';

interface Props {
  isLogin?: boolean;
  user?: UserInfo;
}

const signatureView = (signature: string | undefined) => {
  if (signature) {
    return (
      <View style={styles.row}>
        <Text style={styles.tag}>{'个性签名'}</Text>
        <Text style={styles.signature} numberOfLines={2}>
          {signature}
        </Text>
      </View>
    );
  }
};

const UserInfoCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Avatar
          size="large"
          rounded
          source={require('../../assets/images/avatar.png')}
          containerStyle={styles.avatarContainer}
        />
        {(() => {
          if (props.isLogin) {
            return (
              <View>
                <Text style={styles.username}>
                  {props.user ? props.user.username : ''}
                </Text>
                {signatureView(props.user ? props.user.signature : '')}
              </View>
            );
          } else {
            return (
              <Button
                title="点击登录"
                type="clear"
                titleStyle={styles.text}
                onPress={() => {
                  Actions.push('Login');
                }}
              />
            );
          }
        })()}
      </View>
      <View style={styles.statisticView}>
        <View style={styles.statisticItem}>
          <Text style={styles.text}>0个</Text>
          <Text style={styles.text}>关注</Text>
        </View>
        <View style={styles.statisticItem}>
          <Text style={styles.text}>0个</Text>
          <Text style={styles.text}>粉丝</Text>
        </View>
        <View style={styles.statisticItem}>
          <Text style={styles.text}>0篇</Text>
          <Text style={styles.text}>累计创作</Text>
        </View>
      </View>
    </View>
  );
};

export default UserInfoCard;
