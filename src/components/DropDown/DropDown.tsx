import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import { styles } from './DropDown.styles';

type Props = {
  open: boolean;
  value: any;
  data: any;
  setOpen: any;
  setValue: any;
};

export const DropDown: React.FC<Props> = ({ data, open, value, setOpen, setValue }) => {
  return (
    <DropDownPicker
      style={styles.dropdown}
      containerStyle={styles.dropdownContainer}
      open={open}
      value={value}
      items={data}
      setOpen={setOpen}
      setValue={setValue}
      modalProps={{ transparent: true }}
      modalContentContainerStyle={{ backgroundColor: '#ffffff' }}
    />
  );
};
