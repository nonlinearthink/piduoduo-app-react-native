import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {
  Header,
  Icon,
  Avatar,
  Button,
  Input,
  Divider,
} from 'react-native-elements';
import {
  accentIconsColor,
  accentTextColor,
  borderColor,
  darkPrimaryColor,
  defaultBackgroundColor,
  primaryColor,
  primaryTextColor,
  secondaryAccentColor,
  secondaryTextColor,
} from '../theme/colors';
import {Actions} from 'react-native-router-flux';
import {useSelector} from 'react-redux';
import {
  getComposition,
  addFavorite,
  addSupport,
  deleteFavorite,
  deleteSupport,
  addComment,
} from '../apis';
import moment from 'moment';
import {Container, Footer, Content} from 'native-base';
import Comment from '../components/Comment';
import {StoreState} from '../types';
import Toast from 'react-native-root-toast';

interface Props {
  compositionId: number;
}

interface CompositionMessage {
  username?: string;
  nickname?: string;
  title?: string;
  compositionBody?: string;
  description?: string;
  releaseTime?: number;
  score?: number;
  favoriteCount: number;
  supportCount: number;
  commentCount: number;
}

interface Comment {
  commentId: string;
  username: string;
  commentBody: string;
  time: number;
}

const Composition = (props: Props) => {
  const [message, setMessage] = useState<CompositionMessage>({
    favoriteCount: 0,
    supportCount: 0,
    commentCount: 0,
  });
  const [support, setSupport] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState<Comment[]>([]);
  const username = useSelector((state: StoreState) => state.user.username);
  // const
  useEffect(() => {
    getComposition(props.compositionId)
      .then((res) => {
        console.log(res.data);
        setMessage(res.data.data.compositionCountModel);
        setSupport(res.data.data.isSupport);
        setFavorite(res.data.data.isFavorite);
        setCommentList(res.data.data.commentEntityList);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.compositionId]);
  return (
    <Container>
      <Header
        centerComponent={{
          text: '浏览',
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
      <Content style={styles.container}>
        <Text style={styles.title}>{message.title}</Text>
        <Text style={styles.time}>
          {moment(message.releaseTime).format('YYYY-MM-DD HH:mm:ss')}
        </Text>
        <View style={styles.userContainer}>
          <Avatar
            size="large"
            rounded
            source={require('../assets/images/avatar.png')}
          />
          <View style={styles.userInfoContainer}>
            <Text style={styles.username}>{message.nickname}</Text>
            <View style={styles.userButtonContainer}>
              <Button title="私信" type="outline" buttonStyle={styles.button} />
              <Button
                title="关注"
                type="outline"
                titleStyle={{color: secondaryAccentColor}}
                buttonStyle={[
                  {borderColor: secondaryAccentColor},
                  styles.button,
                ]}
              />
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.itemTitle}>作文</Text>
          <Text style={styles.body}>{message.compositionBody}</Text>
        </View>
        <View>
          <Text style={styles.itemTitle}>说明</Text>
          <Text style={styles.body}>{message.description}</Text>
        </View>
        <View>
          <Text style={styles.itemTitle}>评论列表</Text>
          <FlatList
            data={commentList}
            renderItem={({item}) => {
              return (
                <Comment
                  user={item.username}
                  time={item.time}
                  content={item.commentBody}
                />
              );
            }}
            keyExtractor={(item) => item.commentId.toString()}
            ItemSeparatorComponent={() => (
              <Divider style={{backgroundColor: borderColor}} />
            )}
          />
        </View>
      </Content>
      <Footer style={styles.footer}>
        <Input
          placeholder="输入评论"
          value={comment}
          onChangeText={(text) => setComment(text)}
          rightIcon={
            <View style={styles.footerButtonContainer}>
              <Button
                type="clear"
                icon={
                  <Icon name="send-sharp" type="ionicon" color={primaryColor} />
                }
                onPress={() => {
                  if (comment === '') {
                    Toast.show('文本不能为空', {
                      position: Toast.positions.CENTER,
                      animation: true,
                      hideOnPress: true,
                    });
                    return;
                  }
                  addComment(props.compositionId, comment).then((res) => {
                    console.log(res.data);
                    Toast.show('添加成功', {
                      position: Toast.positions.CENTER,
                      animation: true,
                      hideOnPress: true,
                    });
                    setCommentList([
                      ...commentList,
                      {
                        commentId: res.data.data.commentId,
                        commentBody: comment,
                        time: new Date().getTime(),
                        username: username ? username : '',
                      },
                    ]);
                  });
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  favorite
                    ? deleteFavorite(props.compositionId).then((res) => {
                        console.log(res);
                        setFavorite(false);
                        setMessage({
                          ...message,
                          favoriteCount: message.favoriteCount - 1,
                        });
                      })
                    : addFavorite(props.compositionId).then((res) => {
                        console.log(res);
                        setFavorite(true);
                        setMessage({
                          ...message,
                          favoriteCount: message.favoriteCount + 1,
                        });
                      });
                }}>
                <View style={styles.footerButtonItem}>
                  <Icon
                    name="staro"
                    type="antdesign"
                    color={favorite ? secondaryAccentColor : undefined}
                  />
                  <Text
                    style={[
                      styles.footerButtonText,
                      {
                        color: favorite
                          ? secondaryAccentColor
                          : primaryTextColor,
                      },
                    ]}>
                    {message.favoriteCount}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  support
                    ? deleteSupport(props.compositionId).then((res) => {
                        console.log(res);
                        setSupport(false);
                        setMessage({
                          ...message,
                          supportCount: message.supportCount - 1,
                        });
                      })
                    : addSupport(props.compositionId).then((res) => {
                        console.log(res);
                        setSupport(true);
                        setMessage({
                          ...message,
                          supportCount: message.supportCount + 1,
                        });
                      });
                }}>
                <View style={styles.footerButtonItem}>
                  <Icon
                    name="like2"
                    type="antdesign"
                    color={support ? secondaryAccentColor : undefined}
                  />
                  <Text
                    style={[
                      styles.footerButtonText,
                      {
                        color: support
                          ? secondaryAccentColor
                          : primaryTextColor,
                      },
                    ]}>
                    {message.supportCount}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          }
        />
      </Footer>
    </Container>
  );
};

export default Composition;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
  },
  time: {
    color: secondaryTextColor,
    marginVertical: 10,
  },
  userContainer: {
    flexDirection: 'row',
  },
  userInfoContainer: {
    marginLeft: 16,
  },
  userButtonContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  button: {
    width: 80,
    height: 35,
    marginRight: 8,
  },
  username: {
    fontSize: 18,
  },
  body: {
    fontSize: 15,
  },
  itemTitle: {
    color: darkPrimaryColor,
    fontSize: 18,
    marginTop: 16,
  },
  footer: {
    backgroundColor: defaultBackgroundColor,
    flexDirection: 'row',
  },
  footerButtonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  footerButtonItem: {
    paddingHorizontal: 16,
  },
  footerButtonText: {
    textAlign: 'center',
  },
});
