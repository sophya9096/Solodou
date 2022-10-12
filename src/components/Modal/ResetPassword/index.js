import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements'
import { styles } from './style';
import FormGroup from '../../FormGroup';

class ResetPassword extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { isVisible, toggleModal, onChangeText, sendEmail, isLoading } = this.props
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
              <Text style = {styles.title}>Mot de passe oublié</Text>
              <Text style = {styles.subTitle}>Renseigner votre adresse email. Un code sera envoyé a cette adresse pour confirmer votre identité. </Text>
                <FormGroup
                  iconName = 'mail'
                  label = 'Email'
                  onChangeText = {onChangeText}
                />
                <TouchableOpacity 
                  style = {[styles.btn]}
                  onPress = {sendEmail}
                >
                  {
                    isLoading?
                    <ActivityIndicator size = 'large' color = '#fff' />
                    :
                    <Text style = {styles.textBtn}>Continuer</Text>
                  }
                </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ResetPassword;
