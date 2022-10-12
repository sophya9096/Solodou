import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';
import { Icon } from 'react-native-elements'
import { color } from '@styles'
import { styles } from './style';
import { DrawerActions } from '@react-navigation/native' 

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation, renderLeft } = this.props
    return (
      <View style = {styles.container}>
        <Icon 
            name = 'menu'
            type = 'material'
            color = {color.primary}
            iconStyle = {styles.iconStyle}
            onPress = {() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <View style = {styles.headerTitle}>
            <Text style = {styles.titleHeader}>Avec Solodou</Text>
        </View>
      </View>
    );
  }
}

export default Header;
