import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    Dimensions,
    KeyboardAvoidingView,
} from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { AppBtn, AppInput } from '../components/index';
import { COLORS } from '../constants/theme';
import { auth, createUserWithEmailAndPassword } from '../../config/firebase';

const { height, width } = Dimensions.get('screen');

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(1, 'Too short!')
        .max(15, 'Too long!')
        .required('required'),

    lastName: Yup.string()
        .min(1, 'Too short!')
        .max(15, 'Too long!')
        .required('required'),

    email: Yup.string().email(),

    password: Yup.string()
        .min(8)
        .required('Please enter your password')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
            'min 8 characters, at least a letter and a number'
        ),
    confirmPassword: Yup.string()
        .min(8, 'Must be 8 characters long')
        .oneOf([Yup.ref('password')], 'Your password dont match')
        .required('Confirm password is required'),
});

const SignUp = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
                try {
                    await createUserWithEmailAndPassword(
                        auth,
                        (email = values.email),
                        (password = values.password)
                    );
                    navigation.navigate('register', {
                        firstName: values.firstName,
                        lastName: values.lastName,
                    });
                } catch (error) {
                    console.log(error);
                }
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                setFieldTouched,
                handleSubmit,
            }) => (
                <ScrollView
                    className="flex-1 "
                    style={{ backgroundColor: COLORS.secondary }}
                >
                    {loading ? (
                        <ActivityIndicator />
                    ) : (
                        <View className="items-center">
                            <Text
                                className="font-[poppins-m] text-xl"
                                style={{
                                    color: COLORS.primary,
                                    marginTop: height * 0.1,
                                }}
                            >
                                Create Account
                            </Text>

                            <View style={{ marginTop: height * 0.1 }}>
                                <AppInput
                                    placeholder="first name"
                                    autoCorrect={false}
                                    autoComplete="off"
                                    autoCapitalize="words"
                                    value={values.firstName}
                                    onChangeText={handleChange('firstName')}
                                    onBlur={() => setFieldTouched('firstName')}
                                />
                                {touched.firstName && errors.firstName && (
                                    <Text className="font-[poppins] text-xs text-red-500 pl-1">
                                        {errors.firstName}
                                    </Text>
                                )}
                            </View>
                            <View className="mt-6">
                                <AppInput
                                    placeholder="last name"
                                    autoComplete="off"
                                    autoCorrect={false}
                                    autoCapitalize="words"
                                    value={values.lastName}
                                    onChangeText={handleChange('lastName')}
                                    onBlur={() => setFieldTouched('lastName')}
                                />
                                {touched.lastName && errors.lastName && (
                                    <Text className="font-[poppins] text-xs text-red-500 pl-1">
                                        {errors.lastName}
                                    </Text>
                                )}
                            </View>

                            <View className="mt-6">
                                <AppInput
                                    placeholder="enter email"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={() => setFieldTouched('email')}
                                />
                                {touched.email && errors.email && (
                                    <Text className="font-[poppins] text-xs text-red-500 pl-1">
                                        {errors.email}
                                    </Text>
                                )}
                            </View>
                            <View className="mt-6">
                                <AppInput
                                    placeholder="Password"
                                    autoCapitalize="none"
                                    secureTextEntry
                                    onBlur={() => setFieldTouched('password')}
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                />
                                {touched.password && errors.password && (
                                    <Text className="font-[poppins] text-xs text-red-500 pl-1 ">
                                        {errors.password}
                                    </Text>
                                )}
                            </View>
                            <View className="mt-6">
                                <AppInput
                                    placeholder="Confirm Password"
                                    autoCapitalize="none"
                                    secureTextEntry
                                    value={values.confirmPassword}
                                    onChangeText={handleChange(
                                        'confirmPassword'
                                    )}
                                    onBlur={() =>
                                        setFieldTouched('confirmPassword')
                                    }
                                />
                                {touched.confirmPassword &&
                                    errors.confirmPassword && (
                                        <Text className="font-[poppins] text-xs text-red-500 pl-1">
                                            {errors.confirmPassword}
                                        </Text>
                                    )}
                            </View>

                            <View className=" mt-20">
                                <AppBtn
                                    title="Create account"
                                    backgroundColor={COLORS.primary}
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    )}
                </ScrollView>
            )}
        </Formik>
    );
};

export default SignUp;
