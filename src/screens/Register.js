import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { API_URL } from '@env';

const URL = API_URL;

const Register = ({ route, navigation }) => {
    const user = route.params.userName;
    return (
        <SafeAreaView className="items-center">
            <View className="mt-10">
                <Text className="text-green-900">
                    Register your issues here {URL}
                </Text>
            </View>
            <View>
                <Text>Hello {user},</Text>
            </View>
        </SafeAreaView>
    );
};

export default Register;
