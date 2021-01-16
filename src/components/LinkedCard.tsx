import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  GestureResponderEvent,
} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import moment from 'moment';
import {
  defaultBackgroundColor,
  primaryColor,
  secondaryTextColor,
} from '../theme/colors';

interface Props {
  type: number;
  nickname: string;
  text?: string;
  title: string;
  time: number;
  onPress?: (event: GestureResponderEvent) => void;
}

const LinkedCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <Avatar
        size="medium"
        rounded
        source={require('../assets/images/avatar.png')}
        containerStyle={styles.avatar}
      />
      <View style={styles.otherContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{props.nickname}</Text>
          <Text>{`${props.type === 0 ? '评论' : '点赞'}了你的作文`}</Text>
        </View>
        {props.text ? <Text style={styles.text}>{props.text}</Text> : undefined}
        <TouchableHighlight onPress={props.onPress}>
          <View style={styles.linkContainer}>
            <Icon name="link" type="entypo" color={primaryColor} size={16} />
            <Text>{props.title}</Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.time}>
          {moment(props.time).format('YYYY-MM-DD HH:mm:ss')}
        </Text>
      </View>
    </View>
  );
};

export default LinkedCard;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: defaultBackgroundColor,
    padding: 4,
  },
  otherContainer: {
    flex: 1,
    marginRight: 12,
  },
  name: {
    marginRight: 4,
    fontWeight: '900',
    fontSize: 16,
  },
  text: {
    marginVertical: 2,
  },
  time: {
    textAlign: 'right',
    color: secondaryTextColor,
  },
  linkContainer: {
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  avatar: {
    margin: 12,
  },
});
