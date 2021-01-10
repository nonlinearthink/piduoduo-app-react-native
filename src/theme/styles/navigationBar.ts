import {ScaledSheet} from 'react-native-size-matters';
import {
  accentTextColor,
  globalAppBackgroundColor,
  primaryColor,
} from '../colors';
export const PrimaryNavigationBarStyle = ScaledSheet.create({
  navigationBarStyle: {
    backgroundColor: primaryColor,
  },
  titleStyle: {
    color: accentTextColor,
    fontSize: '16@s',
    textAlign: 'center',
    flex: 1,
  },
});

export const appStyle = ScaledSheet.create({
  appStyle: {
    backgroundColor: globalAppBackgroundColor,
  },
});
