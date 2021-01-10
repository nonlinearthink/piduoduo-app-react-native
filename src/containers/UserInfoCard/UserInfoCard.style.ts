// style tool
import {ScaledSheet} from 'react-native-size-matters';
import {accentTextColor, primaryColor} from '../../theme/colors';
// styles

const styles = ScaledSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    backgroundColor: primaryColor,
    padding: '16@s',
  },
  avatarContainer: {
    marginRight: '16@s',
  },
  text: {
    color: accentTextColor,
    fontSize: '16@s',
  },
  statisticView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: '16@s',
  },
  statisticItem: {
    alignItems: 'center',
  },
  signature: {
    color: accentTextColor,
    fontSize: '10@s',
  },
  username: {
    color: accentTextColor,
    fontSize: '16@s',
    fontWeight: '900',
  },
  tag: {
    backgroundColor: '#FF9800',
    color: accentTextColor,
    paddingHorizontal: '4@s',
    marginRight: '2@s',
  },
});

export default styles;
