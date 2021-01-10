// style tool
import {ScaledSheet} from 'react-native-size-matters';
import {borderColor, defaultBackgroundColor} from '../../theme/colors';
// styles

const styles = ScaledSheet.create({
  floatCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: defaultBackgroundColor,
    marginTop: '-16@s',
    paddingVertical: '12@s',
    borderWidth: '1@s',
    borderColor: borderColor,
    borderRadius: '8@s',
  },
  floatCardContainer: {
    paddingHorizontal: '16@s',
    backgroundColor: defaultBackgroundColor,
  },
  icon: {
    marginRight: '8@s',
  },
  settingGroup: {
    backgroundColor: defaultBackgroundColor,
    marginVertical: '8@s',
    paddingHorizontal: '16@s',
  },
});

export default styles;
