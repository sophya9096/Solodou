import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements'
import { styles } from './style';
import FormGroup from '../../FormGroup';

class VerifyCode extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { isVisible, toggleModal, onChangeText, verifyCode, email, messageError, isLoading } = this.props
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
              <Text style = {styles.title}>Code de verification</Text>
              <Text style = {styles.subTitle}>Un code vous a été envoyé a l'adresse {email}.completer ce fomulaire pour verifier votre identité  </Text>
                <FormGroup
                  iconName = 'edit'
                  label = 'Code'
                  onChangeText = {onChangeText}
                />
                <Text style = {styles.messageError}>{messageError}</Text>
                <TouchableOpacity 
                  style = {[styles.btn]}
                  onPress = {verifyCode}
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

export default VerifyCode;
