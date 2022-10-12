import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    contentSwitch: {
        flexDirection: 'row', 
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    btn: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 20
    },
    bg: {
        backgroundColor: color.secondary,
    },
    whiteBg: {
        backgroundColor: '#fff'
    },
    textBtn: {
        color: '#fff',
        fontSize: 18
    },
    messageError: {
        color: color.danger
    },
    BtnForgotpass: {
        height: 30,
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    textBtnForgotpass: {
        color: color.primary
    },
    text: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        padding: 20,
    },
    imageStyle: {
        width: 200,
        height: 300,
        resizeMode: 'contain',
    },
    resetSucces: {
        color: 'green'
    },
    btnFk: {
        flexDirection: 'row',
        height: 30,
        borderRadius: 3,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#2980b9'
    },
    textBtnFb: {
        flex: 1,
        textAlign: 'center',
        color: '#fff'
    },
    loading: {
        flex: 1,
        justifyContent: 'center'
    }
});