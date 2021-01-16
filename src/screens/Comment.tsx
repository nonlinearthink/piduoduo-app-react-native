import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import {accentTextColor, primaryColor, accentIconsColor} from '../theme/colors';
import LinkedCard from '../components/LinkedCard';
import {getCommentList} from '../apis';
import {CommentModel} from '../apis/types';
import {useSelector} from 'react-redux';
import {StoreState} from '../types';
import {Container} from 'native-base';

const Comment = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [commentList, setCommentList] = useState<CommentModel[]>([]);
  const isLogin = useSelector((state: StoreState) => state.session.isLogin);
  const username = useSelector((state: StoreState) => state.user.username);
  useEffect(() => {
    if (!isLogin) {
      setCommentList([]);
      setRefreshing(false);
      return;
    }
    if (refreshing) {
      getCommentList()
        .then((res) => {
          console.log(res.data);
          setCommentList(
            res.data.data.commentViewModelList
              .sort((a: CommentModel, b: CommentModel) => b.time - a.time)
              .filter((item: CommentModel) => item.username !== username),
          );
          setRefreshing(false);
        })
        .catch((err) => {
          console.error(err);
          setRefreshing(false);
        });
    }
  }, [refreshing, isLogin, username]);
  return (
    <Container>
      <Header
        centerComponent={{
          text: '回复我的',
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
      <FlatList
        data={commentList}
        renderItem={({item}) => {
          return (
            <LinkedCard
              type={0}
              text={item.commentBody}
              title={item.title}
              time={item.time}
              nickname={item.nickname}
              onPress={() => Actions.jump('Composition', item)}
            />
          );
        }}
        keyExtractor={(item) => item.commentId.toString()}
        refreshing={refreshing}
        onRefresh={() => setRefreshing(true)}
      />
    </Container>
  );
};

export default Comment;
