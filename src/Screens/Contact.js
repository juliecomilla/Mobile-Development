import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Contact Us</Text>
      <Text style={styles.text}>Address: 123 Main Street</Text>
      <Text style={styles.text}>Phone: (555) 123-4567</Text>
      <Text style={styles.text}>Email: info@example.com</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ContactPage;
