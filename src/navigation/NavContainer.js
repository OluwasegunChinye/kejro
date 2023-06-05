import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../screens/GetStarted';
import SignUp from '../screens/SignUp';
import { Login, Register } from '../screens';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const NavContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='login'
                screenOptions={{
                    headerShadowVisible: false,
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="hometabs"
                    component={BottomTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Get started" component={GetStarted} />
                <Stack.Screen name="signup" component={SignUp} />
                <Stack.Screen name="register" component={Register} />
                <Stack.Screen name="login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavContainer;
