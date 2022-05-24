import { View, Text, Image } from 'react-native'
import React from 'react'
import dark from '../styles/darkMode'
import light from '../styles/lightMode';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const Home = () => {

  const darkMode = useSelector((state) => state.style.darkMode);
  const styles = darkMode ? dark : light;

  return (
    <View style={styles.pageContainer} >
      <Header />
      <View style={[styles.elementContainer, {height: 200,}]} >
        <Text style={styles.textDefault} >Home</Text>
      </View>
    </View>
  );
}

export default Home;