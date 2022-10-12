import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Button,
  SafeAreaView,
} from 'react-native';
import {WebView} from 'react-native-webview';
import HTML from 'react-native-render-html';
import Rate, {AndroidMarket} from 'react-native-rate';
import {styles} from './style';
import {color} from '@styles';
import {Icon} from 'react-native-elements';
import Header from '../../components/Header';
import RateModal from 'react-native-store-rating';
import {url} from '../../config';
import {
  get_infos_user,
  get_lesson_level,
  getLesson,
  assimilatedLesson,
} from '../../store/actions';
import {TOGGLEVIDEODEMO} from '../../store/actions/types';
import {auth, loginFacebook} from '../../store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loading from '../../components/Loading';
import registerFcmDevice from '../../services/pushNotification';
import VideoCours from '../../components/Modal/VideoCours';
import {gethelpVideo} from '../../api';

class B_A_BA extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isEnabled: false,
      isVisibleModal: false,
      isModalOpen: false,
      videoId: '',
      isVisibleVideoDemo: false,
    };
  }

  async componentDidMount() {
    const {memoryUser, isVisibleTeaser, dispatch, infosUser} = this.props;
    //get video demo api
    const resp = await gethelpVideo();
    let videoId = resp[0].media.split('/');
    videoId = videoId[videoId.length - 1];
    this.setState({videoId});
    if (!isVisibleTeaser) {
      setTimeout(() => {
        this.toggleModal();
        dispatch({
          type: TOGGLEVIDEODEMO,
          value: true,
        });
      }, 3000);
    }
    if (memoryUser.provider) {
      await loginFacebook(memoryUser);
    } else {
      await auth({
        phone_number: memoryUser.phone_number,
        password: memoryUser.password,
      });
    }
    this.getUser();
    this.getLesson();
    registerFcmDevice();
    if (
      infosUser.assimilated.length == 3 ||
      infosUser.assimilated.length == 10
    ) {
      this.setState({isModalOpen: true});
    }
  }

  getLesson = async () => {
    this.setState({isLoading: true});
    const {route, getLesson, lesson, user} = this.props;
    if (route.params != undefined && route.params.lesson) {
      const lesson = route.params.lesson;
      const resp = await getLesson(lesson.id, user.token);
    } else if (!lesson.id) {
      const res = await getLesson(1, user.token);
    }
  };

  getUser() {
    const {get_infos_user, user} = this.props;
    get_infos_user(user.id, user.token);
  }

  toggleModal = () => {
    this.setState({isVisibleVideoDemo: !this.state.isVisibleVideoDemo});
  };

  render() {
    const {lesson, navigation} = this.props;
    const {isLoading, isEnabled, videoId, isVisibleVideoDemo, isModalOpen} =
      this.state;
    return (
      <View style={styles.container}>
        <SafeAreaView style={{flex: 1, width: '100%'}}>
          <StatusBar backgroundColor={color.primary} />
          <Header {...this.props} />
          <View style={styles.content}>
            {isLoading && <Loading />}
            <VideoCours
              isVisible={isVisibleVideoDemo}
              videoId={videoId}
              toggleModal={this.toggleModal}
            />
            <RateModal
              modalTitle="Merci de laisser une note "
              rateBtnText={'Noter'}
              cancelBtnText={'Annuler'}
              totalStarCount={5}
              defaultStars={5}
              isVisible={false}
              sendBtnText={'Envoyer'}
              commentPlaceholderText={'Placeholder text'}
              emptyCommentErrorMessage={'Empty comment error message'}
              iTunesStoreUrl={'market://details?id=${com.solodou.app}'}
              playStoreUrl={'market://details?id=${com.solodou.app}'}
              isModalOpen={isModalOpen}
              storeRedirectThreshold={3}
              style={{
                paddingHorizontal: 30,
              }}
              onStarSelected={(e) => {
                console.log('change rating', e);
              }}
              onClosed={() => {
                console.log('pressed cancel button...');
                this.setState({
                  isModalOpen: false,
                });
              }}
              sendContactUsForm={(state) => {
                alert(JSON.stringify(state));
              }}
              ratingProps={{
                selectedColor: 'red',
              }}
              modalProps={{
                animationType: 'fade',
              }}
            />
            <WebView
              cacheEnabled={true}
              onLoad={() =>
                setTimeout(() => {
                  this.setState({isLoading: false});
                }, 3000)
              }
              source={{uri: lesson.content}}
            />
            {!isLoading && lesson.id != 'ecriture' && (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.push('Jeux', {jeux: lesson})}>
                <Text style={styles.textBtn}> Continuer </Text>
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lesson: state.lesson.lesson,
    user: state.user.user,
    infosUser: state.infosUser.infosUser,
    memoryUser: state.user.memoryUser,
    errorMessage: state.message.errorMessage,
    isVisibleTeaser: state.videoDemo.isVisibleTeaser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(
      {
        get_infos_user,
        get_lesson_level,
        getLesson,
        assimilatedLesson,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(B_A_BA);
