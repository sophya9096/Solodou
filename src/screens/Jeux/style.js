import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    content: {
        flex: 1,
        backgroundColor: '#fff'
    },
    btn: {
        height: 50,
        backgroundColor: color.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 5
    },
    textBtn: {
        color: '#fff'
    },
    footer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#eee',
    },
    titleFooter: {
        color: color.primary,
        marginRight: 20
    },
});