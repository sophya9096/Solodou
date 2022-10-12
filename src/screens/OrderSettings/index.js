import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'
import * as Progress from 'react-native-progress';
import { styles } from './style'
import { color } from '@styles'
import LessonValide from '../../components/Modal/LessonValide';

class OrderSettings extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  toggleModal = () => {
    this.setState({isVisible: !this.state.isVisible})
  }

  handleOpenLink(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: ");
      }
    });
  }

  handleDownload = () => {
    const { infosUser } = this.props
    if(infosUser.course_level == 1){
      const url = 'https://solodou.lalim.tech/alpha/assets/pdf/Exemplaire_Solodou_B-A-BA_1.pdf'
      this.handleOpenLink(url)
    }else {
      const url = 'https://solodou.lalim.tech/alpha/assets/pdf/Exemplaire_Solodou_B-A-BA_2.pdf'
      this.handleOpenLink(url)
    }
  }

  render() {
    const { infosUser } = this.props
    return (
      <View style = {styles.container}>
        <LessonValide
          isVisible = {this.state.isVisible}
          toggleModal = {this.toggleModal}
          data = {infosUser.assimilated}
        />
        <View 
          style = {styles.row}
        >
            <Icon 
                name = 'school'
                type = 'material'
                iconStyle = {styles.iconStyle}
            />
            <View style = {styles.blocText}>
                <Text style = {styles.title}>Leçons validées </Text>
                <Text style = {styles.subTitle}>{infosUser.points}/{infosUser.total_courses}</Text>
                <TouchableOpacity 
                  style = {styles.btnMore}
                  onPress = {this.toggleModal}
                >
                  <Text style = {styles.textBtn}>Détails</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        <View style = {styles.row}>
            <Icon 
                name = 'grade'
                type = 'material'
                iconStyle = {styles.iconStyle}
            />
            <View style = {styles.blocText}>
                <Text style = {styles.title}>Score des jeux</Text>
                <Text style = {styles.subTitle}>{infosUser.score}/20</Text>
            </View>
        </View>
        <View style = {styles.row}>
            <Icon 
                name = 'md-trending-up'
                type = 'ionicon'
                iconStyle = {styles.iconStyle}
            />
            <View style = {styles.blocText}>
                <Text style = {styles.title}>Progression </Text>
                <Progress.Bar 
                  progress={(infosUser.points/infosUser.total_courses)} 
                  width={200}
                  color = {color.primary}
                  style = {{marginTop: 10}} 
                  endAngle = {100}
                />
            </View>
        </View>
        <TouchableOpacity 
          style = {styles.btnDownload}
          onPress = {this.handleDownload}
        >
          <Icon 
            name = 'cloud-download'
            type = 'material'
            iconStyle = {styles.iconStyle}
          />
          <Text style = {styles.textBtn}>Téléchager le manuel</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      user: state.user.user,
      infosUser: state.infosUser.infosUser,
      selectedLevel: state.lesson.levelSelected,
    }
}

export default connect(mapStateToProps)(OrderSettings);
