import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0
    },
    header: {
        height: 56,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f3f3f3',
        paddingLeft: 20
    },
    contentTitleBoc: {
        borderRadius: 5,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c575cf',
        flexDirection: 'row'
    },
    titleText: {
        width: '80%',
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 20
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    iconClose: {
        alignSelf: 'flex-start',
        color: color.primary
    },
    iconVolume: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: color.primary,
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: 20
    }
});