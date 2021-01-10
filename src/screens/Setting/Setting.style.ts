// style tool
import {ScaledSheet} from 'react-native-size-matters';
import {defaultBackgroundColor, secondaryAccentColor} from '../../theme/colors';

// styles

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
