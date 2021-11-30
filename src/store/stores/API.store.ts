import {makeAutoObservable} from 'mobx';
import {IRootStore} from '../store';

interface Post {
  title: string;
  createdAt: string;
}

export let createAPIStore = (root: IRootStore) => {
  let store = makeAutoObservable({
    posts: [
      {
        title: 'Title 1',
        createdAt: '2021-02-02:T13:00:00Z',
      },
      {
        title: 'Title 2',
        createdAt: '2021-03-02:T13:00:00Z',
      },
      {
        title: 'Title 3',
        createdAt: '2021-05-02:T13:00:00Z',
      },
    ],
    get upperCasedPosts(): Post[] {
      return store.posts.map((post: Post) => ({
        ...post,
        title: post.title.toUpperCase(),
      }));
    },
    addBook(title: string) {
      store.posts.push({title, createdAt: new Date().toISOString()});
    },
  });
  return store;
};
