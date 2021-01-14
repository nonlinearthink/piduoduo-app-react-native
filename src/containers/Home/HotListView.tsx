// react native
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
// react native extensions
import {Divider} from 'react-native-elements';
// my components
import HotCard from '../../components/HotCard';
// apis
import {getHotList} from '../../apis';
// types
import {HotComposition} from '../../apis/types';
import {borderColor} from '../../theme/colors';
import {Actions} from 'react-native-router-flux';

const ArticleListView = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [compositionList, setCompositionList] = useState<HotComposition[]>([]);
  useEffect(() => {
    if (refreshing) {
      getHotList()
        .then((res) => {
          console.log(res.data);
          setCompositionList(res.data.data.hotCardModelList);
          setRefreshing(false);
        })
        .catch((err) => {
          console.error(err);
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
              Actions.jump('Composition', item);
            }}
            rank={index + 1}
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

export default ArticleListView;
