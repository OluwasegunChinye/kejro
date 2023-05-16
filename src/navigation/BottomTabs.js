import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Jobs, Message, More } from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="message" component={Message} />
            <Tab.Screen name="jobs" component={Jobs} />
            <Tab.Screen name="more" component={More} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
