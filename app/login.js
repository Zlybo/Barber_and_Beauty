import {Pressable, Text, View, TextInput} from "react-native";
import {Link} from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Login() {
    return (
        <View className={"flex-1 bg-black"}>
            <View className={"flex-row"}>
                <MaterialIcons className={"ml-5"} name="notifications" size={32} color="gray"/>
                <Text className={"flex-1 color-white font-medium text-center text-3xl"}>
                    Bienvenido
                </Text>
                <MaterialIcons className={"mr-5"} name="settings" size={32} color="gray"/>
            </View>
            <Text className={"color-white font-medium text-3xl ml-5"}>
                Username
            </Text>

            <View className={"items-center pt-5 mx-5"}>
                <View className="flex-row items-center bg-[#1c1c1c] rounded-full w-full h-12 px-4">
                    <MaterialIcons name="search" size={24} color="#FFEB3B"/>
                    <TextInput
                        className="text-white pl-2 text-lg"
                        placeholder="SEARCH"
                        placeholderTextColor="gray"
                    />
                </View>
            </View>
        </View>
    );
}