import React from 'react';
import {
  Text,
  View,
  TouchableNativeFeedback,
  GestureResponderEvent,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {secondaryTextColor} from '../../theme/colors';
import styles from './index.style';

interface Props {
  prefix?: React.ComponentElement<any, any> | undefined;
  title?: string;
  isLink?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

const defaultProps: Props = {
  prefix: undefined,
  title: '',
  isLink: false,
};

const SettingCell = (props = defaultProps) => {
  return (
    <TouchableNativeFeedback
      onPress={props.onPress ? props.onPress : undefined}>
      <View style={styles.cellContainer}>
        <View style={styles.header}>
          {props.prefix ? props.prefix : undefined}
          <Text style={styles.title}>{props.title}</Text>
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

export default SettingCell;
