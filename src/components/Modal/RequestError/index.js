import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './style';
import { Icon } from 'react-native-elements';

class RequestError extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { isVisible, toggleModal, messageError } = this.props
    return (
      <View>
        <Modal
          isVisible = {isVisible}
          animationIn = "zoomIn"
          onBackButtonPress = {toggleModal}
          onBackdropPress = {toggleModal}
          style = {styles.container}
        >
          <View style = {styles.content}>
              <Icon 
                name = "warning"
                type = "material"
                iconStyle = {styles.iconStyle}
              />
              <Text style = {styles.subTitle}>{messageError}</Text>
          </View>
        </Modal>
      </View>
    );
  }
}

export default RequestError;
