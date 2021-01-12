// react native
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
// react native extensions
// import {Actions} from 'react-native-router-flux';
import {Divider} from 'react-native-elements';
// my components
import FreshCard from '../../components/FreshCard';
// apis
import {getFreshList} from '../../apis';
// types
import {FreshComposition} from '../../apis/types';
import {borderColor} from '../../theme/colors';

const ArticleListView = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [compositionList, setCompositionList] = useState<FreshComposition[]>(
    [],
  );
  useEffect(() => {
    if (refreshing) {
      getFreshList()
        .then((res) => {
          console.log(res.data);
          setCompositionList(
            res.data.data.newCardModelList.sort(
              (a: FreshComposition, b: FreshComposition) =>
                b.releaseTime - a.releaseTime,
            ),
          );
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
      renderItem={({item}) => {
        return (
          <FreshCard
            title={item.title}
            brief={item.compositionBody}
            user={item.nickname}
            read={item.historyCount}
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

export default ArticleListView;
