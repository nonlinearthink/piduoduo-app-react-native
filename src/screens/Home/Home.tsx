// react native
import React from 'react';
// react native extensions
// import {SearchBar} from 'react-native-elements';
// import { Tabs, SearchBar } from '@ant-design/react-native';
// import { Layout, Tab, TabView, Text } from '@ui-kitten/components';
import {
  Container,
  Tab,
  Tabs,
  TabHeading,
  Text,
  StyleProvider,
} from 'native-base';
// styles
import styles from './Home.style';
import getTheme from '../../../native-base-theme/components';
import platform from '../../../native-base-theme/variables/variables';

const Home = () => {
  return (
    // @ts-ignore
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
            <Text>{'ok'}</Text>
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
  );
};

export default Home;
