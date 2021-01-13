import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Header, Icon, Button} from 'react-native-elements';
import {
  accentIconsColor,
  accentTextColor,
  primaryColor,
  secondaryTextColor,
} from '../theme/colors';
import {Actions} from 'react-native-router-flux';
import {Textarea, Container, Content} from 'native-base';
import Modal from 'react-native-modalbox';
import {ScaledSheet} from 'react-native-size-matters';
import Toast from 'react-native-root-toast';
import {addUserComposition, updateUserComposition} from '../apis';

interface Props {
  compositionId?: number;
  compositionBody?: string;
  status?: number;
  updateCallback?: Function;
}

const Write = (props: Props) => {
  const [wordCount, setWordCount] = useState(0);
  const [editing, setEditing] = useState(false);
  const [row, setRow] = useState(1);
  const [lastHeight, setLastHeight] = useState(0);
  const [submitConfirm, setSubmitConfirm] = useState(false);
  const [content, setContent] = useState('');
  useEffect(() => {
    props.compositionBody && setContent(props.compositionBody);
  }, [props]);
  useEffect(() => {
    setWordCount(() => {
      let result = content.match(/\b\w+\b/gm);
      return result ? result.length : 0;
    });
  }, [content]);
  return (
    <Container>
      <Header
        centerComponent={{
          text: '写作',
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
              if (content === '') {
                Toast.show('文本不能为空', {
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
      <View style={styles.header}>
        <Text>单词统计: {wordCount} words</Text>
        {editing ? <Text style={styles.editing}>编辑中</Text> : undefined}
      </View>
      <Content padder>
        <Textarea
          rowSpan={row}
          placeholder="输入作文"
          value={content}
          onFocus={() => setEditing(true)}
          onBlur={() => setEditing(false)}
          onChangeText={(text) => {
            setContent(text);
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
          autoCapitalize="sentences"
        />
      </Content>
      <Modal
        isOpen={submitConfirm}
        backdropPressToClose
        backButtonClose
        onClosed={() => setSubmitConfirm(false)}
        style={styles.modal}>
        <Text style={styles.modalTips}>选择操作类型</Text>
        <View style={styles.modalBottom}>
          <Button
            title="保存草稿"
            type="clear"
            titleStyle={styles.draftButton}
            onPress={() => {
              props.compositionId
                ? updateUserComposition({
                    compositionId: props.compositionId,
                    compositionBody: content,
                    status: 1,
                  })
                    .then((res) => {
                      console.log(res);
                      props.updateCallback && props.updateCallback();
                      Actions.pop();
                    })
                    .catch((err) => {
                      console.error(err);
                    })
                : addUserComposition({compositionBody: content, status: 1})
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
          <Button
            title="评分"
            type="clear"
            titleStyle={styles.scoreButton}
            onPress={() => {
              props.compositionId
                ? updateUserComposition({
                    compositionId: props.compositionId,
                    compositionBody: content,
                    status: 2,
                  })
                    .then((res) => {
                      console.log(res);
                      props.updateCallback && props.updateCallback();
                      Actions.pop();
                    })
                    .catch((err) => {
                      console.error(err);
                    })
                : addUserComposition({compositionBody: content, status: 2})
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

export default Write;

const styles = ScaledSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 9,
  },
  container: {
    padding: 16,
  },
  editing: {
    color: secondaryTextColor,
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
  draftButton: {
    color: '#4CAF50',
  },
  scoreButton: {
    color: '#F44336',
  },
});
