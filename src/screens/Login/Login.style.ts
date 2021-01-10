import {ScaledSheet} from 'react-native-size-matters';
import {primaryTextColor} from '../../theme/colors';

const styles = ScaledSheet.create({
  page: {
    paddingHorizontal: '16@s',
  },
  logo: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: '16@s',
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
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
