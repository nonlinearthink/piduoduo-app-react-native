// react native
import React from 'react';
import {
  Text,
  View,
  GestureResponderEvent,
  TouchableHighlight,
} from 'react-native';
// react native extensions
import moment from 'moment';
import {Icon} from 'react-native-elements';
import {ScaledSheet} from 'react-native-size-matters';
// styles
import {
  secondaryAccentColor,
  defaultBackgroundColor,
  globalAppBackgroundColor,
  secondaryTextColor,
  primaryTextColor,
} from '../theme/colors';

interface Props {
  brief: string;
  time: number;
  status: number;
  score: number;
  visibility?: number;
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;
  onDelete?: (event: GestureResponderEvent) => void;
}

const CompositionCard = (props: Props) => {
  const statusColor = ['#4CAF50', '#F44336', '#448AFF', '#FF5722'];
  const statusText = ['草稿', '评价中', '评价完成', '已发布'];
  const visibilityColor = ['#607D8B', '#9C27B0', '#00BCD4'];
  const visibilityText = ['私密', '仅关注可见', '公开'];
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View style={styles.container}>
        {props.title ? (
          <Text style={styles.title}>{props.title}</Text>
        ) : undefined}
        <View style={styles.header}>
          <Text style={styles.time}>
            {moment(props.time).format('YYYY-MM-DD')}
          </Text>
          <Text
            style={[
              styles.tag,
              {
                color: statusColor[props.status - 1],
                borderColor: statusColor[props.status - 1],
              },
            ]}>
            {statusText[props.status - 1]}
          </Text>
          {props.visibility ? (
            <Text
              style={[
                styles.tag,
                {
                  color: visibilityColor[props.visibility - 1],
                  borderColor: visibilityColor[props.visibility - 1],
                },
              ]}>
              {visibilityText[props.visibility - 1]}
            </Text>
          ) : undefined}
        </View>
        <Text numberOfLines={3} style={styles.brief}>
          {props.brief}
        </Text>
        <View style={styles.bottom}>
          <Text style={{color: secondaryAccentColor}}>
            {props.score ? `${props.score}/100` : '待评分'}
          </Text>
          <Icon
            name="delete"
            type="antdesign"
            color={secondaryAccentColor}
            onPress={props.onDelete}
            size={18}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CompositionCard;

const styles = ScaledSheet.create({
  container: {
    padding: 16,
    backgroundColor: defaultBackgroundColor,
  },
  header: {
    flexDirection: 'row',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperContainer: {
    backgroundColor: globalAppBackgroundColor,
    color: defaultBackgroundColor,
  },
  time: {
    color: secondaryTextColor,
  },
  brief: {
    color: primaryTextColor,
    fontSize: 16,
    marginVertical: 8,
  },
  title: {
    fontWeight: '900',
    fontSize: '16@s',
    color: primaryTextColor,
    marginBottom: 8,
  },
  tag: {
    borderWidth: 1,
    paddingVertical: 1,
    paddingHorizontal: 2,
    borderRadius: 4,
    marginLeft: 8,
  },
});
