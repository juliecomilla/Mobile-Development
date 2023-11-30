import { AppRegistry, View } from 'react-native';
import React from "react";
import Header from './src/components/Header';
import RestList from './RestList';



const App = () => {
  return ( 
    <View>
        <Header title={"Big Apple Eats"}/>
        <RestList/>
   </View>
  )
}

AppRegistry.registerComponent("BigAppleEats", () => App)

export default App;