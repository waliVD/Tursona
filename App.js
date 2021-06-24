import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import bottomNav from './Components/MyBottomNav/bottomNav';
import EditAccount from './Screens/EditAccount';
import UpgradeAccount from './Screens/UpgradeAccount';
import DeleteAccount from './Screens/DeleteAccount';
import SendLogs from './Screens/SendLogs';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="bottomNav"
          component={bottomNav}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EditAccount"
          component={EditAccount}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="UpgradeAccount"
          component={UpgradeAccount}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DeleteAccount"
          component={DeleteAccount}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SendLogs"
          component={SendLogs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
