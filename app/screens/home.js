import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { globalStyles } from '../styles/global'



export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Film One', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Film Two', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Film Three', rating: 1, body: 'lorem ipsum', key: '3' }
    ]);
    return (
        <View style={globalStyles.container}>
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


