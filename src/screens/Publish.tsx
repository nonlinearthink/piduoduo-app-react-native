import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {Header, Icon, Input, ButtonGroup, Button} from 'react-native-elements';
import {Textarea, Container, Content} from 'native-base';
import {
  accentIconsColor,
  accentTextColor,
  primaryColor,
  secondaryTextColor,
} from '../theme/colors';
import {Actions} from 'react-native-router-flux';
import Modal from 'react-native-modalbox';
import {ScaledSheet} from 'react-native-size-matters';
import {updateUserComposition} from '../apis';
import Toast from 'react-native-root-toast';

interface Props {
  compositionId: number;
  title?: string;
  compositionBody: string;
  status?: number;
  visibility?: number;
  score?: number;
  description?: string;
  updateCallback?: Function;
}

const Publish = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [row, setRow] = useState(1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  //   const [content, setContent] = useState('');
  const [lastHeight, setLastHeight] = useState(0);
  const [submitConfirm, setSubmitConfirm] = useState(false);
  const buttons = ['私密', '仅粉丝可见', '公开'];
  useEffect(() => {
    props.title && setTitle(props.title);
    props.description && setDescription(props.description);
    props.visibility && setSelectedIndex(props.visibility - 1);
    // props.compositionBody && setContent(props.compositionBody);
  }, [props]);
  return (
    <Container>
      <Header
        centerComponent={{
          text: '编辑信息',
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
          <Icon
            name="checkbox-outline"
            type="ionicon"
            color={accentIconsColor}
            onPress={() => {
              if (title === '') {
                Toast.show('标题不能为空', {
                  position: Toast.positions.CENTER,
                  animation: true,
                  hideOnPress: true,
                });
                return;
              }
              setSubmitConfirm(true);
            }}
          />
        }
        backgroundColor={primaryColor}
      />
      <Content padder>
        <Input
          placeholder="请输入发布标题"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.text}>设置可见性</Text>
        <ButtonGroup
          onPress={(index) => setSelectedIndex(index)}
          selectedIndex={selectedIndex}
          buttons={buttons}
        />
        <Text style={[styles.text, styles.descriptionText]}>说明</Text>
        <Textarea
          rowSpan={row}
          placeholder="输入发布说明"
          value={description}
          onChangeText={(text) => {
            setDescription(text);
          }}
          onContentSizeChange={(e) => {
            console.log(
              `change ${lastHeight} to ${e.nativeEvent.contentSize.height}`,
            );
            if (e.nativeEvent.contentSize.height > lastHeight) {
              setRow(row + 1);
            } else {
              setRow(row - 1);
            }
            setLastHeight(e.nativeEvent.contentSize.height);
          }}
        />
      </Content>
      <Modal
        isOpen={submitConfirm}
        backdropPressToClose
        backButtonClose
        onClosed={() => setSubmitConfirm(false)}
        style={styles.modal}>
        <Text style={styles.modalTips}>确认提交</Text>
        <View style={styles.modalBottom}>
          <Button
            title="提交"
            type="clear"
            onPress={() => {
              updateUserComposition({
                compositionId: props.compositionId,
                title: title,
                visibility: selectedIndex + 1,
                description: description,
                status: 4,
              })
                .then((res) => {
                  console.log(res);
                  props.updateCallback && props.updateCallback();
                  Actions.pop();
                })
                .catch((err) => {
                  console.error(err);
                });
            }}
          />
        </View>
      </Modal>
    </Container>
  );
};

export default Publish;

const styles = ScaledSheet.create({
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    color: secondaryTextColor,
  },
  descriptionText: {
    marginTop: 14,
  },
  modal: {
    height: '100@vs',
    width: '250@s',
    borderRadius: '8@s',
    justifyContent: 'space-between',
  },
  modalBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalTips: {
    textAlign: 'center',
    marginVertical: '16@vs',
    fontSize: '14@s',
  },
});
