import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  SearchContainer: {
    width: '100%',
    flexDirection: 'row',

    marginLeft: 50,
    marginTop: 10,
    // paddingBottom:10
  },
  SearchInput: {
    width: '90%',

    borderWidth: 1,
    borderRadius: 16,
    paddingLeft: 35,
    borderColor: '#ccc',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  ImageStyle: {
    position: 'absolute',
    height: 25,
    width: 25,
    marginLeft: 5,

    marginTop: 12,
    zIndex: 1,
  },
});
