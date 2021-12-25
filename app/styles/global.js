import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    titleText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        fontFamily: 'Nunito-Regular',
        marginVertical: 8,
        lineHeight: 20
    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
    modalContent: {
        flex: 1,
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    }
});

export const images = {
    ratings: {
        '1': require('../assets/git/rating-1.png'),
        '2': require('../assets/git/rating-2.png'),
        '3': require('../assets/git/rating-3.png'),
        '4': require('../assets/git/rating-4.png'),
        '5': require('../assets/git/rating-5.png'),
    }
}