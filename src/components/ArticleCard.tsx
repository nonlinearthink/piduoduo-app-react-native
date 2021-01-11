import React from 'react';
import {
  Text,
  View,
  Image,
  GestureResponderEvent,
  TouchableHighlight,
} from 'react-native';
import styles from './styles/ArticleCard.style';

interface Props {
  title?: string;
  brief?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const ArticleCard = (props: Props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.brief} numberOfLines={3}>
          {props.brief}
        </Text>
        <Image
          source={require('../assets/images/background/background-6.png')}
          style={styles.image}
        />
      </View>
    </TouchableHighlight>
  );
};

export default ArticleCard;
