import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import * as data from '../../db.json'



const RestList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRestaurants(data['Restaurants'])
    setLoading(false)


  }, []);

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView>
          {restaurants.map(restaurant => (
            <View key={restaurant.Id} style={styles.restaurantContainer}>
              <Text style={styles.name}>{restaurant.Name}</Text>
              <Text style={styles.cuisine}>{restaurant.Cuisine}</Text>
              <Text style={styles.about}>{restaurant.About}</Text>
              <Image source={{ uri: restaurant.Image }} style={styles.image} />
              <Text style={styles.address}>{restaurant.Address}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  restaurantContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cuisine: {
    fontSize: 16,
    color: '#555',
  },
  about: {
    fontSize: 14,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  address: {
    fontSize: 14,
    color: '#888',
  },

});

export default RestList;
