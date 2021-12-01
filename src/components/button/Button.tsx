import React, {FC} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ViewProps,
  StyleProp,
  TouchableOpacityProps,
} from 'react-native';
import {tw} from '../../Tailwind';

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'primary' | 'secondary';
  style?: StyleProp<ViewProps>;
}

export const Button: FC<Props> = ({title, style, type, ...props}) => {
  return (
    <TouchableOpacity {...props}>
      <View style={[tw(styles[type]), style]}>
        <Text style={tw('text-white')}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  primary: 'bg-cyan p-3 w-24 items-center',
  secondary: 'bg-blue-500 p-3 w-24 items-center',
};
