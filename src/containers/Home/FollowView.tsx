import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, FlatList, Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import {StoreState} from '../../types';
import {getFollowCompositionList, getFollowList} from '../../apis';
import {Follow, FollowComposition} from '../../apis/types';
import {Avatar, Divider} from 'react-native-elements';
import FollowCompositionCard from '../../components/FollowCompositionCard';
import {borderColor, globalAppBackgroundColor} from '../../theme/colors';

const screen = Dimensions.get('window');

interface Props {
  swipeLockController: (lock: boolean) => void;
}

const FollowView = (props: Props) => {
  const [refreshing, setRefreshing] = useState(true);
  const isLogin = useSelector((state: StoreState) => state.session.isLogin);
  const username = useSelector((state: StoreState) => state.user.username);
  const [followList, setFollowList] = useState<Follow[]>([]);
  const [followCompositionList, setFollowCompositionList] = useState<
    FollowComposition[]
  >([]);
  useEffect(() => {
    if (username && refreshing) {
      getFollowList(username)
        .then((res) => {
          console.log(res.data);
          setFollowList(res.data.data.followList);
        })
        .catch((err) => {
          console.error(err);
          setRefreshing(false);
        });
      getFollowCompositionList()
        .then((res) => {
          console.log(res.data);
          setFollowCompositionList(
            res.data.data.followCardModelList.sort(
              (a: FollowComposition, b: FollowComposition) =>
                b.releaseTime - a.releaseTime,
            ),
          );
          setRefreshing(false);
        })
        .catch((err) => {
          console.error(err);
          setRefreshing(false);
        });
    } else {
      setRefreshing(false);
    }
  }, [isLogin, username, refreshing]);
  return (
    <FlatList
      data={followCompositionList}
      ListHeaderComponent={
        <ScrollView
          horizontal
          onTouchStart={() => props.swipeLockController(true)}
          onTouchCancel={() => props.swipeLockController(false)}
          contentContainerStyle={styles.followList}>
          {(() => {
            return followList.map((item) => (
              <View style={styles.followItem}>
                <Avatar
                  size="medium"
                  rounded
                  source={require('../../assets/images/avatar.png')}
                />
                <Text numberOfLines={1} style={styles.nickname}>
                  {item.nickname}
                </Text>
              </View>
            ));
          })()}
        </ScrollView>
      }
      renderItem={({item}) => {
        return (
          <FollowCompositionCard
            title={item.title}
            brief={item.compositionBody}
            user={item.nickname}
            time={item.releaseTime}
            score={item.score}
            support={item.supportCount}
            comment={item.commentCount}
            onPress={() => {
              //   Actions.jump('Article', item);
              console.log('mock');
            }}
          />
        );
      }}
      keyExtractor={(item) => item.compositionId.toString()}
      refreshing={refreshing}
      ItemSeparatorComponent={() => (
        <Divider style={{backgroundColor: borderColor}} />
      )}
      onRefresh={() => setRefreshing(true)}
    />
  );
};

export default FollowView;

const styles = ScaledSheet.create({
  followItem: {
    margin: '8@s',
  },
  followList: {
    alignItems: 'center',
    backgroundColor: globalAppBackgroundColor,
    width: screen.width,
  },
  nickname: {
    textAlign: 'center',
    width: 50,
  },
});
