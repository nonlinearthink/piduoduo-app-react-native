// react native
import React from 'react';
import {Text, Image, ScrollView, Dimensions, View} from 'react-native';
// react native extensions
import {ScaledSheet} from 'react-native-size-matters';
import moment from 'moment';
// types
import {Article} from '../apis/types';
// colors
import {primaryTextColor, secondaryTextColor} from '../theme/colors';

const screen = Dimensions.get('window');

const ArticlePage = (props: Article) => {
  return (
    <ScrollView>
      <Image
        source={require('../assets/images/background/background-6.png')}
        style={styles.image}
      />
      <View style={styles.body}>
        <Text style={styles.title}>{props.articleTitle}</Text>
        <Text style={styles.time}>
          {moment(props.time).format('YYYY-MM-DD HH:mm:ss')}
        </Text>
        <Text>{props.articleBody}</Text>
      </View>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  body: {
    padding: '16@s',
  },
  image: {
    width: screen.width,
    height: '200@s',
  },
  title: {
    fontWeight: '900',
    fontSize: '20@s',
    color: '#000000',
  },
  time: {
    color: secondaryTextColor,
    marginVertical: '8@s',
  },
  content: {
    fontSize: '14@s',
    color: primaryTextColor,
  },
});

export default ArticlePage;
