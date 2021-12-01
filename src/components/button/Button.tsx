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
import {useDynamicColor} from '../../hooks/theme';

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'primary' | 'secondary';
  style?: StyleProp<ViewProps>;
}

export const Button: FC<Props> = ({title, style, type, ...props}) => {
  const dc = useDynamicColor();
  const buttonBgColorPrimary = dc('bg-cyan', 'bg-tangerine');
  const buttonBgColorSecondary = dc('bg-blue-500', 'bg-green-500');
  const styles = {
    primary: `${buttonBgColorPrimary} bg-cyan p-2 w-24 items-center rounded`,
    secondary: `${buttonBgColorSecondary} bg-blue-500 p-2 w-24 items-center rounded`,
  };

  return (
    <TouchableOpacity {...props}>
      <View style={[tw(styles[type]), style]}>
        <Text style={tw('text-white')}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
