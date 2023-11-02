import 'react-native-get-random-values';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RoutesContainer from './src/navigation/RoutesContainer';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RoutesContainer initialRouteName="GroceryListScreen" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
