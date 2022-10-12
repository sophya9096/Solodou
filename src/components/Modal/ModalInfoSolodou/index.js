import React, { PureComponent } from 'react';
import {  View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal'
import { Icon } from 'react-native-elements'
import { WebView } from 'react-native-webview';
import HTML from "react-native-render-html";
import { styles } from './style'

class ModalInfoSolodou extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const  { isVisible, toggleModal, data } = this.props
    console.log('data', data)
    return (
      <View>
        <Modal
          isVisible = {isVisible}
          onBackButtonPress = {toggleModal}
          style = {styles.container}
        >
          <View style = {styles.header}>
            <TouchableOpacity
              style = {styles.btnClose}
              onPress = {toggleModal}
            >
              <Icon 
                name = 'close'
                type = 'material'
                iconStyle = {styles.iconClose}
              />
            </TouchableOpacity>
          </View>
          <View
            style = {styles.content}
          >
            <View style = {{flex: 1}}>
              <WebView
                source = {{uri: data.mobile}}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default ModalInfoSolodou;
