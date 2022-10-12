import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    contentSwitch: {
        flexDirection: 'row', 
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    input: {
        backgroundColor:color.primary,
        paddingLeft: 10,
        borderRadius: 5, 
        paddingVertical: 10, 
        marginTop: 10,
    },
    btn: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 20
    },
    label: {
        fontSize: 18
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bg: {
        backgroundColor: color.secondary,
    },
    whiteBg: {
        backgroundColor: '#fff'
    },
    textBtn: {
        color: '#fff',
        fontSize: 18
    },
    textBtnCGU: {
        color: color.primary,
        borderBottomColor:  color.primary,
        borderBottomWidth: 1
    },
    contentCGU: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    footer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    textFooter: {
        color: color.primary,
    },
    textError: {
        color: color.danger,
        marginVertical: 10
    },
    segmentStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnSegment: {
        flex: 1,
        height: 50,
        backgroundColor: color.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        marginHorizontal: 10
    }
});