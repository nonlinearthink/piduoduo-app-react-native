// react native
import React from 'react';
import {View, Text} from 'react-native';
// react native extensions
import {SearchBar} from 'react-native-elements';
// styles
import styles from './Home.style';

const Home = () => {
  return (
    <View>
      <SearchBar
        placeholder="请输入搜索关键词"
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
      />
      <Text>{'首页'}</Text>
    </View>
  );
};

export default Home;
