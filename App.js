import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ModuleListScreen from './src/components/screens/ModuleListScreen';
import ModuleAddScreen from './src/components/screens/ModuleAddScreen';
import ModuleModifyScreen from './src/components/screens/ModuleModifyScreen';
import ModuleViewScreen from './src/components/screens/ModuleViewScreen';

const Stack = createNativeStackNavigator();

export const App = () => {
    //Initialisations----
    //State--------------
    //Handlers-----------
    //View---------------
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='ModuleListScreen'
        screenOptions = {{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'pink',
        }}
        >

        <Stack.Screen
          name = 'ModuleListScreen'
          component={ModuleListScreen}
          options={{title: 'List modules'}}
        />
        <Stack.Screen
          name = 'ModuleAddScreen'
          component={ModuleAddScreen}
          options={{title: 'Add Module'}}
        />
        <Stack.Screen
          name = 'ModuleViewScreen'
          component={ModuleViewScreen}
          options={{title: 'View Module'}}
        />
        <Stack.Screen
          name = 'ModuleModifyScreen'
          component={ModuleModifyScreen}
          options={{title: 'Modify Module'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;