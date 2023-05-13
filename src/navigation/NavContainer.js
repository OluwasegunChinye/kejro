import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const NavContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen  name='welcome' component={Welcome}/> */}
                <Stack.Screen name="bottomtabs" component={BottomTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavContainer;
