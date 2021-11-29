import React from 'react';
import {observer} from 'mobx-react-lite';
import {View, Text, Button} from 'react-native';
import {useStore} from '../store';

export const Books = observer(() => {
  let root = useStore();
  return (
    <View>
      {root.ui.upperCasedPosts.map(post => (
        <View key={post.title}>
          <Text>{post.title}</Text>
        </View>
      ))}
      <Button title="Add button" onPress={() => root.ui.addBook('Test')} />
    </View>
  );
});
