import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        justifyContent: 'center'
    },
    content: {
        backgroundColor: '#fff',
        height: 250,
        marginHorizontal: 20,
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
        width: 100,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    btn_danger: {
        backgroundColor: color.danger
    },
    btn_success: {
        backgroundColor: color.primary
    },
    textBtn: {
        color: '#fff'
    }
});