import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {
  defaultBackgroundColor,
  primaryTextColor,
  secondaryTextColor,
} from '../../theme/colors';

const screen = Dimensions.get('window');

const styles = ScaledSheet.create({
  container: {
    padding: 16,
    backgroundColor: defaultBackgroundColor,
    borderRadius: '8@s',
  },
  image: {
    width: screen.width - 32,
    height: '200@s',
    borderRadius: '8@s',
  },
  title: {
    fontWeight: '900',
    fontSize: '16@s',
    color: primaryTextColor,
  },
  brief: {
    marginVertical: '4@s',
    fontSize: '14@s',
    color: secondaryTextColor,
  },
});

export default styles;
