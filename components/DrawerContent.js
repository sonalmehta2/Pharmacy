import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DrawerContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>Home</Text>
      <Text style={styles.item}>Profile</Text>
      <Text style={styles.item}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default DrawerContent;
