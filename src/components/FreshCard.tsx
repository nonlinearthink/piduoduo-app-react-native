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

const screen = Dimensions.get('window');

interface Props {
  title?: string;
  brief?: string;
  user?: string;
  read?: number;
  comment?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

const HotCard = (props: Props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text numberOfLines={3} style={styles.brief}>
          {props.brief}
        </Text>
        <View style={styles.bottom}>
          <Text style={styles.user}>{props.user}</Text>
          <Text style={styles.status}>
            {`${props.read ? props.read : 0}阅读 · ${
              props.comment ? props.comment : 0
            }评论`}
          </Text>
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
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screen.width - 32,
  },
  brief: {
    color: primaryTextColor,
    marginVertical: 8,
  },
  user: {
    color: secondaryTextColor,
  },
  status: {
    color: secondaryTextColor,
  },
  title: {
    fontSize: '16@s',
    color: primaryTextColor,
    fontWeight: '900',
  },
});

export default HotCard;
