import { View, Text, Switch } from 'react-native';

import { styles } from './Toggle.styles';
import Colors from '../../constants/colors';

type Props = {
  isEnabled: boolean;
  onLabel?: string;
  offLabel?: string;
  setIsEnabled: (enabled: boolean) => void;
};

export const Toggle: React.FC<Props> = ({ isEnabled, onLabel, offLabel, setIsEnabled }) => {
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={styles.container}>
      <Text>{offLabel}</Text>
      <Switch
        style={styles.switch}
        trackColor={{ false: Colors.jumbo, true: Colors.malibu }}
        thumbColor={isEnabled ? Colors.energyYellow : Colors.wildSand}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text>{onLabel}</Text>
    </View>
  );
};
