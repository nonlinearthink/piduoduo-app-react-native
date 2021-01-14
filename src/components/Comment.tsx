import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import moment from 'moment';

interface Props {
  user: string;
  time: number;
  content: string;
}

const Comment = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Avatar
          size="small"
          rounded
          source={require('../assets/images/avatar.png')}
        />
        <View style={styles.contentContainer}>
          <Text>{props.user}</Text>
          <Text>{props.content}</Text>
        </View>
      </View>
      <Text>{moment(props.time).format('YYYY-MM-DD')}</Text>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  contentContainer: {
    marginLeft: 8,
  },
});
