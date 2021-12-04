import React, {FC, useState} from 'react';
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
  twStyle?: string;
}

export const Button: FC<Props> = ({
  title,
  style,
  twStyle = '',
  type,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const dc = useDynamicColor();
  const buttonBgColorPrimary = dc(
    `bg-cyan ${isHovered ? 'bg-opacity-75' : ''}`,
    `bg-tangerine ${isHovered ? 'bg-opacity-75' : ''}`,
  );
  const buttonBgColorSecondary = dc(
    `bg-blue-${isHovered ? '500' : '400'}`,
    `bg-green-${isHovered ? '500' : '400'}`,
  );
  const styles = {
    primary: `${buttonBgColorPrimary} p-2 w-24 items-center rounded`,
    secondary: `${buttonBgColorSecondary} p-2 w-24 items-center rounded`,
  };

  return (
    <TouchableOpacity
      {...props}
      // @ts-ignore
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <View style={[tw(styles[type]), tw(twStyle), style]}>
        <Text style={(tw('text-white'), {fontFamily: 'Montserrat-SemiBold'})}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
