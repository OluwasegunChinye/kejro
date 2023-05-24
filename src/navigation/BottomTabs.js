import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Jobs, Message, More } from '../screens';
import { Icons } from '../components';
import { COLORS } from '../constants/theme';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.secondary,
                    borderTopWidth: 0,
                },
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: 12,
                            }}
                        >
                            <Icons
                                name="home-outline"
                                size={28}
                                color={focused ? COLORS.primary : COLORS.faded}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="message"
                component={Message}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: 12,
                            }}
                        >
                            <Icons
                                name="chatbox-outline"
                                size={28}
                                color={focused ? COLORS.primary : COLORS.faded}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="jobs"
                component={Jobs}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: 12,
                            }}
                        >
                            <Icons
                                name="briefcase-outline"
                                size={28}
                                color={focused ? COLORS.primary : COLORS.faded}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="more"
                component={More}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                top: 12,
                            }}
                        >
                            <Icons
                                name="layers-outline"
                                size={28}
                                color={focused ? COLORS.primary : COLORS.faded}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;
