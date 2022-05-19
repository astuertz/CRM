import {StyleSheet} from 'react-native';

  const light = StyleSheet.create({
    root: {
      flex: 1,
    },
    pageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: 'darkgrey',
    },
    textDefault: {
        fontSize: 14,
        color: 'black',
    },
  });

  export default light;