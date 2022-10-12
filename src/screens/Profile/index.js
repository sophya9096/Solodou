import React, {PureComponent} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Picker} from '@react-native-community/picker';

import {update_profile, get_lesson_level} from '../../store/actions';
import RequestSucces from '../../components/Modal/RequestSucces';

import {styles} from './style';
import {SET_LEVEL} from '../../store/actions/types';

const options = {
  noData: true,
  storageOptions: {
    skipBackup: true,
    path: 'Solodou',
  },
};

class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      typeImage: '',
      nameImage: '',
      isLoading: false,
      isVisible: false,
      choixLevel: props.infosUser.course_level,
    };
  }

  componentDidMount() {
    const {infosUser} = this.props;
    const mine =
      infosUser.avatar && infosUser.avatar != null
        ? infosUser.avatar.substring(infosUser.avatar.length - 3)
        : '';
    this.setState({
      lastname: infosUser.lastname,
      name: infosUser.firstname,
      phone_number: infosUser.phone_number,
      avatar: mine == 'jpg' || mine == 'png' ? infosUser.avatar : '',
    });
  }

  toggleModal = () => {
    this.setState({isVisible: !this.state.isVisible});
  };

  update_profile = async () => {
    this.setState({isLoading: true});
    const {user, update_profile, get_lesson_level} = this.props;
    const {avatar, email, lastname, name, phone_number, choixLevel} =
      this.state;
    var data = new FormData();
    data.append('lastname', lastname);
    data.append('name', name);
    data.append('phone_number', phone_number);
    data.append('level', choixLevel);
    console.log('data', JSON.stringify(data));
    if (email != undefined) {
      data.append('email', email);
    }
    if (avatar != '') {
      data.append('avatar', {
        uri: avatar,
        type: 'image/jpeg',
        name: 'avatar.jpg',
      });
    }
    const res = await update_profile(user, data);
    if (res.data) {
      this.toggleModal();
      console.log('update', res);
      get_lesson_level(choixLevel);
    }

    this.setState({isLoading: false});
  };

  handleChange = (value, label) => {
    if (label == 'email') {
      this.setState({email: value});
    } else if (label == 'lastname') {
      this.setState({lastname: value});
    } else if (label == 'name') {
      this.setState({name: value});
    } else if (label == 'phone_number') {
      this.setState({phone_number: value});
    }
  };

  takephoto = () => {
    // ImagePicker.showImagePicker(options, (response) => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     let source = response;
    //     this.setState({
    //       avatar: source,
    //     });
    //     console.log('source', response);
    //      this.setState({
    //        avatar: 'file://' + response.path,
    //        // avatar: response.path,
    //        typeImage: response.type,
    //        nameImage: response.fileName,
    //      });
    //     console.log('succes');
    //   }
    // });
    ImagePicker.launchImageLibrary(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);

        alert(res.customButton);
      } else {
        const source = {uri: res.uri};

        console.log('source', response);
        this.setState({
          avatar: 'file://' + response.path,
          // avatar: response.path,
          typeImage: response.type,
          nameImage: response.fileName,
        });
        console.log('succes');
      }
    });
  };

  render() {
    const {infosUser, navigation} = this.props;
    const {isLoading} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            {!this.state.avatar ? (
              <Icon
                name="person"
                type="material"
                iconStyle={styles.iconAvatar}
              />
            ) : (
              <Image source={{uri: this.state.avatar}} style={styles.ppStyle} />
            )}
            <TouchableOpacity
              style={styles.btnTakePhoto}
              onPress={this.takephoto}>
              <Icon
                name="camera-alt"
                type="material"
                iconStyle={styles.iconPhoto}
              />
            </TouchableOpacity>
          </View>
        </View>
        <RequestSucces
          isVisible={this.state.isVisible}
          toggleModal={this.toggleModal}
        />
        <ScrollView
          style={styles.content}
          keyboardShouldPersistTaps="always"
          contentContainerStyle={{paddingBottom: 40}}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Nom</Text>
            <TextInput
              defaultValue={`${infosUser.firstname}`}
              style={styles.input}
              onChangeText={(value) => this.handleChange(value, 'name')}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Prénom</Text>
            <TextInput
              defaultValue={`${infosUser.lastname}`}
              style={styles.input}
              onChangeText={(value) => this.handleChange(value, 'lastname')}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              defaultValue={`${infosUser.email}`}
              style={styles.input}
              onChangeText={(value) => this.handleChange(value, 'email')}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Téléphone</Text>
            <TextInput
              defaultValue={`${infosUser.phone_number}`}
              style={styles.input}
              keyboardType="phone-pad"
              onChangeText={(value) => this.handleChange(value, 'phone_number')}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Choix du B-A-BA</Text>
            <Picker
              selectedValue={this.state.choixLevel}
              style={styles.input}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) =>
                this.setState({choixLevel: itemValue})
              }>
              <Picker.Item label="B-A-BA 1" value={1} />
              <Picker.Item label="B-A-BA 2" value={2} />
            </Picker>
          </View>
          <TouchableOpacity style={styles.btn} onPress={this.update_profile}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <Text style={styles.textBtn}>Modifier</Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    infosUser: state.infosUser.infosUser,
    isLoading: state.loading.isLoading,
    selectedLevel: state.lesson.levelSelected,
    errorMessage: state.message.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({update_profile, get_lesson_level}, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
