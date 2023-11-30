import { AppRegistry, View } from 'react-native';
import React from "react";
import Header from './src/components/Header';


const Header = () => {


  return ( 
    <View>
        <Header title={"Big Apple Eats"}/>
      
   </View>
  )
}

AppRegistry.registerComponent("BigAppleEats", () => Header)

export default Header;