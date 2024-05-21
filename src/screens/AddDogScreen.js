import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import { REACT_APP_BACKEND_URL } from '@env';
import { styles } from '../styles/Styles';
import Navbar from "../components/Navbar";

const API_URL = REACT_APP_BACKEND_URL || 'http://localhost:5001';

const AddDogScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');

  const handleAddDog = async () => {
    try {
      await axios.post(`${API_URL}/dogs`, { name, breed, age });
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error adding dog:', error);
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
      <TextInput style={styles.input} value={age} onChangeText={setAge} keyboardType="numeric" />
      <Button title="Add Dog" onPress={handleAddDog} />
    </View>
  );
};

export default AddDogScreen;
