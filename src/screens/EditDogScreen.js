import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';
import { styles } from '../styles/Styles';
import Navbar from "../components/Navbar";

const API_URL = Config.REACT_APP_BACKEND_URL || 'http://localhost:5001';

const EditDogScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    fetchDog();
  }, []);

  const fetchDog = async () => {
    try {
      const response = await axios.get(`${API_URL}/dogs/${id}`);
      const dog = response.data;
      setName(dog.name);
      setBreed(dog.breed);
      setAge(dog.age.toString());
    } catch (error) {
      console.error('Error fetching dog:', error);
    }
  };

  const handleEditDog = async () => {
    try {
      await axios.patch(`${API_URL}/dogs/${id}`, { name, breed, age });
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error updating dog:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Navbar />
      <Text>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text>Breed</Text>
      <TextInput style={styles.input} value={breed} onChangeText={setBreed} />
      <Text>Age</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Button title="Update Dog" onPress={handleEditDog} />
    </View>
  );
};

export default EditDogScreen;
