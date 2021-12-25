import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

export default function ReviewDetails({ route }) {
    const { item } = route.params;
    return (
        <View style={globalStyles.container}>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
            <Text>{item.rating}</Text>
        </View>
    )
}
