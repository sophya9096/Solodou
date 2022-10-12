import React, { PureComponent } from 'react';
import {  View, Text, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from './style'
import { color } from '@styles'

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props
    return (
      <View
        style = {styles.container}
      >
        <StatusBar backgroundColor = {color.secondary}/>
        {/*<TouchableOpacity
            style = {[styles.btn, styles.bg]}
            onPress = {() => navigation.push('Lesson')}
        >
          <Text style = {styles.textBtn}>Première visite ?</Text>
        </TouchableOpacity>*/}
        <TouchableOpacity
          style = {[styles.btn, styles.bg]}
          onPress = {() => navigation.push('SignUp')}
        >
            <Text><Icon style={styles.icon} size={16} name="login" type="material" color="#fff"/> </Text>
            <Text style = {styles.textBtn}>Inscription</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style = {[styles.btn,styles.whiteBg]}
            onPress = {() => navigation.push('SignIn')}
        >
            <Text><Icon style={styles.icon} size={16} name="person-outline" type="material" color={color.secondary}/> </Text>
            <Text style = {styles.textBtncon}>Connexion</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
