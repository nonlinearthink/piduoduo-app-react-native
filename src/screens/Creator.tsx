// react native
import React, {useEffect, useState} from 'react';
import {Text, FlatList} from 'react-native';
// react native extensions
import {Container, Tab, Tabs, StyleProvider, TabHeading} from 'native-base';
import {Header, Divider, Icon} from 'react-native-elements';
import {ScaledSheet} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import {Actions} from 'react-native-router-flux';
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
import {getUserComposition, deleteUserComposition} from '../apis';
import {Composition} from '../apis/types';
import CompositionCard from '../components/CompositionCard';
import {StoreState} from '../types';
import Toast from 'react-native-root-toast';

const Creator = () => {
  const [draftList, setDraftList] = useState<Composition[]>([]);
  const [submittedList, setSubmittedList] = useState<Composition[]>([]);
  const [publishedList, setPublishedList] = useState<Composition[]>([]);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [refreshing, setRefreshing] = useState(true);
  const isLogin = useSelector((state: StoreState) => state.session.isLogin);
  useEffect(() => {
    if (!isLogin) {
      return;
    }
    if (refreshing) {
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
      setForceUpdate(false);
    } else {
      setRefreshing(false);
      if (forceUpdate) {
        setRefreshing(true);
      }
    }
  }, [isLogin, refreshing, forceUpdate]);
  const deleteComposition = (compositionId: number, onDelete?: Function) => {
    deleteUserComposition(compositionId)
      .then((res) => {
        console.log(res);
        Toast.show('删除成功', {
          position: Toast.positions.CENTER,
          animation: true,
          hideOnPress: true,
        });
        onDelete && onDelete();
      })
      .catch((err) => {
        console.log(err);
        Toast.show('删除失败', {
          position: Toast.positions.CENTER,
          animation: true,
          hideOnPress: true,
        });
      });
  };
  return (
    // @ts-ignore
    <StyleProvider style={getTheme(theme)}>
      <Container>
        <Header
          centerComponent={{
            text: '作文',
            style: {color: accentTextColor, fontSize: 16},
          }}
          rightComponent={
            <Icon
              name="plus"
              type="antdesign"
              color={accentTextColor}
              onPress={() =>
                Actions.jump('Write', {
                  updateCallback: () => setRefreshing(true),
                })
              }
            />
          }
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
              renderItem={({item, index}) => {
                return (
                  <CompositionCard
                    brief={item.compositionBody}
                    time={item.releaseTime}
                    status={item.status}
                    visibility={item.visibility}
                    score={item.score}
                    onPress={() => {
                      Actions.jump('Write', {
                        ...item,
                        updateCallback: () => setRefreshing(true),
                      });
                    }}
                    onDelete={() => {
                      deleteComposition(item.compositionId, () => {
                        const listCopy = [...draftList];
                        listCopy.splice(index, 1);
                        setDraftList(listCopy);
                      });
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
              renderItem={({item, index}) => {
                return (
                  <CompositionCard
                    brief={item.compositionBody}
                    time={item.releaseTime}
                    status={item.status}
                    visibility={item.visibility}
                    score={item.score}
                    onPress={
                      item.status === 2
                        ? undefined
                        : () => {
                            Actions.jump('Publish', {
                              ...item,
                              updateCallback: () => setRefreshing(true),
                            });
                          }
                    }
                    onDelete={() => {
                      deleteComposition(item.compositionId, () => {
                        const listCopy = [...submittedList];
                        listCopy.splice(index, 1);
                        setSubmittedList(listCopy);
                      });
                    }}
                  />
                );
              }}
              keyExtractor={(item) => item.compositionId.toString()}
              ItemSeparatorComponent={() => (
                <Divider style={{backgroundColor: borderColor}} />
              )}
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
                setForceUpdate(true);
              }}
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
              renderItem={({item, index}) => {
                return (
                  <CompositionCard
                    brief={item.compositionBody}
                    time={item.releaseTime}
                    status={item.status}
                    visibility={item.visibility}
                    score={item.score}
                    title={item.title}
                    onPress={() => {
                      Actions.jump('Publish', {
                        ...item,
                        updateCallback: () => setRefreshing(true),
                      });
                    }}
                    onDelete={() => {
                      deleteComposition(item.compositionId, () => {
                        const listCopy = [...publishedList];
                        listCopy.splice(index, 1);
                        setPublishedList(listCopy);
                      });
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
