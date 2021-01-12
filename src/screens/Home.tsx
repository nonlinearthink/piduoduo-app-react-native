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
import ArticleListView from '../containers/Home/ArticleListView';
import HotListView from '../containers/Home/HotListView';
// styles
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/variables';
// style tools
import {ScaledSheet} from 'react-native-size-matters';
// colors
import {
  defaultBackgroundColor,
  primaryColor,
  secondaryAccentColor,
} from '../theme/colors';

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
                <HotListView />
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

const styles = ScaledSheet.create({
  searchBarContainer: {
    backgroundColor: primaryColor,
    padding: '16@s',
    borderBottomColor: defaultBackgroundColor,
  },
  searchBarInputContainer: {
    backgroundColor: defaultBackgroundColor,
    height: '38@s',
    borderRadius: '19@s',
  },
  tabContainer: {
    backgroundColor: primaryColor,
  },
  tabBarUnderline: {
    backgroundColor: secondaryAccentColor,
  },
  tabText: {
    color: defaultBackgroundColor,
  },
  safeAreaContainer: {
    flex: 1,
  },
});
