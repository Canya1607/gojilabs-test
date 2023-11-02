import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './GroceryListItem.styles';
import { Navigation } from '../../../../@types/common';
import { deleteEntry, updateEntry } from '../../../../api/grocery';
import { Toggle } from '../../../../components/Toggle/Toggle';

type Props = {
  id: string;
  name: string;
  priority: number;
  status: number;
  changesDate: string[];
  callUpdate: () => void;
};

export const GroceryListItem: React.FC<Props> = ({ id, name, priority, changesDate, status, callUpdate }) => {
  const [isToggleEnabled, setIsToggleEnabled] = useState(Boolean(status));

  const navigation: Navigation = useNavigation();

  useEffect(() => {
    setIsToggleEnabled(Boolean(status));
  }, [status]);

  const onDeletePress = async () => {
    await deleteEntry(id);
    callUpdate();
  };

  const onSetIsToggleEnabled = async (enabled: boolean) => {
    setIsToggleEnabled(enabled);
    await updateEntry({
      id,
      name,
      priority,
      status: Number(enabled),
    });
    callUpdate();
  };

  const changeDate = changesDate[changesDate.length - 1];

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('GroceryEntryScreen', { id, name, priority, changesDate, status })}>
      <View style={styles.container}>
        <Text>Name: {name}</Text>
        <Text>Priority: {priority}</Text>
        <Text>Last changed: {moment(changeDate).format('LLL')}</Text>
        <Toggle isEnabled={isToggleEnabled} offLabel="Ran out" onLabel="Have" setIsEnabled={onSetIsToggleEnabled} />
        <TouchableOpacity style={styles.delete} onPress={onDeletePress}>
          <Image style={styles.deleteIcon} source={require('../../../../assets/images/delete.png')} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
