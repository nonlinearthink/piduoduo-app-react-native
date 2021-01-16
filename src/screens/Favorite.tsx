import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {accentTextColor, primaryColor, accentIconsColor} from '../theme/colors';
import {Actions} from 'react-native-router-flux';
import HistoryCard from '../components/HistoryCard';
import {getFavorite} from '../apis';
import {Composition} from '../apis/types';
import {useSelector} from 'react-redux';
import {StoreState} from '../types';
import {Container} from 'native-base';

const Favorite = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [compositionList, setCompositionList] = useState<Composition[]>([]);
  const isLogin = useSelector((state: StoreState) => state.session.isLogin);
  useEffect(() => {
    if (!isLogin) {
      setCompositionList([]);
      setRefreshing(false);
      return;
    }
    if (refreshing) {
      getFavorite()
        .then((res) => {
          console.log(res.data);
          setCompositionList(res.data.data.compositionList);
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
          text: '我的收藏',
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
        data={compositionList}
        renderItem={({item}) => {
          return (
            <HistoryCard
              title={item.title}
              brief={item.compositionBody}
              username={item.username}
              time={item.releaseTime}
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

export default Favorite;
