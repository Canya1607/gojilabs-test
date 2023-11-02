import React, { ReactNode } from 'react';
import { Modal as RNModal, TouchableWithoutFeedback } from 'react-native';

type Props = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

export const Modal: React.FC<Props> = ({ modalVisible, setModalVisible, children }) => {
  return (
    <RNModal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>{children}</TouchableWithoutFeedback>
    </RNModal>
  );
};
