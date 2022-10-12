import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%'
    },
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentTitle: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        height: 40,
        width: 40,
        borderRadius: 5,
        borderColor: '#f3f3f3',
        borderWidth: 2,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: color.primary,
        backgroundColor: '#fff',
        marginLeft: 10
    },
    indicatorTitle: {
        height: 20,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#acb0ba',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginRight: 10,
        color: '#ff0000'
    },
    contentHeaderlinkVideo: {
        flexDirection: 'row',
        height: 70,
        alignItems: 'center',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    contentHeaderlinkLeft: {
        flexDirection: 'row',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 5
    },
    headerTitle: {
        textTransform: 'uppercase',
        color: color.primary,
        fontSize: 20
    },
    header2: {
        marginVertical: 20
    },
    iconVolumeUpHeader: {
        color: color.primary,
        height: 40,
        width: 40,
        borderRadius: 5,
        backgroundColor: '#e5e8e8',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    btn: {
        height: 50,
        backgroundColor: color.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        zIndex: 10
    },
    textBtn: {
        color: '#fff'
    },
    verticaldivided: {
        borderLeftColor: '#f3f3f3',
        borderLeftWidth: 2
    },
    letterStyle: {
        height: 60,
        width: 100,
        backgroundColor: '#f2f4f4',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18
    },
    iconVolumeUp: {
        height: 60,
        width: 50,
        backgroundColor: '#e5e8e8',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: color.primary,
    },
    isSwitch: {
        marginHorizontal: 20
    },
    btnJeux: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: color.primary,
        justifyContent: 'center',
        position: 'absolute',
        right: 10
    },
    iconStyle: {
        color: '#fff'
    }
});