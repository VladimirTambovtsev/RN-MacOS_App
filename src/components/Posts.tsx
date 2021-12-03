import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import {useStore} from '../store/store';
import {tw} from '../Tailwind';
import {Button} from './button/Button';
import {useNavigation} from '@react-navigation/native';
import {useDynamicColor} from '../hooks/theme';
import {Post} from '../store/stores/UI.store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Posts = observer(() => {
  const navigation: any = useNavigation();
  const root = useStore();
  const [title, setTitle] = useState('');
  const dc = useDynamicColor();
  const backgroundColor = dc('bg-gray-900	', 'bg-white');

  const renderPost = ({item}: ListRenderItemInfo<Post>) => (
    <TouchableOpacity
      key={item.title}
      onPress={() => navigation.navigate('Post', {title: item.title})}>
      <View style={tw('py-1 flex-row')}>
        <Icon name="note" style={tw('mr-2 text-base	')} />
        <Text style={(tw('text-base'), {fontFamily: 'Montserrat-Regular'})}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={tw(`${backgroundColor} flex-1 p-3 h-full`)}>
      <FlatList
        data={root.ui.upperCasedPosts}
        renderItem={renderPost}
        keyExtractor={post => post.title}
        style={tw('flex-1')}
      />

      <TextInput
        value={title}
        onChange={() => setTitle('')}
        style={tw('rounded p-2 mt-5')}
        placeholder="Post Title"
      />
      <Button title="Add Post" type="primary" />
      {/* <TouchableOpacity
        onPress={() => root.ui.addBook('Test')}
        style={tw(
          `${buttonColor} items-center text-white justify-center p-3 rounded mt-2`,
        )}>
        <Text>Add Post</Text>
      </TouchableOpacity> */}
    </View>
  );
});
