import { JsonInput } from '@mantine/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const sqlite_save = () => {};

export const save = async (memo: string, createdAt: string) => {
  const key = createdAt;
  const value = JSON.stringify({ memo, createdAt });
  await AsyncStorage.setItem(key, value);
  // console.log(key + '----' + value);
};

export const loadAll = async () => {
  const keys = await AsyncStorage.getAllKeys();

  const ccc = keys.length;
  console.log('count=' + ccc);

  const entryList = await AsyncStorage.multiGet(keys);

  console.log(entryList);
  const memos = entryList.map((entry) =>
    JSON.parse(entry[1] ? entry[1] : 'error'),
  );
  console.log('memos =' + memos);
  return memos;
};
export const clearStreage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('clear Complete!!!');
  } catch (error) {
    console.log('eror');
  }
};
