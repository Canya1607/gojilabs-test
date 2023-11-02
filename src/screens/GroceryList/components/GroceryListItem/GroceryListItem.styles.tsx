import { StyleSheet } from 'react-native';

import Colors from '../../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 4,

    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  delete: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  deleteIcon: {
    width: 16,
    height: 16,
  },
});
