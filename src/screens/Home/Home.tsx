// react native
import React from 'react';
// react native extensions
import {ScrollView, RefreshControl} from 'react-native';
import {
  Container,
  Tab,
  Tabs,
  TabHeading,
  Text,
  StyleProvider,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
// my components
import ArticleCard from '../../components/ArticleCard';
// styles
import styles from './Home.style';
import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/variables';
// apis
import {getArticleList} from '../../apis';

interface Article {
  articleId: number;
  articleTitle: string;
  articleBody: string;
  time: number;
}

interface State {
  loadingArticle: boolean;
  articleList: Article[];
}

export default class Home extends React.Component<{}, State> {
  articleList: Article[] = [];
  constructor(props = {}) {
    super(props);
    this.state = {
      loadingArticle: true,
      articleList: [],
    };
  }
  loadArticleList = () => {
    getArticleList()
      .then((res) => {
        console.log(res.data);
        this.setState({
          loadingArticle: false,
          articleList: res.data.data.articleModelList.sort(
            (a: Article, b: Article) => b.articleId - a.articleId,
          ),
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  componentDidMount() {
    this.loadArticleList();
  }
  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        {/* @ts-ignore */}
        <StyleProvider style={getTheme(platform)}>
          <Container>
            <Tabs
              tabBarUnderlineStyle={styles.tabBarUnderline}
              tabContainerStyle={styles.tabContainer}>
              <Tab
                heading={
                  <TabHeading>
                    <Text>推荐</Text>
                  </TabHeading>
                }>
                <ScrollView
                  refreshControl={
                    <RefreshControl
                      refreshing={this.state.loadingArticle}
                      onRefresh={this.loadArticleList}
                    />
                  }>
                  {(() => {
                    if (this.state.loadingArticle) {
                    } else {
                      return this.state.articleList.map((item) => {
                        return (
                          <ArticleCard
                            title={item.articleTitle}
                            brief={item.articleBody}
                          />
                        );
                      });
                    }
                  })()}
                </ScrollView>
              </Tab>
              <Tab
                heading={
                  <TabHeading>
                    <Text>关注</Text>
                  </TabHeading>
                }>
                <Text>{'ok'}</Text>
              </Tab>
              <Tab
                heading={
                  <TabHeading>
                    <Text>热榜</Text>
                  </TabHeading>
                }>
                <Text>{'ok'}</Text>
              </Tab>
              <Tab
                heading={
                  <TabHeading>
                    <Text>新鲜</Text>
                  </TabHeading>
                }>
                <Text>{'ok'}</Text>
              </Tab>
            </Tabs>
          </Container>
        </StyleProvider>
      </SafeAreaView>
    );
  }
}
