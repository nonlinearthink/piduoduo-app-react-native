import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableHighlight,
} from 'react-native';
import {Header, Icon, ButtonGroup} from 'react-native-elements';
import {
  accentTextColor,
  primaryColor,
  accentIconsColor,
  defaultBackgroundColor,
} from '../theme/colors';
import {Actions} from 'react-native-router-flux';
import {addFeedback} from '../apis/user';
import Toast from 'react-native-root-toast';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttons = ['BUG反馈', '改进意见'];
  return (
    <View>
      <Header
        centerComponent={{
          text: '反馈',
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
        rightComponent={
          <TouchableHighlight onPress={() => {}}>
            <Text
              style={{color: accentTextColor}}
              onPress={() => {
                addFeedback(feedback, selectedIndex)
                  .then((res) => {
                    console.log(res);
                    Toast.show('反馈成功', {
                      position: Toast.positions.CENTER,
                      animation: true,
                      hideOnPress: true,
                    });
                    setFeedback('');
                    Actions.pop();
                  })
                  .catch((err) => {
                    console.error(err);
                    Toast.show(err.response.data.msg, {
                      position: Toast.positions.CENTER,
                      animation: true,
                      hideOnPress: true,
                    });
                  });
              }}>
              提交
            </Text>
          </TouchableHighlight>
        }
        backgroundColor={primaryColor}
      />
      <View style={styles.container}>
        <TextInput
          value={feedback}
          placeholder="请描述你的问题，我们会尽快处理"
          onChangeText={(text) => {
            setFeedback(text);
          }}
          numberOfLines={3}
          multiline
        />
        <Text style={styles.title}>选择反馈类型</Text>
        <ButtonGroup
          onPress={(index) => setSelectedIndex(index)}
          selectedIndex={selectedIndex}
          buttons={buttons}
        />
      </View>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  title: {
    margin: 8,
  },
  container: {
    paddingHorizontal: 16,
    backgroundColor: defaultBackgroundColor,
  },
});
