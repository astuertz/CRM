import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import dark from './src/styles/darkMode';
import light from './src/styles/lightMode';
import { useSelector } from 'react-redux';
import Navigation from './src/routes/navigation';

const App = () => {

  const darkMode = useSelector((state) => state.style.darkMode);
  const styles = darkMode ? dark : light;


  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};


export default App;