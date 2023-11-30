import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const eventsData = [
  {
    id: '1',
    title: 'Live Music Night',
    description: 'Join us for a night of live music!',
    
  
  },
  {
    id: '2',
    title: 'Food Tasting Event',
    description: 'Explore our new menu items with a special food tasting event.',

  },

];

const Events = () => {
  const renderEventItem = ({ item }) => (
    <View style={styles.eventContainer}>
      <Image source={item.image} style={styles.eventImage} />
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text style={styles.eventDescription}>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      data={eventsData}
      keyExtractor={(item) => item.id}
      renderItem={renderEventItem}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  eventContainer: {
    marginBottom: 20,
  },
  eventImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  eventDescription: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Events;
