// react native
import React, {useEffect, useState} from 'react';
import {Text, FlatList} from 'react-native';
// react native extensions
import {Container, Tab, Tabs, StyleProvider, TabHeading} from 'native-base';
import {Header, Divider} from 'react-native-elements';
import {ScaledSheet} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
// styles
import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/variables';
import {
  accentTextColor,
  primaryColor,
  defaultBackgroundColor,
  secondaryAccentColor,
  borderColor,
} from '../theme/colors';
import {getUserComposition} from '../apis/index';
import {Composition} from '../apis/types';
import CompositionCard from '../components/CompositionCard';
import {StoreState} from '../types';

const Creator = () => {
  const [draftList, setDraftList] = useState<Composition[]>([]);
  const [submittedList, setSubmittedList] = useState<Composition[]>([]);
  const [publishedList, setPublishedList] = useState<Composition[]>([]);
  const [refreshing, setRefreshing] = useState(true);
  const isLogin = useSelector((state: StoreState) => state.session.isLogin);
  useEffect(() => {
    if (isLogin && refreshing) {
      getUserComposition()
        .then((res) => {
          console.log(res);
          setDraftList(
            res.data.data.compositionList.filter(
              (item: Composition) => item.status === 1,
            ),
          );
          setSubmittedList(
            res.data.data.compositionList.filter(
              (item: Composition) => item.status === 2 || item.status === 3,
            ),
          );
          setPublishedList(
            res.data.data.compositionList.filter(
              (item: Composition) => item.status === 4,
            ),
          );
          setRefreshing(false);
        })
        .catch((err) => {
          console.error(err);
          setRefreshing(false);
        });
    } else {
      setRefreshing(false);
    }
  }, [isLogin, refreshing]);
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
          <Tab
            heading={
              <TabHeading>
                <Text style={{color: accentTextColor}}>草稿</Text>
              </TabHeading>
            }>
            <FlatList
              data={draftList}
              renderItem={({item}) => {
                return (
                  <CompositionCard
                    brief={item.compositionBody}
                    time={item.releaseTime}
                    status={item.status}
                    visibility={item.visibility}
                    score={item.score}
                    onPress={() => {
                      // Actions.jump('Article', item);
                    }}
                  />
                );
              }}
              keyExtractor={(item) => item.compositionId.toString()}
              ItemSeparatorComponent={() => (
                <Divider style={{backgroundColor: borderColor}} />
              )}
              refreshing={refreshing}
              onRefresh={() => setRefreshing(true)}
            />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text style={{color: accentTextColor}}>已提交</Text>
              </TabHeading>
            }>
            <FlatList
              data={submittedList}
              renderItem={({item}) => {
                return (
                  <CompositionCard
                    brief={item.compositionBody}
                    time={item.releaseTime}
                    status={item.status}
                    visibility={item.visibility}
                    score={item.score}
                    onPress={() => {
                      // Actions.jump('Article', item);
                    }}
                  />
                );
              }}
              keyExtractor={(item) => item.compositionId.toString()}
              ItemSeparatorComponent={() => (
                <Divider style={{backgroundColor: borderColor}} />
              )}
              refreshing={refreshing}
              onRefresh={() => setRefreshing(true)}
            />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text style={{color: accentTextColor}}>已发布</Text>
              </TabHeading>
            }>
            <FlatList
              data={publishedList}
              renderItem={({item}) => {
                return (
                  <CompositionCard
                    brief={item.compositionBody}
                    time={item.releaseTime}
                    status={item.status}
                    visibility={item.visibility}
                    score={item.score}
                    title={item.title}
                    onPress={() => {
                      // Actions.jump('Article', item);
                    }}
                  />
                );
              }}
              keyExtractor={(item) => item.compositionId.toString()}
              ItemSeparatorComponent={() => (
                <Divider style={{backgroundColor: borderColor}} />
              )}
              refreshing={refreshing}
              onRefresh={() => setRefreshing(true)}
            />
          </Tab>
        </Tabs>
      </Container>
    </StyleProvider>
    // </View>
  );
};

export default Creator;

const styles = ScaledSheet.create({
  tabContainer: {
    backgroundColor: primaryColor,
  },
  tabBarUnderline: {
    backgroundColor: secondaryAccentColor,
  },
  tabText: {
    color: defaultBackgroundColor,
  },
  listContainer: {
    backgroundColor: defaultBackgroundColor,
  },
});
