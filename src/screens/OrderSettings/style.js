import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 7,
        marginVertical: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    iconStyle: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: color.primary,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        color: '#fff'
    },
    blocText: {
        marginLeft: 20
    },
    subTitle: {
        color: '#777',
        fontWeight: 'bold',
        fontSize: 16
    },
    btnMore: {
        height: 30,
        width: 80,
        backgroundColor: color.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 5
    },
    textBtn: {
        color: '#fff'
    },
    btnDownload: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: color.primary,
        paddingHorizontal: 20,
        borderRadius: 5
    }
});