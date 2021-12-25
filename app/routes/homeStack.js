import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import { getHeaderTitle } from '@react-navigation/elements';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                title: 'GameZone',
                headerTitleAlign: "center",
                headerTintColor: '#444',
                headerStyle: {
                    backgroundColor: '#eee',
                    height: 60,
                }
            }}
        >
            <Stack.Screen
                name="HomePage"
                component={Home}
                options={{
                    header: ({ navigation, route, options, back }) => {
                        const title = getHeaderTitle(options, route.name);

                        return (
                            <Header
                                title={title}
                                navigation={navigation}
                            />
                        );
                    }
                }}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{
                    title: 'ReviewDetails'
                }}
            />
        </Stack.Navigator>
    )
}
