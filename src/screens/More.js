import { View, Text, Dimensions } from 'react-native';
import { COLORS } from '../constants/theme';

const { height, width } = Dimensions.get('screen');

const More = () => {
    return (
        <View
            className=" flex-1 items-center"
            style={{ backgroundColor: COLORS.secondary }}
        >
            <View className="items-center" style={{ marginTop: height * 0.1 }}>
                <Text>More</Text>
            </View>
        </View>
    );
};

export default More;
