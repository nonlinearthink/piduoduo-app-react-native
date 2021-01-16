import React from 'react';
import {Text, View, Image} from 'react-native';
import SettingCell from '../components/SettingCell';
import {ScaledSheet} from 'react-native-size-matters';
import {
  primaryTextColor,
  defaultBackgroundColor,
  accentTextColor,
  accentIconsColor,
  primaryColor,
} from '../theme/colors';
import {Header, Icon} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';

const About = () => {
  return (
    <View>
      <Header
        centerComponent={{
          text: '关于批多多',
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
      <View style={styles.logo}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>批多多</Text>
      </View>
      <View style={styles.settingGroup}>
        <SettingCell title="版本号" description="0.8.0-alpha(rn version)" />
        <SettingCell
          title="开发团队"
          description="浙大城市学院 SE2020 G11小组"
        />
      </View>
    </View>
  );
};

export default About;

const styles = ScaledSheet.create({
  logo: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16@s',
    backgroundColor: defaultBackgroundColor,
  },
  logoImage: {
    width: '100@s',
    height: '100@s',
    borderRadius: '25@s',
  },
  logoText: {
    fontSize: '16@s',
    color: primaryTextColor,
    margin: '8@s',
  },
  settingGroup: {
    backgroundColor: defaultBackgroundColor,
    paddingHorizontal: '16@s',
  },
});
