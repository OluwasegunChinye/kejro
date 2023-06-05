import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/theme';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

const { height, width } = Dimensions.get('screen');

const More = ({ navigation }) => {
    const handleSignOut = () => {
        signOut(auth);
        navigation.navigate('login');
    };
    return (
        <View
            className=" flex-1 items-center paddingHorizontal: width * 0.05,"
            style={{ backgroundColor: COLORS.secondary }}
        >
            <View className="items-center" style={{ marginTop: height * 0.1 }}>
                <Text>More</Text>
            </View>
            <TouchableOpacity className="mt-auto" onPress={handleSignOut}>
                <Text
                    className="font-[poppins-m] mb-7 text-lg"
                    style={{ color: COLORS.danger }}
                >
                    Sign out
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default More;
