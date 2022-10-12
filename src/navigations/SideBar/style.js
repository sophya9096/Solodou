import {StyleSheet} from 'react-native';
import {color} from '@styles';

export const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  headerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 120,
    borderBottomColor: '#f3f3f3',
    borderBottomWidth: 1,
  },
  titleHeader: {},
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 70,
  },
  sousMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  menuItemContent: {
    flex: 1,
  },
  iconMenuItem: {
    color: color.primary,
    marginRight: 10,
  },
  menuItemText: {
    color: '#777',
    fontSize: 16,
  },
  iconMeniItemLeft: {
    color: '#777',
  },
  avatar: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 35,
    marginRight: 10,
  },
  ppStyle: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  iconAvatar: {
    fontSize: 40,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  btn: {
    height: 45,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginHorizontal: 2,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    marginVertical: 2,
  },
  textBtn: {
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    fontSize: 20,
  },
  btnRow1: {
    backgroundColor: '#ecd3f0',
  },
  btnRow2: {
    backgroundColor: '#fff',
  },
  btnAssimilated: {
    backgroundColor: '#55efc4',
  },
  colorBtnRow1: {
    color: '#fff',
  },
  colorBtnRow2: {
    color: color.primary,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  divided: {
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
  },
});
