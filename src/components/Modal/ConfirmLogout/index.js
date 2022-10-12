import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './style';

class ConfirmLogout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { isVisible, toggleModal, logOut } = this.props
    return (
      <View>
        <Modal
          isVisible = {isVisible}
          animationIn = "zoomIn"
          style = {styles.container}
        >
          <View style = {styles.content}>
              <Text style = {styles.title}>Déconnexion</Text>
              <Text style = {styles.subTitle}>Souhaitez-vous être deconnecté de cette application?</Text>
              <View style = {styles.footer}>
                <TouchableOpacity 
                  style = {[styles.btn, styles.btn_danger]}
                  onPress = {toggleModal}
                >
                  <Text style = {styles.textBtn}>Non</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style = {[styles.btn, styles.btn_success]}
                  onPress = {logOut}
                >
                  <Text style = {styles.textBtn}>Oui</Text>
                </TouchableOpacity>
              </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ConfirmLogout;
