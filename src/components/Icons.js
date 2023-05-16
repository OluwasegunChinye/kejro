import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Icons = ({ name, color, size }) => {
    return <Ionicons name={name} color={color} size={size} />;
};

export default Icons;
