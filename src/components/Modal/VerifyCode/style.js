import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        justifyContent: 'flex-end'
    },
    header: {
        height: 50,
    },
    btnClose: {
        alignSelf: 'flex-start'
    },
    content: {
        backgroundColor: '#fff',
        height: '100%',
        borderRadius: 5,
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subTitle: {
        marginTop: 30,
        color: '#777'
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    btn: {
        height: 50,
        borderRadius: 5,
        backgroundColor: color.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtn: {
        fontSize: 17,
        color: '#fff'
    },
    messageError: {
        fontSize: 18,
        color: color.danger,
        marginBottom: 20
    }
});