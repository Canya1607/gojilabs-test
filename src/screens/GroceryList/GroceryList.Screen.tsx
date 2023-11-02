import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './GroceryList.styles';
import { AddModal } from './components/AddModal/AddModal';
import { GroceryListItem } from './components/GroceryListItem/GroceryListItem';
import { Header } from './components/Header/Header';
import { filterEntries, sortEntries } from './functions/sort';
import { Navigation } from '../../@types/common';
import { Entry } from '../../@types/entry';
import { getEntries } from '../../api/grocery';

type Props = {
  navigation: Navigation;
};

const GroceryListScreen: React.FC<Props> = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterValue, setFilterValue] = useState(2);
  const [update, setUpdate] = useState(0);

  useFocusEffect(
    useCallback(() => {
      const callEntries = async () => {
        const entries = await getEntries();
        if (entries != null) {
          onSetEntries(entries);
        }
      };

      callEntries();
    }, []),
  );

  useEffect(() => {
    const callEntries = async () => {
      const entries = await getEntries();
      if (entries != null) {
        onSetEntries(entries);
      }
    };

    callEntries();
  }, [update]);

  const onSetEntries = (entries: Entry[]) => {
    sortEntries(entries);
    setEntries(entries);
  };

  const onUpdate = () => {
    setUpdate((state) => state + 1);
  };

  const renderEntryItem = useCallback((item: Entry) => {
    return <GroceryListItem {...item} callUpdate={onUpdate} />;
  }, []);

  const entriesToShow = filterEntries(entries, filterValue);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <AddModal modalVisible={modalVisible} setModalVisible={setModalVisible} callUpdate={onUpdate} />
        <Header filterValue={filterValue} setFilterValue={setFilterValue} setModalVisible={setModalVisible} />
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
          data={entriesToShow}
          renderItem={({ item }) => renderEntryItem(item)}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default GroceryListScreen;
