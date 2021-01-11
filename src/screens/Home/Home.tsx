// react native
import React from 'react';
// react native extensions
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
import ArticleListView from './ArticleListView';
// styles
import styles from './Home.style';
import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/variables';

export default class Home extends React.Component {
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
                <ArticleListView />
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
