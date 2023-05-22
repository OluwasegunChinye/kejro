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

import { COLORS } from '../constants/theme';
import { Icons } from '../components';
import imgPlaceHolder from '../../assets/klogo.png';

const { height, width } = Dimensions.get('screen');

const Register = ({ route, navigation }) => {
    // const user = route.params.userName;

    const [profile, setProfile] = useState(null);

      const pickImage = async () => {
          // No permissions request is necessary for launching the image library
          let result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect: [4, 3],
              quality: 1,
          });

        //   console.log(result);

          if (!result.canceled) {
              setProfile(result.assets[0].uri);
          }
      };

    return (
        <ScrollView
            className="flex-1"
            style={{ backgroundColor: COLORS.secondary }}
        >
            <View className="items-center" style={{ marginTop: height * 0.1 }}>
                <Text
                    className="font-[poppins-m] text-xl"
                    style={{ color: COLORS.primary }}
                >
                    Hi Joe 👋{' '}
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
                            name="add-circle"
                            size={30}
                            color={COLORS.tertiary}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Register;
