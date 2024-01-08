import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    square: {
        width: 33,
        height: 33,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareText: {
        fontSize: 22,
    },
    solveButton: {
        margin: 10,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#2E6C7B',
        color: 'white',
        width: '45%'
    },
    solveButtonContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '80%',
    },
});


export default styles;