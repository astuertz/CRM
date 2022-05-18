import React from 'react';
import {View, Text,} from 'react-native';
import styles from './src/styles';

const App = () => {

  return (
    <View style={styles.pageContainer} >
      <Text style={styles.textDefault} >Hello World!</Text> 
    </View>
  );
};


export default App;