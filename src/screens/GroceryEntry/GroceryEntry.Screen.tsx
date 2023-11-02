import moment from 'moment';
import { useState } from 'react';
import { View, Button, Text } from 'react-native';

import { styles } from './GroceryEntry.styles';
import { Navigation, Route } from '../../@types/common';
import { deleteEntry, updateEntry } from '../../api/grocery';
import { Toggle } from '../../components/Toggle/Toggle';

type RouteProps = {
  id: string;
  name: string;
  priority: number;
  status: number;
  changesDate: string[];
};

type Props = {
  route: Route<RouteProps>;
  navigation: Navigation;
};

const GroceryEntryScreen: React.FC<Props> = ({ route, navigation }) => {
  const { id, name, priority, changesDate, status } = route.params;

  const [isToggleEnabled, setIsToggleEnabled] = useState(Boolean(status));
  const [lastChanges, setLastChanges] = useState(changesDate);

  const onDeletePress = async () => {
    await deleteEntry(id);
    navigation.goBack();
  };

  const onSetIsToggleEnabled = async (enabled: boolean) => {
    setIsToggleEnabled(enabled);
    const changeDate = await updateEntry({
      id,
      name,
      priority,
      status: Number(enabled),
    });
    if (changeDate) setLastChanges((state) => [...state, changeDate]);
  };

  return (
    <View style={styles.container}>
      <Text>Name: {name}</Text>
      <Text>Priority: {priority}</Text>
      {lastChanges
        .reverse()
        .slice(0, 5)
        .map((change, index) => (
          <Text key={`${id}-c${index}`}>Last changed: {moment(change).format('LLL')}</Text>
        ))}
      <Toggle isEnabled={isToggleEnabled} offLabel="Ran out" onLabel="Have" setIsEnabled={onSetIsToggleEnabled} />
      <Button color="red" title="Delete" onPress={onDeletePress} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default GroceryEntryScreen;
