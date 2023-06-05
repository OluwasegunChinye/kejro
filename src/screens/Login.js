import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../constants/theme';
import { AppBtn, AppInput, Icons } from '../components';

const { height, width } = Dimensions.get('screen');

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View
            className="flex-1 items-center "
            style={{
                backgroundColor: COLORS.primary,
            }}
        >
            <View style={{ marginTop: height * 0.1 }}>
                <Image source={require('../../assets/klogo-white.png')} />
            </View>

            <Text
                className="text-4xl font-[poppins-m] py-6 text-white"
                style={{ letterSpacing: 10 }}
            >
                Kejro
            </Text>

            <Text className="py-10 font-[poppins] text-sm text-white">
                Welcome Back
            </Text>
            <View>
                <AppInput
                    placeholder="email"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View className="mt-6">
                <AppInput
                    placeholder="password"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View className="mt-10">
                <AppBtn title="login" backgroundColor={COLORS.tertiary} />
            </View>

            <TouchableOpacity>
                <View className="mt-40 flex-row">
                    <Text className="text-xs text-white font-[poppins]">
                        forgot your password ? click here
                    </Text>
                    <View className="-rotate-45 pl-1">
                        <Icons name="arrow-forward" color="white" size={15} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
