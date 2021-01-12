// react native
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
// react native extensions
// import {Actions} from 'react-native-router-flux';
// my components
import HotCard from '../../components/HotCard';
// apis
import {getHotList} from '../../apis';
// types
import {HotComposition} from '../../apis/types';

const ArticleListView = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [compositionList, setCompositionList] = useState<HotComposition[]>([]);
  useEffect(() => {
    if (refreshing) {
      getHotList().then((res) => {
        console.log(res.data);
        setCompositionList(res.data.data.hotCardModelList);
        setRefreshing(false);
      });
    }
  }, [refreshing]);
  return (
    <FlatList
      data={compositionList}
      renderItem={({item, index}) => {
        return (
          <HotCard
            title={item.title}
            brief={item.compositionBody}
            hot={item.hotCount}
            user={item.nickname}
            onPress={() => {
              //   Actions.jump('Article', item);
              console.log('mock');
            }}
            rank={index + 1}
          />
        );
      }}
      keyExtractor={(item) => item.compositionId.toString()}
      refreshing={refreshing}
      onRefresh={() => setRefreshing(true)}
    />
  );
};

export default ArticleListView;
