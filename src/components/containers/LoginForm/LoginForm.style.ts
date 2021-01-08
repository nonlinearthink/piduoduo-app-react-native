// style tool
import {ScaledSheet} from 'react-native-size-matters';
// styles
import {primaryColor} from '../../../theme/colors';

const styles = ScaledSheet.create({
  prefixIcon: {
    marginHorizontal: '4@s',
  },
  blockButton: {
    backgroundColor: primaryColor,
    marginVertical: '16@s',
  },
});

export default styles;
