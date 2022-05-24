import React from 'react';
import { View, Text, Image } from 'react-native';
import dark from '../styles/darkMode'
import light from '../styles/lightMode';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const Contacts = () => {

    const darkMode = useSelector((state) => state.style.darkMode);
    const styles = darkMode ? dark : light;

  return (
    <View style={styles.pageContainer} >
      <Header />
      <View style={[styles.elementContainer, {height: 200,}]} >
        <Text style={styles.textDefault} >Contacts</Text>
      </View>        
    </View>
  );
}

export default Contacts;