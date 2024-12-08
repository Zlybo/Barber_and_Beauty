import {View} from "react-native";
import {Slot} from "expo-router";
import {StatusBar} from "expo-status-bar";
import "../global.css";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function Layout() {
    const insets = useSafeAreaInsets();
    return (
        <View className={"flex-1"} style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            backgroundColor: "black",
            flex: 1,
        }}>
            <StatusBar style="light"/>
            <Slot/>
        </View>
    );
}