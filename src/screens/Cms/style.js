import {StyleSheet} from 'react-native';
import {color} from '@styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  contentTitleBoc: {
    padding: 10,
    width: '100%',
    height: 60,
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c575cf',
  },
  titleText: {
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 20,
  },
  textBtn: {
    color: color.primary,
  },
  btn: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: 20,
  },
});
