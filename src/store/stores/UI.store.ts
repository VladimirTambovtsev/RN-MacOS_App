import {buildingAppsNative} from './../../native/MacOSRnAppsNative';
import {makeAutoObservable, toJS, runInAction, autorun} from 'mobx';
import {IRootStore} from '../store';

export interface Post {
  title: string;
  createdAt: string;
}

export let createUIStore = (root: IRootStore) => {
  const persist = async () => {
    const plainState = toJS(store);
    await buildingAppsNative.keychainWrite('state', JSON.stringify(plainState));
  };

  let hydrate = async () => {
    let stringState = await buildingAppsNative.keychainRead('state');

    if (stringState) {
      let parsedStore = JSON.parse(stringState);

      runInAction(() => {
        store.books = parsedStore.books.map((book: any) => ({
          title: book.title,
          date: new Date(book.date),
        }));
      });
    }
  };
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

  hydrate().then(() => {
    autorun(persist);
  });

  return store;
};
