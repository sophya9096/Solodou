import React, { PureComponent } from 'react';
import {  View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { color } from '@styles'

class Loading extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <ActivityIndicator
            size = 'large'
            color = {color.primary}
            style = {styles.loading}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position:'absolute'
    },
    loading: {
        backgroundColor: '#fff',
        height: 60,
        width: 60,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 3
    }
});

export default Loading;
