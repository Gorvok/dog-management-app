import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { REACT_APP_BACKEND_URL } from '@env';
import { styles } from "../styles/Styles";
import Navbar from "../components/Navbar";

const API_URL = REACT_APP_BACKEND_URL || 'http://localhost:5001';

const HomeScreen = ({ navigation }) => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    try {
      const response = await axios.get(`${API_URL}/dogs`);
      setDogs(response.data);
    } catch (error) {
      console.error('Error fetching dogs:', error);
    }
  };

  const deleteDog = async (id) => {
    try {
      await axios.delete(`${API_URL}/dogs/${id}`);
      setDogs(dogs.filter(dog => dog._id !== id));
    } catch (error) {
      console.error('Error deleting dog:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <Button title="Add Dog" onPress={() => navigation.navigate('Add Dog')} />
      <Text>Dog List</Text>
      <FlatList
        data={dogs}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit Dog', { id: item._id })}>
            <View style={styles.listItem}>
              <Text>{item.name}</Text>
              <Button title="Delete" onPress={() => deleteDog(item._id)} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
