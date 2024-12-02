import {Pressable, Text, View} from "react-native";
import {Link} from "expo-router";

export default function Login() {
    return (
        <View className={"flex-1 items-center justify-center bg-black"}>
            <Text className={"text-center text-white"}>
                loren ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </Text>
            <Text className={"color-[#ffd700] top-40 font-bold text-xl"}>
                Boton De Regreso
            </Text>
            <Link asChild href={"/"}>
                <Pressable className={"flex top-40 justify-center bg-orange-600 rounded-full h-12 w-9/12 " +
                    "active:bg-orange-800"}>
                    <Text className={"text-center font-bold text-2xl"}>
                        Regresar
                    </Text>
                </Pressable>
            </Link>
        </View>
    );
}