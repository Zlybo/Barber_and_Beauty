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
            <Text className={"color-white font-medium text-3xl ml-5 mt-5"}>
                Username
            </Text>
            <View className={"flex-row bg-[#1c1c1c] rounded-3xl items-center mx-5 mt-5"}>
                <MaterialIcons className={"ml-5"} name="search" size={32} color="#FFEB3B"/>
                <TextInput
                    className={"color-white w-5/6 h-20 text-2xl"}
                    placeholder={"BUSCAR"} placeholderTextColor={"gray"}/>
            </View>
            <Text className={"color-[##818180] text-3xl ml-5 mt-10"}>
                Ultima visita
            </Text>

            <View className={"flex-row bg-[#1c1c1c] h-20 rounded-3xl mx-5 mt-5"}>
                <View className={"ml-5 bg-white h-20 w-20"}></View>
                <View className={"justify-center ml-5"}>
                    <Text className={"text-white"}>
                        NOMBRE APELLIDO
                    </Text>
                    <Text className={"text-white"}>4.2 Reviews</Text>
                </View>
            </View>

            <Text className={"color-[##818180] text-3xl ml-5 mt-10"}>
                Barberias cercanas
            </Text>

            <View className={"bg-[#1c1c1c] h-[250px] w-[200px] rounded-3xl mx-5 mt-5"}>
                <View className={"ml-5 bg-white h-[150px] w-[150px]"}></View>
                <Text className={"text-[#FFEB3B] ml-5"}>ABIERTA</Text>
                <Text className={"text-white ml-5"}>Nombre de barberia</Text>
                <View className={"ml-5 bg-[#fed60b] items-center justify-center rounded-3xl h-[40px] w-[150px]"}>
                    <Text className={"font-bold text-xl"}>
                        Agendar cita
                    </Text>
                </View>
            </View>
        </View>
    );
}