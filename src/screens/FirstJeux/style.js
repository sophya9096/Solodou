import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    btn: {
        height: 50,
        width: '90%',
        backgroundColor: color.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 20,
        borderRadius: 5,
        position: 'absolute',
        bottom: 40
    },
    textBtn: {
        fontSize: 18,
        color: '#fff'
    },
});