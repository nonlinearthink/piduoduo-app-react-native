// react native
import React from 'react';
import {Text, Image, ScrollView, Dimensions, View} from 'react-native';
// react native extensions
import {ScaledSheet} from 'react-native-size-matters';
import moment from 'moment';
import {Header, Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
// types
import {Article} from '../apis/types';
// colors
import {
  primaryTextColor,
  secondaryTextColor,
  accentTextColor,
  primaryColor,
  accentIconsColor,
} from '../theme/colors';

const screen = Dimensions.get('window');

const ArticlePage = (props: Article) => {
  return (
    <View>
      <Header
        centerComponent={{
          text: '精选文章',
          style: {color: accentTextColor, fontSize: 16},
        }}
        leftComponent={
          <Icon
            name="left"
            type="antdesign"
            color={accentIconsColor}
            onPress={() => Actions.pop()}
          />
        }
        backgroundColor={primaryColor}
      />
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
    </View>
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
  safeAreaContainer: {
    flex: 1,
  },
});

export default ArticlePage;
