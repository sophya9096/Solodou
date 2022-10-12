import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements'
import { styles } from './style';
import FormGroup from '../../FormGroup';

class NewPassword extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { isVisible, toggleModal, onChangeText, resetPassword, isLoading, resetError } = this.props
    return (
      <View>
        <Modal
          isVisible = {isVisible}
          animationInTiming = {500}
          style = {styles.container}
        >
          <View style = {styles.content}>
              <View style = {styles.header}>
                  <TouchableOpacity 
                    style = {styles.btnClose}
                    onPress = {toggleModal}
                  >
                    <Icon
                      name = 'close'
                      type = 'material'
                    />
                  </TouchableOpacity>
              </View>
              <Text style = {styles.title}>Nouveau mot de passe</Text>
                <FormGroup
                  iconName = 'mail'
                  label = 'Email'
                  onChangeText = {onChangeText}
                />
                <FormGroup 
                  iconName = 'vpn-key'
                  label = 'Mot de passe'
                  onChangeText = {onChangeText}
                />
                <FormGroup 
                  iconName = 'vpn-key'
                  label = 'Confirmer le mot de passe'
                  onChangeText = {onChangeText}
                />
                <Text style = {styles.messageError}>{resetError}</Text>
                <TouchableOpacity 
                  style = {[styles.btn]}
                  onPress = {resetPassword}
                >
                  {
                    isLoading?
                    <ActivityIndicator size = 'large' color = '#fff' />
                      :
                    <Text style = {styles.textBtn}>Modifier</Text>
                  }
                </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

export default NewPassword;
