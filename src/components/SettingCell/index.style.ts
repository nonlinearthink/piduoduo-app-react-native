import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  cellContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '8@s',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: '14@s',
  },
});

export default styles;
