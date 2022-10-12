import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: '#fff',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {height: 2, width: 2},
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    iconStyle: {
        fontSize: 35
    },
    titleHeader: {
        fontSize: 18,
        color: color.primary,
    },
    headerTitle: {
        flex: 1,
        alignItems: 'center'
    }
});