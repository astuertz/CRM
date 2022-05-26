import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const PAGE_CONTAINER_PADDING = 5;

  const light = StyleSheet.create({
    root: {
      flex: 1,
    },
    pageContainer: {
      justifyContent: 'flex-start',
      alignItems: 'center',
      flex: 1,
      height: '100%',
      width: '100%',
      backgroundColor: 'lightgrey',
      padding: PAGE_CONTAINER_PADDING,
    },
    elementContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width: '100%',
      borderRadius: 25,
      overflow: 'hidden',
      borderColor: 'black',
      borderWidth: 2,
      marginBottom: 5,
    },
    elementContainerSquare: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      width: '100%',
      overflow: 'hidden',
      borderColor: 'black',
      borderWidth: 2,
      marginBottom: 5,
    },
    bannerContainer: {
      width: WIDTH,
      height: HEIGHT * .1,
      borderColor: 'black',
      borderBottomWidth: 2,
      overflow: 'hidden',
      top: -PAGE_CONTAINER_PADDING,
    },
    banner: {
      width: WIDTH,
      height: HEIGHT * .1,
      resizeMode: 'stretch',
    },
    horizontalRow: {
      flexDirection: 'row',
    },
    optionsRow: {
      flexDirection: 'row',
      borderColor: 'black',
      borderBottomWidth: 0,
      borderTopWidth: 0,
      paddingHorizontal: 40,
      paddingVertical: 10,
    },
    dataScrollView: {
      flexDirection: 'column',
      borderColor: 'black',
      borderBottomWidth: 2,
    },
    dataContainer: {
      flexDirection: 'row',
      height: HEIGHT * .05,
    },
    dataHeaderContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      backgroundColor: 'white',
      borderWidth: 2,
      width: 150,
    },
    dataCellContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      backgroundColor: 'white',
      borderWidth: 1,
      width: 150,
    },
    dataCellContainerActive: {
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'black',
      backgroundColor: '#e6eaf5',
      borderWidth: 1,
      width: 150,
    },
    textDefault: {
        fontSize: 14,
        color: 'black',
    },
    textDefaultBold: {
      fontSize: 14,
      color: 'black',
      fontWeight: 'bold',
    },
    textHeader1: {
      fontSize: 16,
      color: 'black',
      fontWeight: 'bold',
    },
  });

  export default light;