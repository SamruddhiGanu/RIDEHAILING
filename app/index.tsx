import { SafeAreaView, View } from 'react-native';
import { Text } from 'react-native';
import { Redirect } from 'expo-router';
const Home =()=>{
    return <Redirect href="/(auth)/Welcome" />;
};

export default Home;