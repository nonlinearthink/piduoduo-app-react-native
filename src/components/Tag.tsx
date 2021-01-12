import React from 'react';
import {StyleSheet, Text, StyleProp, TextStyle} from 'react-native';

interface Props {
  text: string;
  style: StyleProp<TextStyle>;
}

const Tag = (props: Props) => {
  return <Text style={[props.style, styles.text]}>{props.text}</Text>;
};

export default Tag;

const styles = StyleSheet.create({
  text: {
    borderWidth: 1,
    borderRadius: 4,
  },
});
