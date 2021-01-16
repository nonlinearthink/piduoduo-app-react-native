import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import {accentTextColor, primaryColor, accentIconsColor} from '../theme/colors';
import LinkedCard from '../components/LinkedCard';
import {getSupportList} from '../apis';
import {SupportModel} from '../apis/types';
import {useSelector} from 'react-redux';
import {StoreState} from '../types';
import {Container} from 'native-base';

const Support = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [supportList, setSupportList] = useState<SupportModel[]>([]);
  const isLogin = useSelector((state: StoreState) => state.session.isLogin);
  const username = useSelector((state: StoreState) => state.user.username);
  useEffect(() => {
    if (!isLogin) {
      setSupportList([]);
      setRefreshing(false);
      return;
    }
    if (refreshing) {
      getSupportList()
        .then((res) => {
          console.log(res.data);
          setSupportList(
            res.data.data.supportViewModelList
              .sort((a: SupportModel, b: SupportModel) => b.time - a.time)
              .filter((item: SupportModel) => item.username !== username),
          );
          setRefreshing(false);
        })
        .catch((err) => {
          console.error(err);
          setRefreshing(false);
        });
    }
  }, [refreshing, isLogin, username]);
  return (
    <Container>
      <Header
        centerComponent={{
          text: '收到的赞',
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
        data={supportList}
        renderItem={({item}) => {
          return (
            <LinkedCard
              type={0}
              title={item.title}
              time={item.time}
              nickname={item.nickname}
              onPress={() => Actions.jump('Composition', item)}
            />
          );
        }}
        keyExtractor={(item) => item.supportId.toString()}
        refreshing={refreshing}
        onRefresh={() => setRefreshing(true)}
      />
    </Container>
  );
};

export default Support;
