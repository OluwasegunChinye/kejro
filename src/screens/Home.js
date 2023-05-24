import { View, Text, SafeAreaView, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

const Home = ({ navigation, route }) => {
    return (
        <SafeAreaView className="items-center">
            <Text>Home</Text>
        </SafeAreaView>
    );
};

export default Home;
