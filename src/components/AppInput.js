import { View, Text, TextInput, Dimensions } from 'react-native';
import React from 'react';
import {COLORS} from '../constants/theme'

const { height, width } = Dimensions.get('screen');

const AppInput = ({
    placeholder,
    value,
    onChangeText,
    keyboardType,
    onBlur,
    autoCapitalize,
    secureTextEntry,
}) => {
    return (
        <TextInput
            style={{width: width * 0.75, fontSize: 12, }}
            placeholderTextColor={COLORS.primary}
            className="rounded-md font-[poppins] py-3 bg-white pl-3"
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            keyboardType={keyboardType}
            onBlur={onBlur}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
        />
    );
};

export default AppInput;
