import { useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';

import { styles } from './AddModal.styles';
import { postEntry } from '../../../../api/grocery';
import { DropDown } from '../../../../components/DropDown/DropDown';
import { Modal } from '../../../../components/Modal/Modal';
import { Toggle } from '../../../../components/Toggle/Toggle';

const data = [
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
];

type Props = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  callUpdate: () => void;
};

export const AddModal: React.FC<Props> = ({ modalVisible, setModalVisible, callUpdate }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [priorityValue, setPriorityValue] = useState(1);
  const [isToggleEnabled, setIsToggleEnabled] = useState(false);

  const onCreatePress = async () => {
    await postEntry({ name, priority: priorityValue, status: Number(isToggleEnabled) });
    setModalVisible(!modalVisible);
    setName('');
    setPriorityValue(1);
    setIsToggleEnabled(false);
    callUpdate();
  };

  return (
    <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            editable
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Name"
          />
          <DropDown open={open} value={priorityValue} data={data} setOpen={setOpen} setValue={setPriorityValue} />
          <Toggle isEnabled={isToggleEnabled} offLabel="Ran out" onLabel="Have" setIsEnabled={setIsToggleEnabled} />
          <Pressable style={styles.button} onPress={onCreatePress}>
            <Text style={styles.textStyle}>Create</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
