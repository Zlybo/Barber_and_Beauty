import {Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Main} from './components/Main';
import {SafeAreaProvider} from "react-native-safe-area-context";
import "./global.css"

export default function App() {
    return (
        <SafeAreaProvider>
            <View className={"flex-1"}>
                <StatusBar style="light"/>
                <Main/>
            </View>
        </SafeAreaProvider>
    );
}
