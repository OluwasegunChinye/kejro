import { View, Text, SafeAreaView, Dimensions } from 'react-native';


const { height, width } = Dimensions.get('screen');

const Home = () => {
    return (
        <SafeAreaView className="items-center">
            <Text>Home</Text>
        </SafeAreaView>
    );
};

export default Home;
