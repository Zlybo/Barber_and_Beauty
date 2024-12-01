import {StatusBar} from 'expo-status-bar';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Main_Logo} from "./Main_Logo";

export function Main() {
    const insets = useSafeAreaInsets();
    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <View className={"items-center mg"}>
                <Main_Logo/>
            </View>
            <View style={{top: 125, alignItems: "center"}}>
                <Text className={"color-white text-lg"}>Bienvenido</Text>
                <StatusBar style="light"/>
                <Pressable
                    className={"bg-white rounded active:bg-gray-400 w-11/12 items-center justify-center"}
                    onPress={() => {
                        alert("Comenzar")
                    }}>
                    <Text className={"font-bold text-lg"}> Comenzar </Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    welcome_text: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        textAlign: "center",
    },
    button_text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
});
