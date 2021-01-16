import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {secondaryTextColor} from '../theme/colors';
import moment from 'moment';

interface Props {
  content: string;
  time: number;
}

const SystemMessageCard = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>{props.content}</Text>
      <Text style={styles.bottom}>
        {moment(props.time).format('YYYY-MM-DD HH:mm:ss')}
      </Text>
    </View>
  );
};

export default SystemMessageCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  bottom: {
    textAlign: 'right',
    color: secondaryTextColor,
  },
});
