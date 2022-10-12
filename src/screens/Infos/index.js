import React, {PureComponent} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import Header from '../../components/Header';
import ActionButton from 'react-native-circular-action-menu';
import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import Flag from 'react-native-flags';
import {infos, temoignage} from '../../api/infosApi';
import {gethelpVideo} from '../../api';
import VideoCours from '../../components/Modal/VideoCours';
import {color} from '@styles';

class Infos extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      help: '',
      isVisible: false,
      isVisibleModal: false,
      height: 60,
      isResize: false,
    };
  }

  componentDidMount() {
    this.loaData();
  }

  loaData = async () => {
    this.setState({
      help: await gethelpVideo(),
    });
  };

  toggleModal = (item) => {
    if (this.state.isVisible == false) {
      this.setState({height: 250});
    }
    if (item) {
      let videoId = item.media.split('/');
      videoId = videoId[videoId.length - 1];
      this.setState({
        isVisible: !this.state.isVisible,
        videoId: videoId,
      });
    } else {
      this.setState({
        isVisible: !this.state.isVisible,
      });
    }
    if (this.state.isVisible) {
      this.resizeContentMenu();
    }
  };

  renderItemFooter = () => {
    return (
      <View style={styles.card}>
        {temoignage.map((item) => {
          return (
            <View style={styles.contentTemoignage}>
              <Image source={item.avatar} style={styles.avatar} />
              <Text style={styles.titleTemoignage}>{item.name}</Text>
              <Text style={styles.subTitleTemoignage}>
                {item.typePersonnage}
              </Text>
              <Text style={styles.cardContentSubTitle}>{item.message}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.contentTitleBoc}>
          <Text style={styles.titleText}>{item.title}</Text>
        </View>
        <Text>{item.description}</Text>
        {item.infos.map((item, index) => {
          return (
            <View key={index} style={styles.card}>
              <Image
                source={item.image}
                style={styles.cardImage}
                resizeMode="contain"
              />
              <View style={styles.cardContent}>
                <Text style={styles.cardContentTitle}>{item.title}</Text>
                <Text style={styles.cardContentSubTitle}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  zoomImage = () => {
    this.setState({isVisibleModal: !this.state.isVisibleModal});
  };

  resizeContentMenu = () => {
    if (!this.state.isResize) {
      this.setState({
        height: 250,
        isResize: true,
      });
    } else {
      this.setState({
        height: 60,
        isResize: false,
      });
    }
  };

  render() {
    const {help, videoId, isVisible, isVisibleModal, height} = this.state;
    return (
      <View style={styles.container}>
        <Header {...this.props} renderLeft={true} />
        <VideoCours
          videoId={videoId}
          isVisible={isVisible}
          toggleModal={this.toggleModal}
        />
        <Modal
          isVisible={isVisibleModal}
          style={styles.modalContainer}
          backdropOpacity={0.2}
          animationIn="zoomIn">
          <View style={styles.contentModal}>
            <View style={styles.headerModal}>
              <TouchableOpacity
                style={styles.btnClose}
                onPress={this.zoomImage}>
                <Icon type="material" name="close" />
              </TouchableOpacity>
            </View>
            <Image
              source={require('@assets/concept112.jpg')}
              style={styles.imageModal}
              resizeMode="cover"
            />
          </View>
        </Modal>
        <View style={[styles.contentMenu, {height: height}]}>
          <ActionButton
            icon={
              <Icon name="help" type="material" iconStyle={styles.iconHelp} />
            }
            onPress={this.resizeContentMenu}
            onOverlayPress={this.resizeContentMenu}
            radius={200}
            btnOutRange="transparent"
            position="right"
            buttonColor="transparent"
            backdrop={true}>
            {help.length != 0 &&
              help.slice(0, 6).map((item) => {
                return (
                  <ActionButton.Item
                    buttonColor="#9b59b6"
                    title="New Task"
                    onPress={() => this.toggleModal(item)}>
                    <Flag code={`${item.code}`} size={32} />
                  </ActionButton.Item>
                );
              })}
          </ActionButton>
        </View>
        <ScrollView style={styles.content}>
          <TouchableOpacity
            onPress={this.zoomImage}
            style={{zIndex: 100, elevation: 10}}>
            <Image
              source={require('@assets/concept112.jpg')}
              style={styles.headerImage}
            />
          </TouchableOpacity>
          <FlatList
            data={infos}
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItem}
            ListFooterComponent={this.renderItemFooter}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Infos;
