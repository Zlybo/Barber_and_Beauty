import {Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Main_Logo} from "./Main_Logo";

export function Main() {
    const insets = useSafeAreaInsets();
    return (
        <View style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            backgroundColor: "gray",
            flex: 1,
        }}>
            <View className={"flex-1 bg-black items-center justify-center"}>
                <Main_Logo/>
                <Text className={"color-[#ffd700] top-52 font-bold text-lg"}>
                    Te Damos La Bienvenida
                </Text>
                <Pressable onPress={() => {alert("Iniciar Sesión")}}
                    className={"bg-orange-600 rounded top-52 w-6/12 active:bg-orange-800"}>
                    <Text className={"color-black font-bold text-lg text-center"}>
                        Iniciar Sesión
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}