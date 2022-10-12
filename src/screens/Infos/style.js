import {StyleSheet} from 'react-native';
import {color} from '@styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    elevation: 3,
  },
  contentMenu: {
    width: '70%',
    zIndex: 2,
    transform: [{rotateX: '170deg'}],
    position: 'absolute',
    top: -10,
    right: 0,
    elevation: 5,
  },
  iconHelp: {
    transform: [{rotateX: '-170deg'}],
    color: color.primary,
    fontSize: 30,
  },
  contentTitleBoc: {
    padding: 20,
    width: '100%',
    borderRadius: 5,
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6e9f7',
  },
  titleText: {
    color: color.primary,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 25,
  },
  card: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    marginHorizontal: 1,
    marginVertical: 10,
    borderRadius: 5,
  },
  cardImage: {
    height: 200,
    width: '100%',
  },
  cardContent: {
    padding: 20,
  },
  cardContentTitle: {
    fontSize: 20,
    marginVertical: 20,
  },
  cardContentSubTitle: {
    color: '#777',
  },
  contentTemoignage: {
    width: '95%',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 10,
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 1,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
  titleTemoignage: {
    fontSize: 20,
    marginTop: 10,
  },
  subTitleTemoignage: {
    color: color.primary,
    margin: 10,
  },
  headerImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  modalContainer: {
    flex: 1,
  },
  contentModal: {
    backgroundColor: '#fff',
    flex: 1,
  },
  imageModal: {
    height: 500,
    width: '100%',
  },
  btnClose: {
    height: 40,
    width: 40,
    margin: 10,
  },
});
