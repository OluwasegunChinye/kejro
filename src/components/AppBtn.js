import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';

const { height, width } = Dimensions.get('screen');

const AppBtn = ({ onPress, title, backgroundColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ width: width * 0.75, backgroundColor: backgroundColor }}
            className="items-center justify-center py-4 rounded-md"
        >
            <Text className="text-white text-sm font-[poppins-m]">{title}</Text>
        </TouchableOpacity>
    );
};

export default AppBtn;
