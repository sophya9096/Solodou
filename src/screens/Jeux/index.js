import React, {PureComponent} from 'react';
import {View, Switch, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../../components/Header';
import {styles} from './style';
import {getGame, assimilatedLesson} from '../../store/actions';
import Loading from '../../components/Loading';

class Jeux extends PureComponent {
  state = {
    isLoading: false,
    isEnabled: false,
    nextLesson: '',
  };

  componentDidMount() {
    const {lesson} = this.props;
    this.loadJeux();
    this.setState({
      isEnabled: lesson.assimilated,
      nextLesson: lesson.next_lesson,
    });

    console.log('lesson', lesson);
  }

  loadJeux = async () => {
    this.setState({isLoading: true});
    const {route, getGame, jeux, infosUser} = this.props;
    if (route.params != undefined && route.params.jeux) {
      const jeux = route.params.jeux;
      await getGame(infosUser.course_level, jeux.label);
    } else if (!jeux.label) {
      await getGame('1');
    }
  };

  toggleSwitch = async () => {
    const {user, assimilatedLesson, lesson} = this.props;
    var data = {
      course: lesson.id,
    };
    if (!this.state.isEnabled) {
      data['status'] = 1;
      console.log('data', data);
      const resp = await assimilatedLesson(user.id, data, user.token);
      if (
        resp.message == 'Vous ne pouvez valider plus de 2 cours en 24h!' ||
        'updated!'
      ) {
        // if (resp.message == 'updated!') {
        this.setState({
          isEnabled: true,
        });
      }
    } else {
      data['status'] = 0;
      console.log('data', data);
      const resp = await assimilatedLesson(user.id, data, user.token);
      this.setState({isEnabled: false});
    }
  };

  // toggleSwitch = () =>
  //   this.setState({
  //     isEnabled: true,
  //   });

  render() {
    const {jeux, navigation, lesson} = this.props;
    const {isLoading, isEnabled, nextLesson} = this.state;
    console.log('lesson', lesson);
    return (
      <View style={styles.container}>
        <Header {...this.props} />
        {isLoading && <Loading />}
        <WebView
          onLoad={() =>
            setTimeout(() => {
              this.setState({isLoading: false});
            }, 3000)
          }
          source={{uri: jeux.content}}
        />
        {!isLoading && isEnabled && (
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.push('B_A_BA', {lesson: {id: nextLesson}})
            }>
            <Text style={styles.textBtn}> Continuer </Text>
          </TouchableOpacity>
        )}
        {!isLoading && (
          <View style={styles.footer}>
            <Text style={styles.titleFooter}>Leçon assimilée: </Text>
            <Switch
              trackColor={{false: '#767577', true: '#d9a5df'}}
              thumbColor={isEnabled ? '#850080' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={this.toggleSwitch}
              value={isEnabled}
            />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jeux: state.lesson.jeux,
    lesson: state.lesson.lesson,
    user: state.user.user,
    infosUser: state.infosUser.infosUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(
      {
        getGame,
        assimilatedLesson,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jeux);
