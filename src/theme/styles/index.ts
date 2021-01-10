import {ScaledSheet} from 'react-native-size-matters';
import {globalAppBackgroundColor} from '../colors';
export * from './navigationBar';

export const appStyle = ScaledSheet.create({
  rootContainer: {
    backgroundColor: globalAppBackgroundColor,
  },
});
