// style tools
import {ScaledSheet} from 'react-native-size-matters';
// colors
import {
  defaultBackgroundColor,
  primaryColor,
  secondaryAccentColor,
} from '../../theme/colors';

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
});

export default styles;
