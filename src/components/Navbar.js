import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/Styles';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.navItem}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Add Dog')} style={styles.navItem}>
        <Text>Add Dog</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
