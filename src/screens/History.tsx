import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {accentTextColor, primaryColor, accentIconsColor} from '../theme/colors';
import {Actions} from 'react-native-router-flux';
import HistoryCard from '../components/HistoryCard';
import {getHistory} from '../apis';
import {HistoryModel} from '../apis/types';
import {useSelector} from 'react-redux';
import {StoreState} from '../types';
import {Container} from 'native-base';

const History = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [historyList, setHistoryList] = useState<HistoryModel[]>([]);
  const isLogin = useSelector((state: StoreState) => state.session.isLogin);
  useEffect(() => {
    if (!isLogin) {
      setHistoryList([]);
      setRefreshing(false);
      return;
    }
    if (refreshing) {
      getHistory()
        .then((res) => {
          console.log(res.data);
          setHistoryList(res.data.data.historyModelList);
          setRefreshing(false);
        })
        .catch((err) => {
          console.error(err);
          setRefreshing(false);
        });
    }
  }, [refreshing, isLogin]);
  return (
    <Container>
      <Header
        centerComponent={{
          text: '浏览历史',
          style: {color: accentTextColor, fontSize: 16},
        }}
        leftComponent={
          <Icon
            name="left"
            type="antdesign"
            color={accentIconsColor}
            onPress={() => Actions.pop()}
          />
        }
        backgroundColor={primaryColor}
      />
      <FlatList
        data={historyList}
        renderItem={({item}) => {
          return (
            <HistoryCard
              title={item.title}
              brief={item.compositionBody}
              username={item.nickname}
              time={item.time}
              onPress={() => {
                Actions.jump('Composition', item);
              }}
            />
          );
        }}
        keyExtractor={(item) => item.compositionId.toString()}
        refreshing={refreshing}
        onRefresh={() => setRefreshing(true)}
      />
    </Container>
  );
};

export default History;
