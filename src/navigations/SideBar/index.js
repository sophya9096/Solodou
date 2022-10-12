import React, {PureComponent} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Linking,
} from 'react-native';
import {styles} from './style';
import {DrawerActions} from '@react-navigation/native';
import {bindActionCreators} from 'redux';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import {Icon} from 'react-native-elements';
import ConfirmLogout from '../../components/Modal/ConfirmLogout';
import {connect} from 'react-redux';
const FBSDK = require('react-native-fbsdk');
const {LoginManager} = FBSDK;
import {SET_USER, SET_LESSON, SET_INFOS_USER} from '../../store/actions/types';
import {get_lesson_level} from '../../store/actions';
const urlShop = 'https://www.solodou-store.com/';

class SideBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      isVisibleModal: false,
      collapsed_jeux: true,
    };
  }

  componentDidMount() {
    const {get_lesson_level, infosUser} = this.props;
    console.log('level drawer', infosUser.course_level);
    get_lesson_level(infosUser.course_level);
  }

  toggleExpanded = () => {
    this.setState({collapsed: !this.state.collapsed});
  };

  toggleModal = () => {
    this.setState({isVisibleModal: !this.state.isVisibleModal});
  };

  openLesson(item) {
    const {navigation, dispatch} = this.props;
    navigation.dispatch(DrawerActions.closeDrawer());
    dispatch({
      type: SET_LESSON,
      value: {},
    });
    navigation.push('B_A_BA', {lesson: item});
  }

  logOut = () => {
    this.toggleModal();
    const {dispatch, navigation} = this.props;
    dispatch({
      type: SET_USER,
      value: {},
    });
    dispatch({
      type: SET_INFOS_USER,
      value: {},
    });
    LoginManager.logOut();
    navigation.navigate('Home');
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  renderCours = ({item, index}) => {
    const {infosUser} = this.props;
    const assimilated =
      infosUser.assimilated &&
      infosUser.assimilated.filter((lesson) => lesson.id == item.id);
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.btn,
          assimilated && assimilated.length != 0
            ? styles.btnAssimilated
            : item.code.charAt(0) == '#' || item.code.charAt(0) == 'R'
            ? styles.btnRow1
            : styles.btnRow2,
        ]}
        onPress={() => this.openLesson(item)}>
        {item.code == 'ecriture' ? (
          <Icon
            type="material"
            name="video-library"
            iconStyle={styles.colorBtnRow2}
          />
        ) : (
          <Text
            style={[
              styles.textBtn,
              item.code.charAt(0) == '#' || item.code.charAt(0) == 'R'
                ? styles.colorBtnRow1
                : assimilated && assimilated.length != 0
                ? styles.colorBtnRow1
                : styles.colorBtnRow2,
            ]}>
            {item.code}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  openShopUrl = () => {
    Linking.canOpenURL(urlShop).then((supported) => {
      if (supported) {
        Linking.openURL(urlShop);
      } else {
        console.log("Don't know how to open URI: " + Linking);
      }
    });
  };

  renderItemBaba1 = () => {
    const {navigation, level} = this.props;
    return (
      <Collapsible collapsed={this.state.collapsed} align="center">
        <View style={[styles.content]}>
          <FlatList
            data={level}
            numColumns={5}
            renderItem={this.renderCours}
            ListFooterComponent={() => (
              <TouchableOpacity
                style={[styles.btn, styles.btnRow2]}
                onPress={this.openShopUrl}>
                <Icon
                  type="material"
                  name="shopping-basket"
                  iconStyle={styles.colorBtnRow2}
                  size={30}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </Collapsible>
    );
  };

  openPage(page) {
    const {navigation} = this.props;
    if (page == 'infos') {
      navigation.navigate('Infos');
    }
    if (page == 'cms') {
      navigation.navigate('Cms');
    }
    if (page == 'jeux') {
      navigation.navigate('Jeux');
    }
    if (page == 'Profile') {
      navigation.navigate('Profil');
    }
    if (page == 'tableau') {
      navigation.navigate('OrderSettings');
    }
    navigation.dispatch(DrawerActions.closeDrawer());
  }

  render() {
    const {infosUser, level} = this.props;
    const mine =
      infosUser.avatar && infosUser.avatar != null
        ? infosUser.avatar.substring(infosUser.avatar.length - 3)
        : '';
    const sourceImage = mine == 'jpg' || mine == 'png' ? infosUser.avatar : '';
    console.log('sidebar', infosUser.course_level);
    return (
      <ScrollView>
        <View style={styles.headerMenu}>
          <TouchableOpacity
            style={styles.avatar}
            onPress={() => this.openPage('Profile')}>
            {!sourceImage ? (
              <Icon
                name="person"
                type="material"
                iconStyle={styles.iconAvatar}
              />
            ) : (
              <Image source={{uri: sourceImage}} style={styles.ppStyle} />
            )}
          </TouchableOpacity>
          <View>
            <Text style={styles.titleHeader}>{infosUser.fullname}</Text>
            <Text style={styles.subTitleHeader}>{infosUser.phone_number}</Text>
          </View>
        </View>
        <ConfirmLogout
          toggleModal={this.toggleModal}
          logOut={this.logOut}
          isVisible={this.state.isVisibleModal}
        />
        <TouchableOpacity
          style={[styles.menuItem]}
          onPress={this.toggleExpanded}>
          <Icon
            name="local-library"
            type="material"
            iconStyle={styles.iconMenuItem}
          />
          <View style={styles.menuItemContent}>
            <Text style={styles.menuItemText}>
              {infosUser.course_level == 1 ? 'B-A-BA 1' : 'B-A-BA 2'}
            </Text>
          </View>
          <Icon
            name={this.state.collapsed ? 'expand-more' : 'expand-less'}
            type="material"
            iconStyle={styles.iconMeniItemLeft}
          />
        </TouchableOpacity>
        <View style={{maxHeight: 500}}>{this.renderItemBaba1()}</View>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this.openPage('infos')}>
          <Icon name="info" type="material" iconStyle={styles.iconMenuItem} />
          <View style={styles.menuItemContent}>
            <Text style={styles.menuItemText}>A propos</Text>
          </View>
          <Icon
            name="navigate-next"
            type="material"
            iconStyle={styles.iconMeniItemLeft}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuItem, styles.divided]}
          onPress={() => this.openPage('cms')}>
          <Icon name="link" type="material" iconStyle={styles.iconMenuItem} />
          <View style={styles.menuItemContent}>
            <Text style={styles.menuItemText}>CMS</Text>
          </View>
          <Icon
            name="navigate-next"
            type="material"
            iconStyle={styles.iconMeniItemLeft}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuItem, styles.divided]}
          onPress={() => this.openPage('tableau')}>
          <Icon name="md-bulb" type="ionicon" iconStyle={styles.iconMenuItem} />
          <View style={styles.menuItemContent}>
            <Text style={styles.menuItemText}>Mon tableau</Text>
          </View>
          <Icon
            name="navigate-next"
            type="material"
            iconStyle={styles.iconMeniItemLeft}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuItem, styles.divided]}
          onPress={() => this.openPage('Profile')}>
          <Icon name="person" type="material" iconStyle={styles.iconMenuItem} />
          <View style={styles.menuItemContent}>
            <Text style={styles.menuItemText}>Mon compte</Text>
          </View>
          <Icon
            name="navigate-next"
            type="material"
            iconStyle={styles.iconMeniItemLeft}
          />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem]} onPress={this.toggleModal}>
          <Icon
            name="ios-log-out"
            type="ionicon"
            iconStyle={styles.iconMenuItem}
          />
          <View style={styles.menuItemContent}>
            <Text style={styles.menuItemText}>Déconnexion</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    level: state.lesson.level,
    infosUser: state.infosUser.infosUser,
    selectedLevel: state.lesson.levelSelected,
    errorMessage: state.message.errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(
      {
        get_lesson_level,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
