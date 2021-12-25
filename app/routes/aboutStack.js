import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header';
import { getHeaderTitle } from '@react-navigation/elements';

const Stack = createStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                title: 'GameZone',
                headerTitleAlign: "center",
                headerTintColor: '#444',
                headerStyle: {
                    backgroundColor: '#eee',
                    height: 60,
                },
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
        >
            <Stack.Screen
                name="AboutPage"
                component={About}
                options={{
                    headerTitle: () => <Header />
                }}
            />
        </Stack.Navigator>
    )
}
