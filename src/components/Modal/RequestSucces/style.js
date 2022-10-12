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
        alignItems: 'center',
        borderRadius: 5,
        padding: 20
    },
    title: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    subTitle: {
        marginTop: 30,
        color: '#777'
    },
    iconStyle: {
        fontSize: 70,
        color: '#33d9b2'
    }
});