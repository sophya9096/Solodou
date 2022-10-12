import React, { PureComponent } from 'react';
import { View, Text, Switch, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginButton
} from 'react-native-fbsdk'
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';
import FormGroup from '../../components/FormGroup';
import { styles } from './style';
import { auth, loginFacebook } from '../../store/actions'
import { SET_ERROR_CONNECT } from '../../store/actions/types'
import ResetPassword from '../../components/Modal/ResetPassword';
import { sendcode, verifycode, reset_password } from '../../api'
import VerifyCode from '../../components/Modal/VerifyCode';
import NewPassword from '../../components/Modal/NewPassword';
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
} = FBSDK;

class SignIn extends PureComponent {
  loading = false
  state = {
    isMemoryUser: false,
    isVisibleModalEmail: false,
    isVisibleModalVerifyCode: false,
    isVisibleModalResetPassword: false,
    isLoading: false,
    messageError: "",
    resetError: '',
    user_name: '',
    token: '',
    profile_pic: '',
    resetSucces: '',
    level: ''
  }

  componentDidMount() {
    this.getDataLevel()
  }

  toggleSwitch = () => {
    this.setState({ isMemoryUser: !this.state.isMemoryUser })
  }

  getDataLevel = async () => {
    try {
      const value = await AsyncStorage.getItem('Level')
      if (value !== null) {
        this.setState({ level: value })
        console.log('level', value)
      }
    } catch (e) {
      // error reading value
    }
  }

  handleChange = (value, label) => {
    if (label == 'Numéro') {
      this.setState({ phone_number: value })
    }
    else if (label == 'Mot de passe') {
      this.setState({ password: value })
    }
    else if (label == 'Mot de passe') {
      this.setState({ password: value })
    }
    else if (label == 'Confirmer le mot de passe') {
      this.setState({ password_confirmation: value })
    }
    else if (label == 'Email') {
      this.setState({ email: value })
    }
  }

  toggleModalEmail = () => {
    this.setState({ isVisibleModalEmail: !this.state.isVisibleModalEmail })
  }

  toggleModalCode = () => {
    this.setState({ isVisibleModalVerifyCode: !this.state.isVisibleModalVerifyCode })
  }

  toggleModalResetPassword = () => {
    this.setState({ isVisibleModalResetPassword: !this.state.isVisibleModalResetPassword })
  }

  handleSendEmail = async () => {
    this.setState({ isLoading: true })
    const data = { email: this.state.email }
    const res = await sendcode(data)
    if (res.message) {
      this.toggleModalEmail()
      this.toggleModalCode()
    }
    this.setState({ isLoading: false })
  }

  handleVerifyCode = async () => {
    this.setState({ isLoading: true })
    const token = this.state.code
    const res = await verifycode(token)
    if (res.data && res.data.token) {
      this.setState({
        token: res.data.token,
        isLoading: false
      })
      this.toggleModalCode()
      this.toggleModalResetPassword()
    }
    if (res.message) {
      this.setState({ messageError: 'code invalide', isLoading: false })
    }
  }

  resetPassword = async () => {
    this.setState({ isLoading: true })
    const { email, password, password_confirmation, token } = this.state
    const data = { email, password, password_confirmation, token }
    const res = await reset_password(data)
    if (res.data && res.data.email) {
      this.toggleModalResetPassword()
      this.setState({
        isLoading: false,
        resetSucces: "mot de passe modifié avec succes"
      })
    }
    else {
      this.setState({
        isLoading: false,
        resetError: 'information invalide'
      })
    }
  }

  get_Response_Info = (error, result) => {
    if (error) {
      //Alert for the Error
      Alert.alert('Error fetching data: ' + error.toString());
    } else {
      //response alert
      alert(JSON.stringify(result));
      this.setState({ user_name: 'Welcome' + ' ' + result.name });
      this.setState({ token: 'User Token: ' + ' ' + result.id });
      this.setState({ profile_pic: result.picture.data.url });
    }
  };

  onLogout = () => {
    //Clear the state after logout
    this.setState({ user_name: null, token: null, profile_pic: null });
  };

  getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'email, name,  first_name, last_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      { token, parameters: PROFILE_REQUEST_PARAMS },
      (error, result) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          this.setState({ userInfo: result });
          console.log('result:', result);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };

  loginByFacebook = () => {
    const { loginFacebook, navigation } = this.props
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      (result) => {
        if (result.isCancelled) {
          // alert('Login was cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then((data) => {
            const accessToken = data.accessToken;
            const responseInfoCallback = async (error, result) => {
              if (error) {
                console.log(error);
                console.log('Error fetching data=', error.toString());
              } else {
                this.setState({ isLoading: true })
                const data = {
                  name: result.first_name,
                  lastname: result.last_name,
                  email: result.email,
                  gender: 'male',
                  provider: 'facebook',
                  level: this.state.level,
                  provider_user_id: result.id
                }
                const res = await loginFacebook(data, navigation)
                this.setState({ isLoading: false })
              }
            };
            const infoRequest = new GraphRequest(
              '/me',
              {
                accessToken,
                parameters: {
                  fields: {
                    string: 'email,name,first_name,picture.type(large),last_name, gender',
                  },
                },
              },
              responseInfoCallback,
            );
            new GraphRequestManager().addRequest(infoRequest).start();
          });
        }
      },
      function (error) {
        alert('Login failed with error: ' + error);
      }
    );
  }

  login() {
    const { auth, navigation, dispatch } = this.props
    const { phone_number, password } = this.state
    const data = { phone_number, password }
    if (!phone_number) {
      dispatch({
        type: SET_ERROR_CONNECT,
        value: 'Renseigner votre numéro'
      })
    }
    if (!password) {
      dispatch({
        type: SET_ERROR_CONNECT,
        value: 'Renseigner votre mot de passe'
      })
    }
    auth(data, navigation).then((res)=>{console.log({res})}).catch(e=>{console.log({e})})
  }

  render() {
    const { navigation, errConnect, isLoading } = this.props
    console.log('loading', this.state.isLoading)
    return (
      <View style={styles.container}>
        <ResetPassword
          isVisible={this.state.isVisibleModalEmail}
          toggleModal={this.toggleModalEmail}
          onChangeText={(value) => this.setState({ email: value })}
          sendEmail={this.handleSendEmail}
          isLoading={this.state.isLoading}
        />
        <VerifyCode
          isVisible={this.state.isVisibleModalVerifyCode}
          toggleModal={this.toggleModalCode}
          onChangeText={(value) => this.setState({ code: value })}
          verifyCode={this.handleVerifyCode}
          messageError={this.state.messageError}
          email={this.state.email}
          isLoading={this.state.isLoading}
        />
        <NewPassword
          isVisible={this.state.isVisibleModalResetPassword}
          toggleModal={this.toggleModalResetPassword}
          onChangeText={this.handleChange}
          resetPassword={this.resetPassword}
          isLoading={this.state.isLoading}
          resetError={this.state.resetError}
        />
        <Text style={styles.resetSucces}>{this.state.resetSucces}</Text>
        <FormGroup
          iconName='person'
          label='Numéro'
          onChangeText={this.handleChange}
        />
        <FormGroup
          iconName='vpn-key'
          label='Mot de passe'
          onChangeText={this.handleChange}
        />
        <Text style={styles.messageError}>{errConnect}</Text>
        <TouchableOpacity
          onPress={this.toggleModalEmail}
          style={styles.BtnForgotpass}
        >
          <Text style={styles.textBtnForgotpass}>Mot de passe oublié?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.bg, { opacity: isLoading ? 0.2 : 1 }]}
          onPress={() => this.login()}
          disabled={isLoading ? true : false}
        >
          {
            isLoading ?
              <ActivityIndicator size='large' color='#000' />
              :
              <Text style={styles.textBtn}>Connexion</Text>
          }
        </TouchableOpacity>
        <View style={{display:"none"}}>
          <TouchableOpacity
            style={styles.btnFk}
            onPress={() => this.loginByFacebook()}
          >
            <Icon
              name="ios-logo-facebook"
              type="ionicon"
              color="#fff"
            />
            {
              this.state.isLoading ?
                <View style={styles.loading}>
                  <ActivityIndicator size='small' color='#fff' />
                </View>
                :
                <Text style={styles.textBtnFb}>continuer avec Facebook</Text>
            }
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.loading.isLoading,
    errConnect: state.message.errConnect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ auth, loginFacebook }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
