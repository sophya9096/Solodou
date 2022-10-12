import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigations/StackNavigator';
import { store, persistor} from './src/store/configurestore'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {requestMultiple, PERMISSIONS, RESULTS, checkNotifications} from 'react-native-permissions';
import registerFcmDevice from './src/services/pushNotification'

export default class App extends React.PureComponent {

  componentDidMount() {
    this.checkPermission()
    checkNotifications().then(({status, settings}) => {
      console.log('status', status)
    });
  }

  checkPermission() {
    requestMultiple([PERMISSIONS.IOS.CAMERA,PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,])
    .then((result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch((error) => {
      // …
    });
  }
  render() {
    return (
      <Provider store = {store}>
        <PersistGate persistor = {persistor}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}