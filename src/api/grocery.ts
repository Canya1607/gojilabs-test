import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import { CreateEntry, Entry, UpdateEntry } from '../@types/entry';
import Keys from '../constants/keys';

export const getEntries = async (): Promise<Entry[] | null | undefined> => {
  try {
    const jsonValue = await AsyncStorage.getItem(Keys.entries);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    //
  }
};

export const postEntry = async (createEntry: CreateEntry) => {
  try {
    const entries = await getEntries();
    const entry = { ...createEntry, id: uuidv4(), changesDate: [moment().format()] };
    if (entries) {
      await AsyncStorage.setItem(Keys.entries, JSON.stringify([...entries, entry]));
    } else {
      await AsyncStorage.setItem(Keys.entries, JSON.stringify([entry]));
    }
  } catch (e) {
    console.error(e);
  }
};

export const updateEntry = async (entry: UpdateEntry): Promise<string | undefined> => {
  try {
    let changeDate = '';
    const entries = await getEntries();
    if (entries) {
      entries.forEach((item: Entry) => {
        if (item.id === entry.id) {
          changeDate = moment().format();
          item.name = entry.name;
          item.priority = entry.priority;
          item.status = entry.status;
          item.changesDate = [...item.changesDate, changeDate];
        }
      });
      await AsyncStorage.setItem(Keys.entries, JSON.stringify(entries));
      return changeDate;
    } else {
      postEntry(entry);
    }
  } catch (e) {
    //
  }
};

export const deleteEntry = async (id: string) => {
  try {
    const entries = await getEntries();
    if (entries) {
      const newEntries = entries.filter((item: Entry) => {
        if (item.id !== id) return item;
      });
      await AsyncStorage.setItem(Keys.entries, JSON.stringify(newEntries));
    } else {
      await AsyncStorage.setItem(Keys.entries, JSON.stringify(null));
    }
  } catch (e) {
    //
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    //
  }
};
