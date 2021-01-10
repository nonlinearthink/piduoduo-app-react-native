// style tool
import {ScaledSheet} from 'react-native-size-matters';
// colors
import {defaultBackgroundColor, secondaryAccentColor} from '../../theme/colors';

const styles = ScaledSheet.create({
  settingGroup: {
    backgroundColor: defaultBackgroundColor,
    paddingHorizontal: '16@s',
  },
  quitText: {
    color: secondaryAccentColor,
  },
});

export default styles;
