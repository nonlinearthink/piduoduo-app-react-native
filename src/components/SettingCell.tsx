import React from 'react';
import {
  Text,
  View,
  TouchableNativeFeedback,
  GestureResponderEvent,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {secondaryTextColor} from '../theme/colors';
import {ScaledSheet} from 'react-native-size-matters';

interface Props {
  prefix?: React.ComponentElement<any, any> | undefined;
  title?: string;
  isLink?: boolean;
  description?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const defaultProps: Props = {
  prefix: undefined,
  title: '',
  isLink: false,
  description: undefined,
};

const SettingCell = (props = defaultProps) => {
  return (
    <TouchableNativeFeedback
      onPress={props.onPress ? props.onPress : undefined}>
      <View style={styles.cellContainer}>
        <View style={styles.header}>
          {props.prefix ? props.prefix : undefined}
          <View>
            <Text style={styles.title}>{props.title}</Text>
            {props.description ? (
              <Text style={styles.description}>{props.description}</Text>
            ) : undefined}
          </View>
        </View>
        {(() => {
          if (props.isLink) {
            return (
              <Icon
                name="right"
                type="antdesign"
                color={secondaryTextColor}
                size={16}
              />
            );
          } else {
            return undefined;
          }
        })()}
      </View>
    </TouchableNativeFeedback>
  );
};

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
  description: {
    color: secondaryTextColor,
  },
});

export default SettingCell;
