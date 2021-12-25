import React, { useState } from 'react'
import { FlatList, Keyboard, Modal, Text, TouchableWithoutFeedback, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { globalStyles } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Film One', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Film Two', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Film Three', rating: 1, body: 'lorem ipsum', key: '3' }
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalVisible(false)
    }
    return (
        <View style={globalStyles.container}>

            <Modal animationType="slide" visible={modalVisible}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={globalStyles.modalContent}>
                        <MaterialIcons name="close" onPress={() => setModalVisible(false)} size={24} style={{ ...globalStyles.modalToggle, ...globalStyles.modalClose }} />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons name="add" onPress={() => setModalVisible(true)} size={24} style={globalStyles.modalToggle} />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', { item })}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}


