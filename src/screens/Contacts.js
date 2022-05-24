import React from 'react';
import { View, } from 'react-native';
import dark from '../styles/darkMode'
import light from '../styles/lightMode';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Map from '../data/map';

const Contacts = () => {

    const darkMode = useSelector((state) => state.style.darkMode);
    const styles = darkMode ? dark : light;

  return (
    <View style={styles.pageContainer} >
      <Header />
      <View style={[styles.elementContainerSquare, {height: 200,}]} >
        <Map />
      </View>        
    </View>
  );
}

export default Contacts;