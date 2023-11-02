import { useState } from 'react';
import { View, Button } from 'react-native';

import { styles } from './Header.styles';
import { DropDown } from '../../../../components/DropDown/DropDown';

const data = [
  { label: 'Ran out', value: 0 },
  { label: 'Have', value: 1 },
  { label: 'All', value: 2 },
];

type Props = {
  filterValue: number;
  setFilterValue: React.Dispatch<React.SetStateAction<number>>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: React.FC<Props> = ({ filterValue, setFilterValue, setModalVisible }) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.header}>
      <Button title="Add new" onPress={() => setModalVisible(true)} />
      <DropDown open={open} value={filterValue} data={data} setOpen={setOpen} setValue={setFilterValue} />
    </View>
  );
};
