import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import RootDrawer from './app/routes/draw';


export default function App() {
  let [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./app/assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./app/assets/fonts/Nunito-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <RootDrawer />
      </NavigationContainer>
    );
  }
}
