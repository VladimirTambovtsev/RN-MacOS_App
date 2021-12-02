import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {IRootStackParams} from '../Routes';
import {RouteProp} from '@react-navigation/native';
import {tw} from '../Tailwind';
import {useDynamicColor} from '../hooks/theme';

interface Props {
  route: RouteProp<IRootStackParams, 'Post'>;
}

export const Post: FC<Props> = ({route}) => {
  const {title} = route.params;
  const dc = useDynamicColor();
  const backgroundColor = dc('bg-gray-900	', 'bg-white');
  return (
    <View style={tw(`${backgroundColor} flex-1 p-5`)}>
      <Text>{title}</Text>
    </View>
  );
};
