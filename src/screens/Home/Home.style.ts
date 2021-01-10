// style tools
import {ScaledSheet} from 'react-native-size-matters';
// colors
import {
  defaultBackgroundColor,
  primaryColor,
  secondaryAccentColor,
} from '../../theme/colors';

const styles = ScaledSheet.create({
  searchBarContainer: {
    backgroundColor: primaryColor,
    padding: '16@s',
    borderBottomColor: defaultBackgroundColor,
  },
  searchBarInputContainer: {
    backgroundColor: defaultBackgroundColor,
    height: '38@s',
    borderRadius: '19@s',
  },
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
