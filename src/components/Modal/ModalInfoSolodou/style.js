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
        paddingHorizontal: 30
    },
    contentTitleBoc: {
        width: '100%',
        borderRadius: 5,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c575cf',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    titleText: {
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 20
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    btnClose: {
        alignSelf: 'flex-end',
    },
    iconClose: {
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
    },
    paragraph: {
        marginVertical: 5,
    },
    titleBloc: {
        fontSize: 20,
        textTransform: 'uppercase',
        alignSelf: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginVertical: 20
    },
    avatar: {
        marginRight: 10
    }
});