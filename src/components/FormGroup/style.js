import { StyleSheet } from 'react-native'
import { color } from '@styles'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:color.primary,
        paddingLeft: 10,
        marginVertical: 15,
        borderRadius: 5
    },
    input:{
        width: '100%',
        color: '#fff' 
    }
});