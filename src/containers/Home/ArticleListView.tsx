// react native
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
// react native extensions
import {Actions} from 'react-native-router-flux';
import {Divider} from 'react-native-elements';
// my components
import ArticleCard from '../../components/ArticleCard';
// apis
import {getArticleList} from '../../apis';
// styles
import {borderColor} from '../../theme/colors';
// types
import {Article} from '../../apis/types';

const ArticleListView = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [articleList, setArticleList] = useState<Article[]>([]);
  useEffect(() => {
    if (refreshing) {
      getArticleList()
        .then((res) => {
          console.log(res.data);
          setArticleList(
            res.data.data.articleModelList.sort(
              (a: Article, b: Article) => b.articleId - a.articleId,
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
      data={articleList}
      renderItem={({item}) => {
        return (
          <ArticleCard
            title={item.articleTitle}
            brief={item.articleBody}
            onPress={() => {
              Actions.jump('Article', item);
            }}
          />
        );
      }}
      keyExtractor={(item) => item.articleId.toString()}
      ItemSeparatorComponent={() => (
        <Divider style={{backgroundColor: borderColor}} />
      )}
      refreshing={refreshing}
      onRefresh={() => setRefreshing(true)}
    />
  );
};

export default ArticleListView;
