import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" onPress={openMenu} size={28} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        paddingBottom: 5
    },
    headerTitle: {
        marginTop: 0
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 16,
    }
})
