// react native
import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  GestureResponderEvent,
  Dimensions,
} from 'react-native';
// react native extensions
import {ScaledSheet} from 'react-native-size-matters';
// colors
import {
  defaultBackgroundColor,
  primaryTextColor,
  secondaryTextColor,
} from '../theme/colors';
import {Avatar} from 'react-native-elements';
import moment from 'moment';

const screen = Dimensions.get('window');

interface Props {
  user?: string;
  time?: number;
  title?: string;
  brief?: string;
  support?: number;
  comment?: number;
  score?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

const HotCard = (props: Props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Avatar
            size="medium"
            rounded
            source={require('../assets/images/avatar.png')}
            containerStyle={styles.avatar}
          />
          <View style={styles.headerInner}>
            <View>
              <Text style={styles.user}>{props.user}</Text>
              <Text style={styles.time}>
                {moment(props.time).format('YYYY-MM-DD HH:mm:ss')}
              </Text>
            </View>
            <Text style={styles.score}>{`${props.score}分`}</Text>
          </View>
        </View>
        <Text style={styles.title}>{props.title}</Text>
        <Text numberOfLines={3} style={styles.brief}>
          {props.brief}
        </Text>
        <View style={styles.bottom}>
          <Text style={styles.support}>{`点赞数 ${props.support}`}</Text>
          <Text style={styles.comment}>{`评论数 ${props.comment}`}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: defaultBackgroundColor,
    width: screen.width,
  },
  avatar: {
    marginRight: 8,
  },
  user: {
    color: primaryTextColor,
    fontSize: '15@s',
  },
  time: {
    color: secondaryTextColor,
  },
  score: {
    color: '#FF9800',
    fontSize: '20@s',
  },
  header: {
    flexDirection: 'row',
  },
  headerInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screen.width - 90,
  },
  brief: {
    color: primaryTextColor,
    marginBottom: 4,
  },
  title: {
    fontSize: '16@s',
    color: primaryTextColor,
    fontWeight: '900',
    marginVertical: 4,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  support: {
    color: secondaryTextColor,
    marginRight: '20@s',
  },
  comment: {
    color: secondaryTextColor,
  },
});

export default HotCard;
