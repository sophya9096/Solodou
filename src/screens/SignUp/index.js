import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PhoneInput from 'react-native-phone-input'
import CountryPicker, { FlagButton } from 'react-native-country-picker-modal'
import AsyncStorage from '@react-native-community/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { styles } from './style'
import FormGroup from '../../components/FormGroup';
import { register, getFaqs } from '../../store/actions'
import { SET_MESSAGE_ERROR } from '../../store/actions/types'
import ModalCGU from '../../components/Modal/ModalCGU'
import { getFaq } from '../../api'

class SignUp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isVisibleFlagButton: false,
      gender: 'male',
      isLoading: false,
      cgu: '',
      countryCode: '+33',
      cca2: 'FR',
      level: 1
    };
  }

  componentDidMount() {
    this.getCGU()
    this.getDataLevel()
  }


getDataLevel = async () => {
  try {
    const value = await AsyncStorage.getItem('Level')
    if(value !== null) {
      this.setState({level: value})
      console.log('level', value)
    }
  } catch(e) {
    // error reading value
  }
}


  onPressFlag = () => {
    this.setState({isVisibleFlagButton: !this.state.isVisibleFlagButton})
  }

  selectCountry(country){
      this.phone.selectCountry(country.cca2.toLowerCase())
      this.setState({
        cca2: country.cca2,
        isVisibleFlagButton: false,
        countryCode: '+' + country.callingCode[0]
      })
  }

  getCGU() {
    getFaq()
    .then((res) => {
      if(res.data[5]){
        this.setState({cgu: res.data[5].body})
      }
    })
  }

  toggleModal = () => {
    this.setState({isVisible: !this.state.isVisible})
  }

  handleChange = (value, label) => {
    if(label == 'Nom'){
      this.setState({name: value})
    }
    else if(label == 'Prénom'){
      this.setState({lastname: value})
    }
    else if(label == 'Numéro'){
      this.setState({phone_number: value})
    }
    else if(label == 'Mot de passe'){
      this.setState({password: value})
    }
    else if(label == 'Confirmer le mot de passe'){
      this.setState({password_confirmation: value})
    }
    else if(label == 'Email'){
      this.setState({email: value})
    }
  }

  signUp = async() => {
    this.setState({isLoading: true})
    const { navigation, register, dispatch } = this.props
    const { gender, name, lastname, phone_number, email, password, password_confirmation, cca2, level } = this.state
    if(!gender || !name || !lastname || !phone_number || !email || !password || !password_confirmation ){
      dispatch({
        type: SET_MESSAGE_ERROR,
        value: {
          invalidParam: ['Veuillez remplir tous les champs']
        }
      })
      this.setState({isLoading: false})
      return;
    }

    try {
      const data = new FormData()
      data.append('gender', gender)
      data.append('name', name)
      data.append('email', email)
      data.append('lastname', lastname)
      data.append('phone_number', phone_number)
      data.append('phone_code', cca2)
      data.append('level', level)
      data.append('password', password)
      data.append('password_confirmation', password_confirmation)
      console.log('data', data)
      const res = await register(data, navigation)
    } catch (e) {
      console.error(e)
    } finally {
      this.setState({isLoading: false})
    }
}

  render() {
    const { navigation, errorMessage } = this.props
    const { gender, isLoading, cgu, isVisibleFlagButton, cca2 } = this.state
    return (
      <KeyboardAwareScrollView
        style = {styles.container}
        keyboardShouldPersistTaps = 'always'
      >
        <ModalCGU
          isVisible = {this.state.isVisible}
          toggle = {this.toggleModal}
          content = {cgu}
        />
        {/* <View style = {styles.segmentStyle}>
          <TouchableOpacity style = {styles.btnSegment}>
            <Icon
              type = 'material'
              name = 'person'
              color = '#fff'
            />
            <Text style = {styles.textBtn}>Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.btnSegment}>
            <Icon
              type = 'material'
              name = 'person'
              color = '#fff'
            />
            <Text style = {styles.textBtn}>Inscription</Text>
          </TouchableOpacity>
        </View> */}
        <View style = {styles.row}>
          <View style = {[styles.row,{flex: 1}]}>
            <RadioButton
              value="male"
              status={ gender === 'male' ? 'checked' : 'unchecked' }
              onPress={() => this.setState({gender: 'male'})}
            />
            <View>
              <Text>Homme</Text>
            </View>
          </View>
          <View style = {[styles.row, {flex: 1}]}>
            <RadioButton
              value="female"
              status={ gender === 'female' ? 'checked' : 'unchecked' }
              onPress={() => this.setState({gender: 'female'})}
            />
            <View>
              <Text>Femme</Text>
            </View>
          </View>
        </View>
        <FormGroup
          iconName = 'person'
          label = 'Nom'
          onChangeText = {this.handleChange}
        />
        <FormGroup
          iconName = 'person'
          label = 'Prénom'
          onChangeText = {this.handleChange}
        />
        <PhoneInput
            initialCountry = 'fr'
            value = {this.state.countryCode}
            ref={(ref) => { this.phone = ref; }}
            onPressFlag={this.onPressFlag}
            onChangePhoneNumber = {(value) => this.handleChange(value, 'Numéro')}
            style = {styles.input}
            textStyle = {{color: '#fff'}}
        />
        <CountryPicker
            visible = {isVisibleFlagButton}
            onSelect={(value)=> this.selectCountry(value)}
            translation='fr'
            renderFlagButton = {() => <FlagButton />}
            cca2={cca2}
        />
        <FormGroup
          iconName = 'mail'
          label = 'Email'
          onChangeText = {this.handleChange}
          type="email"
        />
        <FormGroup
          iconName = 'vpn-key'
          label = 'Mot de passe'
          onChangeText = {this.handleChange}
        />
        <FormGroup
          iconName = 'vpn-key'
          label = 'Confirmer le mot de passe'
          onChangeText = {this.handleChange}
        />
        {
          errorMessage.invalidParam &&
          errorMessage.invalidParam.map((item, index) => {
            return(
              <Text style = {styles.textError}>{index+1}-{item}</Text>
            )
          })
        }
        <View style = {styles.contentCGU}>
          <Text>En poursuivant vous acceptez </Text>
          <TouchableOpacity
            onPress = {this.toggleModal}
          >
            <Text style = {styles.textBtnCGU}>les conditions générales d'utilisation de l'application</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress = {() => this.signUp()}
          style = {[styles.btn, styles.bg, {opacity: isLoading?0.2:1}]}
          disabled = {isLoading?true:false}
        >
          {
            isLoading?
            <ActivityIndicator size = 'large' color = '#000' />
            :
            <Text style = {styles.textBtn}>Inscription</Text>
          }
        </TouchableOpacity>

        <View style = {styles.footer}>
          <Text>Vous avez déja un compte? </Text>
          <TouchableOpacity
            onPress = {() => navigation.push('SignIn')}
          >
            <Text style = {styles.textFooter}>Connectez-vous</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.loading.isLoading,
    errorMessage: state.message.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({register}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
