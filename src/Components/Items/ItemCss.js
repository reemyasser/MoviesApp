import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  containeritem: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 10,
    margin: 10,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 19,
  },
  textcontainer: {
    width: '40%',
  },
  favorite: {
    marginLeft: 20,
    marginBottom: 10,

    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  deletefav: {
    marginLeft: 40,
    marginTop: 10,
    alignItems: 'flex-start',
  },
  BtnLike: {},
  imagemovie: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
  },
  movieName: {
    width: '100%',
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  movieOverview: {
    marginTop: 10,
    marginBottom: 10,
  },
});
