import React, { PureComponent } from 'react';
import {  View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal'
import { Icon } from 'react-native-elements'
import { styles } from './style'

class LessonValide extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const  { isVisible, toggleModal, data } = this.props
    console.log('assimilated', data)
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
            <Text style = {styles.headerTitle}>Leçons validés</Text>
          </View>
          <View
            style = {styles.content}
          >
            {
                data.map((lesson) => {
                    return(
                        <View style = {styles.menuItem}>
                            <Text style = {styles.titleMenu}>{lesson.title}</Text>
                        </View>
                    )
                })
            }
          </View>
        </Modal>
      </View>
    );
  }
}

export default LessonValide;
