import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useStore} from '../store/store';
import {tw} from '../Tailwind';
import {Button} from './button/Button';
import {useNavigation} from '@react-navigation/native';
import {useDynamicColor} from '../hooks/theme';

export const Posts = observer(() => {
  const navigation: any = useNavigation();
  const root = useStore();
  const [title, setTitle] = useState('');
  const dc = useDynamicColor();
  const backgroundColor = dc('bg-gray-900	', 'bg-white');

  return (
    <View style={tw(`${backgroundColor} p-3 h-full`)}>
      {root.ui.upperCasedPosts.map(post => (
        <TouchableOpacity
          key={post.title}
          onPress={() => navigation.navigate('Post', {title: post.title})}>
          <View>
            <Text style={tw('text-sm')}>{post.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
