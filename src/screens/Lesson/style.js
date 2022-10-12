import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    btn: {
        height: 50,
        width: '100%',
        backgroundColor: color.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 5
    },
    textBtn: {
        color: '#fff',
    },
    btn: {
        height: 50,
        marginHorizontal: 20,
        backgroundColor: color.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 5
    },
});