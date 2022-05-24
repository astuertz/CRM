import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

  const dark = StyleSheet.create({
    root: {
      flex: 1,
    },
    pageContainer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: 'darkgrey',
    },
    elementContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#121212',
      width: '98%',
      borderRadius: 25,
      overflow: 'hidden',
      borderColor: 'lightblue',
      borderWidth: 2,
      margin: 3,
    },
    horizontalRow: {
      flexDirection: 'row',
    },
    bannerContainer: {
      width: WIDTH,
      height: HEIGHT * .1,
      borderColor: 'lightblue',
      borderBottomWidth: 2,
      overflow: 'hidden',
    },
    banner: {
      width: WIDTH,
      height: HEIGHT * .1,
      resizeMode: 'stretch',
    },
    textDefault: {
        fontSize: 14,
        color: 'white',
    },
  });

  export default dark;