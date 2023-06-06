import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../constants/theme';
import { AppBtn, AppInput, Icons } from '../components';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

const { height, width } = Dimensions.get('screen');

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (email, password) => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log('logged in users email is', user.email);
            navigation.navigate('hometabs');
        } catch (err) {
            console.error('cant login', err);
            alert(err.message);
        }
    };

    const handleForgotPassword = () => {};

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
                <AppBtn
                    title="login"
                    backgroundColor={COLORS.tertiary}
                    onPress={handleLogin}
                />
            </View>

            <TouchableOpacity
                className=" flex-row"
                onPress={handleForgotPassword}
                style={{ marginTop: height * 0.08 }}
            >
                <Text className="text-xs text-white font-[poppins]">
                    forgot your password ? click here
                </Text>
                <View className="-rotate-45 pl-1">
                    <Icons name="arrow-forward" color="white" size={15} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
