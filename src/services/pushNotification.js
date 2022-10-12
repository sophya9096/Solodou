import {requestNotifications} from 'react-native-permissions';
import { PushNotificationIOS } from 'react-native';
import PushNotification from 'react-native-push-notification'
import { store } from '../store/configurestore'
import { update_account } from '../api'


const registerFcmDevice = async () => {
   
    const {status} = await requestNotifications(['alert', 'sound'])
    const user = store.getState().user.user

    if(!user.token){
      return false;
    }
    
    if (status !== 'granted') {
        // alert('No notification permissions!');
        PushNotification.requestPermissions() 
        return;
    }

    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
        onRegister: function(token) {
          console.log('fcm_token', token.token)
          const data = new FormData()
          data.append('fcm_token', token.token)
          // POST the token to your backend server from where you can retrieve it to send push notifications.
          update_account(user, data)
          .then((res) => {
            console.log('update fcm token', res)
          })
          .catch((err) => {
            console.log('err update fcm', err)
          })
        },
        onNotification: function (notification) {
          // process the notification

          // (required) Called when a remote is received or opened, or local notification is opened
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },

        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,

        requestPermissions: true,
      }

    )
}

export default registerFcmDevice
