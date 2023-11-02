import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GroceryEntryScreen, GroceryListScreen } from '../screens';

type PublicNavParamList = {
  GroceryListScreen: undefined;
  GroceryEntryScreen: undefined;
};

type StackParams = {
  initialRouteName: any;
};

const Stack = createNativeStackNavigator<PublicNavParamList>();

const RoutesContainer = ({ initialRouteName }: StackParams) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GroceryListScreen" component={GroceryListScreen} />
      <Stack.Screen name="GroceryEntryScreen" component={GroceryEntryScreen} />
    </Stack.Navigator>
  );
};

export default RoutesContainer;
