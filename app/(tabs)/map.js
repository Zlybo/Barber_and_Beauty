import {Pressable, FlatList, Text, View, TextInput} from "react-native";
import {Link} from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Login() {
    return (
        <View className={"flex-1 bg-black"}>
            <View className={"flex-row m-5"}>
                <MaterialIcons name="notifications" size={32} color="gray"/>
                <Text className={"flex-1 color-white font-medium text-center text-3xl"}>
                    Bienvenido
                </Text>
                <MaterialIcons name="settings" size={32} color="gray"/>
            </View>
            <View className={"flex-row m-5 items-center"}>
                <MaterialCommunityIcons name="menu" size={32} color="gray"/>
                <Text className={"color-white font-medium text-3xl ml-5"}>
                    Username
                </Text>
            </View>
            <View className={"flex-row border border-gray-600 bg-[#1c1c1c] rounded-3xl items-center mx-5 mt-5"}>
                <TextInput
                    className={"color-white w-5/6 h-16 text-xl ml-5"}
                    placeholder={"BUSCAR"} placeholderTextColor={"gray"}/>
                <MaterialIcons name="search" size={32} color="#FFEB3B"/>
            </View>
            <Text className={"color-[##818180] text-3xl ml-5 mt-10"}>
                Última visita
            </Text>

            <View className={"flex-row border border-gray-600 items-center bg-[#1c1c1c] h-20 rounded-3xl mx-5 mt-5"}>
                <View className={"ml-5 bg-white rounded-2xl h-16 w-16"}></View>
                <View className={"justify-center ml-5"}>
                    <Text className={"text-white"}>
                        NOMBRE APELLIDO
                    </Text>
                    <Text className={"text-white"}>4.2 Reviews</Text>
                </View>
            </View>
        </View>
    );
}