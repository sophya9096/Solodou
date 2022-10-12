// In App.js in a new project

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import Home from '../../screens/Home';
import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import Lesson from '../../screens/Lesson';
import DrawerNavigator from '../DrawerNavigator';
import { cours } from '../../api/coursApi'
import { color } from '@styles'
import FirstJeux from '../../screens/FirstJeux';
import Profile from '../../screens/Profile';
import OrderSettings from '../../screens/OrderSettings';

const HeaderLeft = (navigation) => {
  return (
    <View style = {styles.contentIcon}>
      <Icon 
        name = 'md-menu'
        type = 'ionicon'
        iconStyle = {styles.icon}
        color = {color.primary}
        onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  )
}


const Stack = createStackNavigator();

class StackNavigator extends React.PureComponent {
  state = {
    initialRoute: 'Home'
  }

  render() {
    const { user } = this.props
    this.state.initialRoute = user.token?'DrawerNavigator':'Home'
    return (
      <Stack.Navigator
        initialRouteName = {this.state.initialRoute}
      >
        <Stack.Screen 
            name="Home" 
            component={Home} 
            options = {{headerShown: false}}
        />
        <Stack.Screen 
            name="SignIn" 
            component={SignIn} 
            options = {{title: 'Connexion'}}
        />
        <Stack.Screen 
            name="SignUp" 
            component={SignUp} 
            options = {{title: 'Inscription'}}
        />
        <Stack.Screen 
            name="Lesson" 
            component={Lesson}
            initialParams = {{cours: cours[0]}}
            options = {{title: 'Test de progression'}}
        />
        <Stack.Screen 
            name="FirstJeux" 
            component={FirstJeux}
            options = {{title: 'jeu 1'}}
        />
        <Stack.Screen 
            name="Profil" 
            component={Profile}
        />
        <Stack.Screen 
            name="OrderSettings" 
            component={OrderSettings}
            options = {{title: 'Paramètres'}}
        />
        <Stack.Screen 
            name="DrawerNavigator" 
            component={DrawerNavigator}
            options = {({navigation}) => ({
              title: 'Menu',
              headerShown: false,
              headerLeft: () => <HeaderLeft {...navigation} />,
              headerTintColor: color.primary
            })}
        />
      </Stack.Navigator>
  );
  }
}

const styles = StyleSheet.create({
  contentIcon: {
    left: 20
  },
  icon: {
    fontSize: 35
  }
});

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  }
}

export default connect(mapStateToProps)(StackNavigator);