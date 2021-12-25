import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";

const Drawer = createDrawerNavigator();

export default function RootDrawer() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerTitle: 'GameZone',
                headerTitleAlign: "center",
                headerTintColor: '#444',
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#eee',
                    height: 60,
                },
            }}
        >
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
    );
}