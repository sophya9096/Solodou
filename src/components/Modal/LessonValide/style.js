import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0
    },
    header: {
        height: 65,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3',
        paddingLeft: 20
    },
    headerTitle: {
        fontSize: 20
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    btnClose: {
        marginRight: 20
    },
    iconClose: {
        color: color.primary
    },
    menuItem: {
        height: 50,
        borderBottomColor: '#f3f3f3',
        justifyContent: 'center',
        borderBottomWidth: 1
    },
    titleMenu:{
        color: '#777'
    }
});