import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    header: {
        alignItems: 'center'
    },
    avatar: {
        height: 120,
        width: 120,
        borderRadius: 60,
        justifyContent: 'center',
        backgroundColor: '#eee'
    },
    iconAvatar: {
        fontSize: 80,
        color: '#777'
    },
    btnTakePhoto: {
        position: 'absolute',
        bottom: 10,
        right: -10,
        backgroundColor: color.primary,
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center'
    },
    iconPhoto: {
        color: '#fff'
    },
    formGroup: {
        borderBottomColor: '#f3f3f3',
        borderBottomWidth: 1,
        marginVertical: 10
    },
    label: {
        color: '#777'
    },
    input: {
        fontWeight: 'bold'
    },
    btn: {
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primary
    },
    textBtn: {
        color: '#fff',
        fontSize: 16
    },
    ppStyle: {
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    btnNext: {
        flexDirection: 'row',
        height: 50,
        marginTop: 20,
        borderBottomColor: '#f3f3f3',
        borderBottomWidth: 1
    },
    textBtnNext: {
        flex: 1,
        fontSize: 16
    }
});