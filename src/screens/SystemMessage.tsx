import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Header, Icon, Divider} from 'react-native-elements';
import {accentIconsColor, accentTextColor, primaryColor} from '../theme/colors';
import {Actions} from 'react-native-router-flux';
import {getSystemMessage} from '../apis';
import {SystemMessageModel} from '../apis/types';
import SystemMessageCard from '../components/SystemMessageCard';
import {borderColor} from '../theme/colors';

const SystemMessage = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [systemMessgaeList, setSystemMessageList] = useState<
    SystemMessageModel[]
  >([]);
  useEffect(() => {
    if (refreshing) {
      getSystemMessage()
        .then((res) => {
          console.log(res.data);
          setSystemMessageList(res.data.data.systemMessageEntityList);
          setRefreshing(false);
        })
        .catch((err) => {
          console.error(err);
          setRefreshing(false);
        });
    }
  }, [refreshing]);
  return (
    <View>
      <Header
        centerComponent={{
          text: '系统消息',
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
        data={systemMessgaeList}
        renderItem={({item}) => {
          return (
            <SystemMessageCard
              content={item.systemMessageBody}
              time={item.time}
            />
          );
        }}
        keyExtractor={(item) => item.systemMessageId.toString()}
        ItemSeparatorComponent={() => <Divider style={styles.divider} />}
        refreshing={refreshing}
        onRefresh={() => setRefreshing(true)}
      />
    </View>
  );
};

export default SystemMessage;

const styles = StyleSheet.create({
  divider: {
    backgroundColor: borderColor,
    height: 2,
  },
});
