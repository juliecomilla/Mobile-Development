import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const About = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white', // Corrected the typo from "fontcolor" to "color"
    fontWeight: 'bold',
    marginTop: 100,
  }
});

export default About;