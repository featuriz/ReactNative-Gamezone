import React from 'react'
import { FlatList, Linking, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.aboutTitleText}>About Screen</Text>
            <Text style={{ color: '#000', fontSize: 20 }}>Links</Text>
            <Text style={globalStyles.aboutLinkText}
                onPress={() => Linking.openURL('https://expo.dev/accounts/sudhakarkrishnan/projects/gamezone')}>
                Expo
            </Text>
            <Text style={globalStyles.aboutLinkText}
                onPress={() => Linking.openURL('https://github.com/featuriz/ReactNative-Gamezone')}>
                GitHub
            </Text>
            <Text style={globalStyles.aboutLinkText}
                onPress={() => Linking.openURL('mailto:featuriz@gmail.com')}>
                Email: featuriz@gmail.com
            </Text>
            <Text style={globalStyles.aboutLinkText}
                onPress={() => Linking.openURL('tel:0917598543391')}>
                Phone: +91 7598543391
            </Text>
            <Text style={{ color: '#000', fontSize: 20, marginTop: 20 }}>More info..</Text>
            <Text style={{ color: '#555', fontSize: 14, marginTop: 20 }}>This project includes,</Text>
            <FlatList
                data={[
                    { key: 'Navigation' },
                    { key: 'List' },
                    { key: 'Model' },
                    { key: 'Form' },
                    { key: 'Validation' },
                    { key: 'Slider (Menu and Model)' },
                    { key: 'Background Images' },
                ]}
                renderItem={({ item }) => <Text style={globalStyles.aboutItems}>{item.key}</Text>}
            />
            <Text style={{ color: '#0F0', fontSize: 11, marginTop: 20, alignSelf: 'center' }}>By, Sudhakar Krishnan.</Text>
        </View>
    )
}
