import React, { PureComponent } from 'react';
import {  View, Text, TextInput } from 'react-native';
import { styles } from './style'
import { Icon } from 'react-native-elements';
import { color } from '@styles'

class FormGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const { iconName, label, onChangeText, type} = this.props

    const inputProps = (() => {
      if (type === 'email') {
        return {
          keyboardType: 'email-address',
          autoCorrect: false,
          autoCapitalize: 'none',
        }
      }

      return {}
    })()
    return (
      <View style = {styles.container}>
        <Icon 
            name = {iconName}
            type = "material"
            color = '#fff'
        />
        <TextInput 
            placeholder = {label}
            style = {styles.input}
            placeholderTextColor = '#fff'
            onChangeText = {(value) => onChangeText(value, label)}
            secureTextEntry = {label == 'Mot de passe' || label == 'Confirmer le mot de passe'?true:false}
            {...inputProps}
        />
      </View>
    );
  }
}

export default FormGroup;
