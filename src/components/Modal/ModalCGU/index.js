import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'
import { Icon } from 'react-native-elements'
import { WebView } from 'react-native-webview';
import { styles } from './style'

class ModalCGU extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { content, isVisible, toggle } = this.props
    return (
      <View>
        <Modal
          isVisible = {isVisible}
          style = {styles.container}
        >
          <View style = {styles.header}>
            <TouchableOpacity
              onPress = {toggle}
            >
              <Icon 
                name = 'close'
                type = 'material'
                iconStyle = {styles.iconClose}
              />
            </TouchableOpacity>
          </View>
          <View style = {styles.content}>
            <View style = {styles.contentTitleBoc}>
              <Text style = {styles.titleText}>CONDITIONS GÉNÉRALES D'UTILISATION</Text>
            </View>
            <View style = {{flex: 1}}>
              <WebView
                source = {{html: content}}
                textZoom = {200}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ModalCGU;
