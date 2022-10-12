import React, { PureComponent } from 'react';
import {  View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { WebView } from 'react-native-webview';
import { getFaqs, getInfosCms } from '../../store/actions'
import Header from '../../components/Header';
import { styles } from './style'
import ModalInfoSolodou from '../../components/Modal/ModalInfoSolodou';

class Cms extends PureComponent {
  
  state = {
    infos: '',
    isVisibleModalInfoSolodou: false,
  }

  componentDidMount() {
    this.loadData()
  }

  loadData() {
      const { getFaqs, getInfosCms } = this.props
      getFaqs()
      getInfosCms()
  }

  toggleModalInfoSolodou = (item) => {
      if(item) {
        this.setState({
            infos: item,
            isVisibleModalInfoSolodou: !this.state.isVisibleModalInfoSolodou
        })
      }
      else{
        this.setState({
            isVisibleModalInfoSolodou: !this.state.isVisibleModalInfoSolodou
        })
      }
  }

  render() {
    const { pages, faqs } = this.props
    console.log('pages', pages)
    return (
      <ScrollView style = {{flex: 1}}>
        <Header {...this.props} />
        <View style = {styles.content}>
            <ModalInfoSolodou 
                isVisible = {this.state.isVisibleModalInfoSolodou}
                toggleModal = {this.toggleModalInfoSolodou}
                data = {this.state.infos}
            />
            <View style = {styles.contentTitleBoc}>
                <Text style = {styles.titleText}>INFOS SOLODOU</Text>
            </View>
            <View style = {{marginBottom: 40}}>
                {   
                    pages.map((item) => {
                        return(
                            <TouchableOpacity 
                                style = {styles.btn}
                                onPress = {() => this.toggleModalInfoSolodou(item)}
                            >
                                <WebView 
                                  mixedContentMode="compatibility"
                                  javaScriptEnabled
                                  domStorageEnabled
                                  originWhitelist={['*']}
                                  allowUniversalAccessFromFileURLs
                                  source={{html: `<p style = "font-size: 38px;color: #850080">${item.title}</p>`}}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

            <View style = {styles.contentTitleBoc}>
                <Text style = {styles.titleText}>QUESTIONS / AVIS ?</Text>
            </View>
            <View style = {{marginBottom: 40}}>
                {   faqs &&
                    faqs.map((item) => {
                        return(
                            <TouchableOpacity 
                                style = {styles.btn}
                                onPress = {() => this.toggleModalInfoSolodou(item)}
                            >
                                <WebView 
                                    source={{html: `<p style = "font-size: 38px;color: #850080">${item.title}</p>` }}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      pages: state.cms.pages,
      faqs: state.cms.faqs
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      dispatch,
      ...bindActionCreators({getFaqs, getInfosCms}, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Cms);
