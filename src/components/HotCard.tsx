// react native
import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  GestureResponderEvent,
  Dimensions,
} from 'react-native';
// react native extensions
import {Icon} from 'react-native-elements';
import {ScaledSheet} from 'react-native-size-matters';
// colors
import {
  defaultBackgroundColor,
  primaryTextColor,
  secondaryTextColor,
} from '../theme/colors';

const screen = Dimensions.get('window');

interface Props {
  rank?: number;
  title?: string;
  brief?: string;
  user?: string;
  hot?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

interface AwardViewProps {
  rank?: number;
}

const AwardView = (props: AwardViewProps) => {
  const colorMap = ['#FF5252', '#FF9800', '#FFC107'];
  if (props.rank && props.rank <= 3) {
    return (
      <View style={styles.rankContainer}>
        <Icon
          type="font-awesome-5"
          name="award"
          color={colorMap[props.rank - 1]}
        />
        <Text style={{color: colorMap[props.rank - 1]}}>{props.rank}</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.rankContainer}>
        <Text style={styles.rank}>{props.rank}</Text>
      </View>
    );
  }
};

const HotCard = (props: Props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View style={styles.container}>
        <AwardView rank={props.rank ? props.rank : undefined} />
        <View style={styles.mainContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text numberOfLines={3} style={styles.brief}>
            {props.brief}
          </Text>
          <View style={styles.bottomContainer}>
            <Text style={styles.user}>{props.user}</Text>
            <Text style={styles.hot}>
              {props.hot ? `${props.hot.toFixed(2)}热度` : ''}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: '8@s',
    backgroundColor: defaultBackgroundColor,
    paddingRight: 8,
    width: screen.width,
  },
  rankContainer: {
    marginHorizontal: '8@s',
    alignItems: 'center',
    marginTop: '4@s',
  },
  title: {
    fontSize: '16@s',
    color: primaryTextColor,
    fontWeight: '900',
  },
  brief: {
    color: primaryTextColor,
    marginVertical: '4@s',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainContainer: {
    flex: 1,
  },
  user: {
    color: secondaryTextColor,
  },
  hot: {
    color: secondaryTextColor,
  },
  rank: {
    color: secondaryTextColor,
    marginHorizontal: '2@s',
  },
});

export default HotCard;
