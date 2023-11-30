import { AppRegistry, View } from 'react-native';
import React from "react";
import Contact from './src/Screens/Contact';
import RestList from './src/Screens/RestList';
import HomePage from './src/Screens/HomePage';
import Events from './src/Screens/Events';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        options={{title:"Big Apple Eats"}}
         name="HomePage" component={HomePage} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="RestList" component={RestList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;