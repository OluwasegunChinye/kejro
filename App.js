import { useCallback } from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavContainer } from './src/navigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
        'poppins-m': require('./assets/fonts/Poppins-Medium.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View className="flex-1" onLayout={onLayoutRootView}>
            <NavContainer />
        </View>
    );
}
