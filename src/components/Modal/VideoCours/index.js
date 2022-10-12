import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal'
import YoutubePlayer from "react-native-youtube-iframe";
import { styles } from './style'
import { Icon } from 'react-native-elements';
import {color} from '@styles'

class VideoCours extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { isVisible, toggleModal, videoId} = this.props
    return (
      <View>
        <Modal
            isVisible = {isVisible}
            animationIn = 'zoomIn'
            style = {styles.container}
            onBackButtonPress = {() => toggleModal()}
            onBackdropPress = {() => toggleModal()}
        >
            <View style = {styles.content}>
                <View style = {styles.header}>
                  <TouchableOpacity
                    onPress = {() => toggleModal()}
                  >
                    <Icon
                      type = 'material'
                      name = 'close' 
                      color = {color.primary}
                    />
                  </TouchableOpacity>
                </View>
                <View style = {styles.video}>
                  <YoutubePlayer
                      height={300}
                      videoId={videoId}
                  />
                </View>
            </View>
        </Modal>
      </View>
    );
  }
}

export default VideoCours;
