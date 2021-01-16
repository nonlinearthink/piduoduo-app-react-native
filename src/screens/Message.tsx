// react native
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Header} from 'react-native-elements';
import {
  accentTextColor,
  defaultBackgroundColor,
  primaryColor,
} from '../theme/colors';
import {Icon} from 'react-native-elements';
import {ScaledSheet} from 'react-native-size-matters';
import {Actions} from 'react-native-router-flux';

const Message = () => {
  return (
    <View>
      <Header
        centerComponent={{
          text: '消息',
          style: {color: accentTextColor, fontSize: 16},
        }}
        backgroundColor={primaryColor}
      />
      <View style={styles.toolBar}>
        <View>
          <Icon
            name="chatbox-ellipses-outline"
            type="ionicon"
            size={32}
            color={primaryColor}
          />
          <Text>回复我的</Text>
        </View>
        <View>
          <Icon
            name="ios-heart-outline"
            type="ionicon"
            size={32}
            color={primaryColor}
          />
          <Text>新的粉丝</Text>
        </View>
        <View>
          <Icon name="like2" type="antdesign" size={32} color={primaryColor} />
          <Text>收到的赞</Text>
        </View>
        <TouchableHighlight onPress={() => Actions.jump('SystemMessage')}>
          <View style={{backgroundColor: defaultBackgroundColor}}>
            <Icon
              name="volume-high-outline"
              type="ionicon"
              size={32}
              color={primaryColor}
            />
            <Text>系统通知</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Message;

const styles = ScaledSheet.create({
  toolBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: defaultBackgroundColor,
    paddingVertical: '8@s',
  },
});
