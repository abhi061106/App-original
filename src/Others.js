// HomeServ.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeServ = () => {
  const otherButtons = [
    { label: 'Education', value: 'education' },
    { label: 'Healthcare', value: 'healthcare' },
    { label: 'Technology', value: 'technology' },
    { label: 'Finance', value: 'finance' },
    { label: 'Entertainment', value: 'entertainment' },
    { label: 'Travel', value: 'travel' },
    { label: 'Sports', value: 'sports' },
    { label: 'Fashion', value: 'fashion' },
    { label: 'Food', value: 'food' },
    { label: 'Events', value: 'events' },
  ];

  const handleButtonPress = (item) => {
    // Handle button press based on the item value
    console.log(`Button pressed: ${item.label}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Explore by Category</Text>

      {/* Render other theme buttons */}
      <View style={styles.buttonContainer}>
        {otherButtons.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={styles.button}
            onPress={() => handleButtonPress(item)}
          >
            <Text style={styles.buttonText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db', // Use your preferred color
    padding: 15,
    marginVertical: 10,
    width: '100%',
    borderRadius: 25, // Modified to a circular button
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeServ;
