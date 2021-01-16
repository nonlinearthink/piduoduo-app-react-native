// react native
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
// react native extensions
import {Avatar, Button, Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
// styles
import styles from './UserInfoCard.style';
// types
import {UserInfo} from '../../types';
import {accentIconsColor} from '../../theme/colors';
import {getUserComposition, getFollow, getFollower} from '../../apis';
import {Composition} from '../../apis/types';
import {useSelector} from 'react-redux';
import {StoreState} from '../../types';

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
  const [followCount, setFollowCount] = useState(0);
  const [fansCount, setFansCount] = useState(0);
  const [writingCount, setWritingCount] = useState(0);
  const isLogin = useSelector((state: StoreState) => state.session.isLogin);
  const username = useSelector((state: StoreState) => state.user.username);
  useEffect(() => {
    if (isLogin && username) {
      getUserComposition().then((res) => {
        console.log(res.data);
        setWritingCount(
          res.data.data.compositionList.filter(
            (item: Composition) => item.status === 4,
          ).length,
        );
      });
      getFollow(username).then((res) => {
        console.log(res.data);
        setFollowCount(res.data.data.followList.length);
      });
      getFollower(username).then((res) => {
        console.log(res.data);
        setFansCount(res.data.data.followList.length);
      });
    }
  }, [isLogin, username]);
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
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
        <Icon
          name="envelope"
          type="evilicon"
          size={32}
          color={accentIconsColor}
          onPress={() => Actions.jump('SystemMessage')}
        />
      </View>
      <View style={styles.statisticView}>
        <View style={styles.statisticItem}>
          <Text style={styles.text}>{`${followCount}个`}</Text>
          <Text style={styles.text}>关注</Text>
        </View>
        <View style={styles.statisticItem}>
          <Text style={styles.text}>{`${fansCount}个`}</Text>
          <Text style={styles.text}>粉丝</Text>
        </View>
        <View style={styles.statisticItem}>
          <Text style={styles.text}>{`${writingCount}篇`}</Text>
          <Text style={styles.text}>累计创作</Text>
        </View>
      </View>
    </View>
  );
};

export default UserInfoCard;
