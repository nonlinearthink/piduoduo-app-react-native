import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  TouchableHighlight,
} from 'react-native';
import moment from 'moment';
import {Avatar} from 'react-native-elements';
import {
  defaultBackgroundColor,
  divierColor,
  globalAppBackgroundColor,
  secondaryTextColor,
} from '../theme/colors';

interface Props {
  title: string;
  brief: string;
  time: number;
  username: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const HistoryCard = (props: Props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text numberOfLines={3}>{props.brief}</Text>
        <View style={styles.bottom}>
          <View style={styles.row}>
            <Avatar
              size="small"
              rounded
              source={require('../assets/images/avatar.png')}
              containerStyle={styles.avatar}
            />
            <Text style={styles.bottomText}>{props.username}</Text>
          </View>
          <Text style={styles.bottomText}>
            {moment(props.time).format('YYYY-MM-DD HH:mm:ss')}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  bottomText: {color: secondaryTextColor},
  brief: {
    paddingVertical: 4,
  },
  title: {
    fontSize: 18,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: defaultBackgroundColor,
    borderBottomWidth: 2,
    borderBottomColor: globalAppBackgroundColor,
  },
});
