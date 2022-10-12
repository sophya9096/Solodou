import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
    container: {
        margin: 0,
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    video: {
        height: 300,
        width: '100%',
    },
    header: {
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
    }
});