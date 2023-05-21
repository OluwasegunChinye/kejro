import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const Register = ({ route, navigation }) => {
    const user = route.params.userName;

    return (
        <SafeAreaView className="items-center">
            <View>
                <Text>Hello {user},</Text>
            </View>
        </SafeAreaView>
    );
};

export default Register;
