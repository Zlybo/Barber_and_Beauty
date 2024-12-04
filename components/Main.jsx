import {Pressable, Text, View} from 'react-native';
import {Main_Logo} from "./Main_Logo";
import {Link} from "expo-router";

export function Main() {
    return (
        <View className={"flex-1"}>
            <View className={"flex-1 bg-black items-center justify-center"}>
                <Main_Logo/>
                <Text className={"color-[#ffd700] top-40 font-bold text-xl"}>
                    Te Damos La Bienvenida
                </Text>
                <Link asChild href={"/menu"}>
                    <Pressable
                        className={"flex items-center justify-center mt-1 " +
                            "bg-orange-600 rounded-full top-40 h-12 w-9/12 " +
                            "active:bg-orange-800"}>
                        <Text className={"color-black font-bold text-2xl"}>
                            Iniciar Sesión
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}