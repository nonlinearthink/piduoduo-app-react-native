// react native
import React from 'react';
import {Text} from 'react-native';
// react native extensions
import {Container, Tab, Tabs, StyleProvider} from 'native-base';
import {Header} from 'react-native-elements';
import {accentTextColor, primaryColor} from '../../theme/colors';
// styles
import styles from './Creator.style';
import getTheme from '../../../native-base-theme/components';
import theme from '../../../native-base-theme/variables/variables';

const Creator = () => {
  return (
    // @ts-ignore
    <StyleProvider style={getTheme(theme)}>
      <Container>
        <Header
          centerComponent={{
            text: '作文',
            style: {color: accentTextColor, fontSize: 16},
          }}
          rightComponent={{
            icon: 'plus',
            color: accentTextColor,
            type: 'antdesign',
          }}
          backgroundColor={primaryColor}
        />
        <Tabs
          tabBarUnderlineStyle={styles.tabBarUnderline}
          tabContainerStyle={styles.tabContainer}>
          <Tab heading="草稿">
            <Text>{'ok'}</Text>
          </Tab>
          <Tab heading="已提交">
            <Text>{'ok'}</Text>
          </Tab>
          <Tab heading="已发布">
            <Text>{'ok'}</Text>
          </Tab>
        </Tabs>
      </Container>
    </StyleProvider>
    // </View>
  );
};

export default Creator;
