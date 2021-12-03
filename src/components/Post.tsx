import React, {FC} from 'react';
import {Text, View} from 'react-native';
import WebView from 'react-native-webview';
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
    <View style={tw(`${backgroundColor} flex-1`)}>
      <Text style={tw('mb-3 p-5')}>{title}</Text>
      <WebView source={{uri: `https://google.com/search?q=${title}`}} />
    </View>
  );
};
