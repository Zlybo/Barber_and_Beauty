import {Pressable, FlatList, Text, View, TextInput} from "react-native";
import {Link} from "expo-router";
import React, {useState, useEffect} from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Simple_Gray_Box} from "../../components/Gray_Boxes";
import {api} from "../../api";

export default function Menu() {
    const [barbershops, setBarbershops] = useState([]);

    // Cargar barberías y sus estados de bookmark
    useEffect(() => {
        (async () => {
            try {
                // Obtener barberías
                const barberData = await api.getBarbershops();

                // Obtener estado de bookmarks para el usuario actual
                const bookmarkData = await api.getAllBookmarks(); // userId fijo por ahora

                // Combinar datos de barberías con sus estados de bookmark
                const barbershopsWithBookmarks = barberData.map(shop => ({
                    ...shop,
                    saved: bookmarkData.some(bookmark => bookmark.barbershop_id === shop.id)
                }));

                setBarbershops(barbershopsWithBookmarks);
            } catch (error) {
                console.error('Error cargando barberías:', error);
            }
        })();
    }, []);
    // Función para manejar el toggle del bookmark
    const handleToggleBookmark = async (barbershopId) => {
        try {
            await api.toggleBookmark(barbershopId);
            // Actualizar el estado local después de confirmar con la base de datos
            setBarbershops(barbershops.map(shop =>
                shop.id === barbershopId
                    ? {...shop, saved: !shop.saved}
                    : shop
            ));
        } catch (error) {
            console.error('Error al cambiar bookmark:', error);
        }
    };


    const renderCard = ({item}) => {
        const icon = item.saved ? "bookmark-plus" : "bookmark-plus-outline";
        return (
            <Simple_Gray_Box className={"items-center justify-center p-3 ml-5 mt-5"}>
                <View className={"bg-white rounded-2xl h-[150px] w-[150px]"}></View>
                <Text className={"text-[#FFEB3B]"}>{item.status}</Text>
                <Text className={"text-white"}>{item.name}</Text>
                <View className={"flex-row items-center"}>
                    <Pressable onPress={() => handleToggleBookmark(item.id)}
                               className={"bg-[##2b2b2a] active:bg-gray-900 rounded-2xl"}>
                        <MaterialCommunityIcons
                            className={"rounded-2xl p-3"}
                            name={icon} size={24}
                            color="white"
                        />
                    </Pressable>
                    <Link asChild href={{
                        pathname: "../booking",
                        params: {id: item.id}
                    }}>
                        <Pressable className={"bg-[#fed60b] ml-3 p-3 rounded-2xl active:bg-yellow-500"}>
                            <View className={"items-center justify-center"}>
                                <Text className={"font-bold text-xl"}>
                                    Agendar cita
                                </Text>
                            </View>
                        </Pressable>
                    </Link>
                </View>
            </Simple_Gray_Box>
        );
    }
    return (
        <View className={"flex-1 bg-black"}>
            <View className={"flex-row m-5 justify-between"}>
                <MaterialIcons name="notifications" size={32} color="gray"/>
                <Text className={" text-white font-medium text-center text-3xl"}>
                    Bienvenido
                </Text>
                <Link asChild href={"/settings"}>
                    <Pressable>
                        <MaterialIcons name="settings" size={32} color="gray"/>
                    </Pressable>
                </Link>
            </View>
            <View className={"flex-row m-5 items-center"}>
                <Pressable>
                    <MaterialCommunityIcons name="menu" size={32} color="gray"/>
                </Pressable>
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
                contentContainerStyle={{alignItems: "flex-start"}}
            />
        </View>
    );
}