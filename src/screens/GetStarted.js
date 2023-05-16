import {
    View,
    Text,
    SafeAreaView,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';
import { COLORS } from '../constants/theme';
import { AppBtn, Icons } from '../components/index';

const { height, width } = Dimensions.get('screen');

const GetStarted = ({navigation}) => {
    return (
        <SafeAreaView
            className="flex-1 items-center"
            style={{ backgroundColor: COLORS.primary }}
        >
            <Text
                className="font-[poppins-m] text-white text-xl text-center px-20 leading-9"
                style={{ marginTop: height * 0.12 }}
            >
                Lets match you with that dream job
            </Text>

            <View className="pt-10 items-center">
                <Image
                    source={require('../../assets/img-1.png')}
                    resizeMode="contain"
                    style={{ width: width * 0.8 }}
                />
            </View>

            <View style={{ paddingTop: height * 0.15 }}>
                <AppBtn title="Get Started" backgroundColor={COLORS.tertiary}  onPress={() => navigation.navigate('signup')}/>
                <View className="flex-row pt-4 justify-center">
                    <Text className="font-[poppins] text-sm">
                        Already have an account ?
                    </Text>
                    <TouchableOpacity className="" onPress={() => navigation.navigate('login')}>
                        <Text className="font-[poppins-m] ml-2 text-sm ">
                            log in
                        </Text>
                    </TouchableOpacity>
                    <View className="rotate-45">
                        <Icons name="arrow-up" size={14} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default GetStarted;
