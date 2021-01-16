import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {
  accentTextColor,
  primaryColor,
  accentIconsColor,
  secondaryTextColor,
  defaultBackgroundColor,
} from '../theme/colors';
import {Actions} from 'react-native-router-flux';
import {HelpModel} from '../apis/types';
import {getHelp} from '../apis';

const Help = () => {
  const [refreshing, setRefreshing] = useState(true);
  const [helpList, setHelpList] = useState<HelpModel[]>([]);
  useEffect(() => {
    if (refreshing) {
      getHelp()
        .then((res) => {
          console.log(res.data);
          setHelpList(res.data.data.helpEntityList);
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
          text: '帮助手册',
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
      <View style={styles.container}>
        <FlatList
          data={helpList}
          renderItem={({item}) => {
            return (
              <View style={styles.helpContainer}>
                <Text style={styles.helpTitle}>{item.helpTitle}</Text>
                <Text style={styles.helpBody}>{item.helpBody}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.helpId.toString()}
          refreshing={refreshing}
          onRefresh={() => setRefreshing(true)}
        />
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: defaultBackgroundColor,
  },
  helpContainer: {
    marginVertical: 8,
  },
  helpTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  helpBody: {
    color: secondaryTextColor,
  },
});
