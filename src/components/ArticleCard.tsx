// react native
import React from 'react';
import {
  Text,
  View,
  Image,
  GestureResponderEvent,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
// react native extensions
import {ScaledSheet} from 'react-native-size-matters';
// styles
import {
  defaultBackgroundColor,
  primaryTextColor,
  secondaryTextColor,
} from '../theme/colors';

const screen = Dimensions.get('window');

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

const styles = ScaledSheet.create({
  container: {
    padding: 16,
    backgroundColor: defaultBackgroundColor,
  },
  image: {
    width: screen.width - 32,
    height: '200@s',
    borderRadius: '8@s',
  },
  title: {
    fontWeight: '900',
    fontSize: '16@s',
    color: primaryTextColor,
  },
  brief: {
    marginVertical: '4@s',
    fontSize: '14@s',
    color: secondaryTextColor,
  },
});

export default ArticleCard;
