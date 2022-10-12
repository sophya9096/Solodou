import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { styles } from './style'
import { get_game } from '../../api'
import Loading from '../../components/Loading';

class FirstJeux extends PureComponent {
  
  state = {
    urlGame: '',
    isLoading: false
  };

  componentDidMount() {
    this.setState({isLoading: true})
    get_game(1,1)
    .then((res) => {
      if(res.data){
        this.setState({urlGame: res.data.content})
      }
    })
  }

  render() {
    const { isLoading, urlGame } = this.state
    const { navigation } = this.props
    return (
      <View style = {styles.container}>
          {
            isLoading &&
            <Loading />
          }
          <WebView
            onLoad = {() => (
              setTimeout(() => {
                this.setState({isLoading: false})
              }, 3000)
            )}
            source={{ uri: urlGame }}
          />
        <TouchableOpacity
          style = {styles.btn}
          onPress = {() => navigation.push('SignUp')}
        >
          <Text style = {styles.textBtn}> Terminer </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default FirstJeux;
