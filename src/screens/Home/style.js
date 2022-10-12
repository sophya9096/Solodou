import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40
    },
    btn: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
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
        fontSize: 18,
    },
    textBtncon: {
        color: color.secondary,
        fontSize: 18
    },
    icon: {
        paddingTop: 3
    }
});