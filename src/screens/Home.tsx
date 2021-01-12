// react native
import React, {useState} from 'react';
// react native extensions
import {
  Container,
  Tab,
  Tabs,
  TabHeading,
  Text,
  StyleProvider,
} from 'native-base';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// my components
import ArticleListView from '../containers/Home/ArticleListView';
import HotListView from '../containers/Home/HotListView';
import FreshListView from '../containers/Home/FreshListView';
import FollowView from '../containers/Home/FollowView';
// styles
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/variables';
// style tools
import {ScaledSheet} from 'react-native-size-matters';
// colors
import {
  accentTextColor,
  defaultBackgroundColor,
  primaryColor,
  secondaryAccentColor,
} from '../theme/colors';

const Home = () => {
  const [lockSwipe, setLockSwipe] = useState(false);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar backgroundColor={primaryColor} />
      {/* @ts-ignore */}
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Tabs
            tabBarUnderlineStyle={styles.tabBarUnderline}
            tabContainerStyle={styles.tabContainer}
            locked={lockSwipe}>
            <Tab
              heading={
                <TabHeading>
                  <Text style={{color: accentTextColor}}>推荐</Text>
                </TabHeading>
              }>
              <ArticleListView />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Text style={{color: accentTextColor}}>关注</Text>
                </TabHeading>
              }>
              <FollowView swipeLockController={setLockSwipe} />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Text style={{color: accentTextColor}}>热榜</Text>
                </TabHeading>
              }>
              <HotListView />
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Text style={{color: accentTextColor}}>新鲜</Text>
                </TabHeading>
              }>
              <FreshListView />
            </Tab>
          </Tabs>
        </Container>
      </StyleProvider>
    </SafeAreaView>
  );
};

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

export default Home;
