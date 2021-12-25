import React from 'react'
import { Image, Text, View } from 'react-native'
import Card from '../shared/card';
import { globalStyles, images } from '../styles/global'


export default function ReviewDetails({ route }) {
    const { item } = route.params;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
                <View style={globalStyles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={images.ratings[item.rating]} />
                </View>
            </Card>
        </View>
    )
}
