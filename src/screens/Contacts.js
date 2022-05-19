import React from 'react';
import { View, Text } from 'react-native';
import dark from '../styles/darkMode'
import light from '../styles/lightMode';
import { useSelector } from 'react-redux';

const Contacts = () => {

    const darkMode = useSelector((state) => state.style.darkMode);
    const styles = darkMode ? dark : light;

  return (
    <View style={styles.pageContainer} >
      <Text style={styles.textDefault} >Contacts</Text>
    </View>
  );
}

export default Contacts;