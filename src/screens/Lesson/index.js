import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity, StatusBar, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { styles } from './style'
import { color } from '@styles'
import { getSingleLesson } from '../../api'
import { WebView } from 'react-native-webview';
import Loading from '../../components/Loading';
import RequestError from '../../components/Modal/RequestError';

class Lesson extends PureComponent {
  constructor(props) {
    super(props);
    console.log({props})
    this.state = {
      isLoading: false,
      urlWebview: '',
      isVisibleModal: false
    };
  }

  componentDidMount() {
    this.setState({isLoading: true})
    getSingleLesson(1)
    .then((res) => {
      debugger
      if(res.data){
        this.setState({urlWebview: res.data.content})
      }
    })
  }

  storeDataLevel = async (value) => {
    try {
      await AsyncStorage.setItem('Level', JSON.stringify(value))
    } catch (e) {
      // saving error
    }
  }

  toggleModal = () => {
    this.setState({
      messageError: '',
      isVisibleModal: !this.state.isVisibleModal
    })
  }

  render() {
    const { isLoading, urlWebview, messageError, isVisibleModal } = this.state
    const { navigation } = this.props
    return (
      <View style = {styles.container}>
        <SafeAreaView >
          <StatusBar backgroundColor = {color.primary} />
            {
              isLoading &&
              <Loading />
            }
            <RequestError
              isVisible = {isVisibleModal}
              messageError = {messageError}
              toggleModal = {this.toggleModal}
            />
            <WebView
              onLoad = {() => (
                setTimeout(() => {
                  this.setState({isLoading: false})
                }, 3000)
              )}
              cacheEnabled = {false}
              cacheMode = 'LOAD_NO_CACHE'
              source={{ uri: 'https://solodou.lalim.tech/b-a-ba-1/lesson/test/game'}}
              onMessage = {(data) => {
                const res = JSON.parse(data.nativeEvent.data)
                if(!res.success){
                  this.setState({
                    messageError: res.message,
                    isVisibleModal: !this.state.isVisibleModal
                  })
                }else{
                  this.storeDataLevel(res.level)
                  navigation.push('SignUp')
                }
                console.log('data', data)
              }}
            />
          </SafeAreaView>
      </View>
    );
  }
}

export default Lesson;
