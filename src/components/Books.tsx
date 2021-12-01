import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useStore} from '../store/store';
import {tw} from '../Tailwind';
import {useDynamicColor} from '../hooks/theme';

export const Books = observer(() => {
  let root = useStore();
  const [title, setTitle] = useState('');
  const dc = useDynamicColor();

  const buttonColor = dc('bg-tangerine', 'bg-cyan');

  return (
    <View style={tw('p-3')}>
      {root.ui.upperCasedPosts.map(post => (
        <View key={post.title}>
          <Text style={tw('text-sm')}>{post.title}</Text>
        </View>
      ))}
      <TextInput
        value={title}
        onChange={() => setTitle}
        style={tw('rounded p-2 mt-5')}
        placeholder="Post Title"
      />
      <TouchableOpacity
        onPress={() => root.ui.addBook('Test')}
        style={tw(
          `${buttonColor} items-center text-white justify-center p-3 rounded mt-2`,
        )}>
        <Text>Add Post</Text>
      </TouchableOpacity>
    </View>
  );
});
