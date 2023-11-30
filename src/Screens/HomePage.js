import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomePage = ({navigation}) => {

  
  return (
    <View style={styles.container}>
      <Image
      reseizeMode="contain"
     
      />
      <Text style={styles.headerText}>Big Apple Eats, your local NYC Guide</Text>
      <Button
        title="Restaurant List"
        onPress={() => navigation.navigate('RestList')}
        style={styles.button}
      />
      <Button
        title="Contact"
        onPress={() => navigation.navigate('Contact')}
        style={styles.button}
      />
      <Button
        title="Events"
        onPress={() => navigation.navigate('Events')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});

export default HomePage;
