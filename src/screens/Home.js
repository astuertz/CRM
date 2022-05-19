import { View, Text } from 'react-native'
import React from 'react'
import dark from '../styles/darkMode'
import light from '../styles/lightMode';
import { useSelector } from 'react-redux';

const Home = () => {

  const darkMode = useSelector((state) => state.style.darkMode);
  const styles = darkMode ? dark : light;

  return (
    <View style={styles.pageContainer} >
      <Text style={styles.textDefault} >Home</Text>
    </View>
  );
}

export default Home;