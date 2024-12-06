import {Pressable, FlatList, Text, View, TextInput} from "react-native";
import {Link} from "expo-router";
import React, {useState} from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Simple_Gray_Box} from "../../components/Gray_Boxes";

export default function Menu() {
    const [barbershops, setBarbershops] = useState([
        {id: '1', name: 'Barbería 1', status: 'ABIERTA', saved: false},
        {id: '2', name: 'Barbería 2', status: 'ABIERTA', saved: false},
        {id: '3', name: 'Barbería 3', status: 'ABIERTA', saved: false},
        {id: '4', name: 'Barbería 4', status: 'ABIERTA', saved: false},
    ]);
    const renderCard = ({item}) => (
        <View
            className={"bg-[#1c1c1c] h-[250px] w-[180px] border border-gray-600 items-center justify-center rounded-3xl ml-5 mt-5"}>
            <View className={"bg-white rounded-2xl h-[150px] w-[150px]"}></View>
            <Text className={"text-[#FFEB3B]"}>{item.status}</Text>
            <Text className={"text-white "}>{item.name}</Text>
            <View className={"flex-row justify-center items-center"}>
                <Pressable className={"bg-[##2b2b2a] active:bg-white rounded-2xl"}>
                    <MaterialCommunityIcons
                        className={" rounded-2xl p-3 mr-2"}
                        name="bookmark-plus-outline" size={24} color="white"
                    />
                </Pressable>
                <Link asChild href={"../booking"}>
                    <Pressable className={"bg-[#fed60b] rounded-2xl active:bg-yellow-500"}>
                        <View className={"items-center justify-center h-[45.7px] w-[120px]"}>
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
                <Text className={"flex-1 text-white font-medium text-center text-3xl"}>
                    Bienvenido
                </Text>
                <MaterialIcons name="settings" size={32} color="gray"/>
            </View>
            <View className={"flex-row m-5 items-center"}>
                <MaterialCommunityIcons name="menu" size={32} color="gray"/>
                <Text className={"text-white font-medium text-3xl ml-5"}>
                    Username
                </Text>
            </View>

            <Simple_Gray_Box className={"flex-row items-center justify-between mx-5 mt-5"}>
                <TextInput className={"text-white text-xl flex-1 ml-5"}
                           placeholder={"BUSCAR"} placeholderTextColor={"gray"}/>
                <MaterialIcons className={"mr-5"} name="search" size={32} color="#FFEB3B"/>
            </Simple_Gray_Box>

            <Text className={"color-[##818180] text-3xl ml-5 mt-10"}>
                Última visita
            </Text>

            <Simple_Gray_Box className={"flex-row items-center mx-5 mt-5"}>
                <View className={"ml-5 bg-white rounded-2xl h-16 w-16"}/>
                <View className={"ml-5 py-5"}>
                    <Text className={"text-white"}>NOMBRE APELLIDO</Text>
                    <Text className={"text-white"}>4.2 Reviews</Text>
                </View>
            </Simple_Gray_Box>

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