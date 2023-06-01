import {
    View,
    Text,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import { db, auth, addDoc, collection } from '../../config/firebase';

import { COLORS } from '../constants/theme';
import { AppBtn, AppInput, Icons } from '../components';
import imgPlaceHolder from '../../assets/klogo.png';

const { height, width } = Dimensions.get('screen');


const SignupSchema = Yup.object().shape({
    city: Yup.string().required('required'),
    country: Yup.string().required('required'),
    role: Yup.string().required('required'),
});

const Register = ({ route, navigation }) => {
    const { firstName, lastName } = route.params;

    const [profile, setProfile] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.canceled) {
            setProfile(result.assets[0].uri);
        }
    };

    return (
        <View className="flex-1" style={{ backgroundColor: COLORS.secondary }}>
            <View className="items-center" style={{ marginTop: height * 0.1 }}>
                <Text
                    className="font-[poppins-m] text-lg"
                    style={{ color: COLORS.primary }}
                >
                    Hi {firstName} 👋
                </Text>
                <Text
                    className="font-[poppins] mt-2 text-xs"
                    style={{ color: COLORS.primary }}
                >
                    Just a few more steps to go
                </Text>
                <View className="">
                    <Image
                        className="w-24 h-24 rounded-full mt-5"
                        resizeMode="contain"
                        source={profile ? { uri: profile } : imgPlaceHolder}
                    />
                    <TouchableOpacity
                        className=" absolute top-20 left-20"
                        onPress={pickImage}
                    >
                        <Icons
                            name="camera"
                            size={26}
                            color={COLORS.tertiary}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <Formik
                initialValues={{
                    city: '',
                    country: '',
                    role: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={async (values) => {
                    try {
                        const user = auth.currentUser;
                        await addDoc(collection(db, 'Users'), {
                            city: values.city,
                            country: values.country,
                            role: values.role,
                            profile: profile,
                            uid: user.uid,
                            firstName,
                            lastName,
                        });

                        navigation.replace('hometabs');
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
                    <ScrollView>
                        <View className="items-center mt-8">
                            <View className="">
                                <AppInput
                                    placeholder="enter your city"
                                    // autoComplete="off"
                                    autoCapitalize="words"
                                    value={values.city}
                                    onChangeText={handleChange('city')}
                                    onBlur={() => setFieldTouched('city')}
                                />
                                {touched.city && errors.city && (
                                    <Text className="font-[poppins] text-xs text-red-500 pl-1 ">
                                        {errors.city}
                                    </Text>
                                )}
                            </View>
                            <View className="mt-6">
                                <AppInput
                                    placeholder="enter your country"
                                    // autoComplete="off"
                                    autoCapitalize="words"
                                    value={values.country}
                                    onChangeText={handleChange('country')}
                                    onBlur={() => setFieldTouched('country')}
                                />
                                {touched.country && errors.country && (
                                    <Text className="font-[poppins] text-xs text-red-500 pl-1 ">
                                        {errors.country}
                                    </Text>
                                )}
                            </View>
                            <View className="mt-6">
                                <AppInput
                                    placeholder="enter your job title"
                                    // autoComplete="off"
                                    autoCapitalize="words"
                                    value={values.role}
                                    onChangeText={handleChange('role')}
                                    onBlur={() => setFieldTouched('role')}
                                />
                                {touched.role && errors.role && (
                                    <Text className="font-[poppins] text-xs text-red-500 pl-1 ">
                                        {errors.role}
                                    </Text>
                                )}
                            </View>

                            <View className=" mt-10">
                                <AppBtn
                                    title="Submit"
                                    backgroundColor={COLORS.primary}
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    </ScrollView>
                )}
            </Formik>
        </View>
    );
};

export default Register;
