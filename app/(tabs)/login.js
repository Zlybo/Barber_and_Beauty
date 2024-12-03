import {Pressable, FlatList, Text, View, TextInput} from "react-native";
import {Link} from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const barbershops = [
    {id: '1', name: 'Barbería 1', status: 'ABIERTA'},
    {id: '2', name: 'Barbería 2', status: 'ABIERTA'},
    {id: '3', name: 'Barbería 3', status: 'ABIERTA'},
    {id: '4', name: 'Barbería 4', status: 'ABIERTA'},
];

export default function Login() {
    const renderCard = ({item}) => (
        <View
            className={"bg-[#1c1c1c] h-[250px] w-[200px] border border-gray-600 items-center justify-center rounded-3xl ml-5 mt-5"}>
            <View className={"bg-white rounded-2xl h-[150px] w-[150px]"}></View>
            <Text className={"text-[#FFEB3B]"}>{item.status}</Text>
            <Text className={"text-white "}>{item.name}</Text>
            <View className={"flex-row justify-center items-center"}>
                <MaterialCommunityIcons
                    className={"bg-[##2b2b2a] rounded-2xl p-3 mr-2"}
                    name="bookmark-plus-outline" size={24} color="white"/>
                <Link asChild href={"../booking"}>
                    <Pressable>
                        <View className={"bg-[#fed60b] items-center justify-center rounded-2xl h-[45.7px] w-[120px]"}>
                            <Text className={"font-bold text-xl"}>
                                Agendar cita
                            </Text>
                        </View>
                    </Pressable>
                </Link>

            </View>
        </View>
)
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

        <Text className={"color-[##818180] text-3xl ml-5 mt-10"}>
            Barberías cercanas
        </Text>
        <FlatList
            data={barbershops}
            renderItem={renderCard}
            horizontal={true}
            keyExtractor={item => item.id}
        />
    </View>
);
}