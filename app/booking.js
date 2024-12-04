import {View, Text, Image, Pressable} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Gray_Box} from "../components/Gray_Box";
import {Link} from "expo-router";

export default function Booking() {
    return (
        <View className={"flex-1"}>
            <Image source={require("../assets/Images/booking.png")} className={"w-full h-3/6"}/>
            <Link asChild href={"./menu"}>
                <Pressable className={"absolute top-5 left-3 bg-black p-2 rounded-full active:bg-gray-700"}>
                    <MaterialCommunityIcons name="arrow-left" size={32} color="white"/>
                </Pressable>
            </Link>
            <Pressable className={"absolute top-5 right-3 bg-black p-2 rounded-full active:bg-gray-700"}>
                <MaterialCommunityIcons name="bookmark-plus-outline" size={32} color="white"/>
            </Pressable>
            <View className={"bg-black border border-t-gray-500 rounded-t-[50px] flex-1 -mt-[150px] w-full"}>
                <Text className={"bg-[#fed60b] rounded-xl font-bold self-start p-2 ml-7 mt-7 text-xs"}>
                    PRO BARBER
                </Text>
                <Text className={"text-white text-2xl ml-7 mt-2"}>
                    NOMBRE DEL BARBERO
                </Text>
                <View className={"flex flex-row ml-7 mt-2 items-center"}>
                    <MaterialCommunityIcons name="star" size={24} color="#fed60b"/>
                    <Text className={"text-white font-bold text-lg"}>
                        4.5
                    </Text>
                    <Text className={"text-[#7a7b7b] font-bold text-lg ml-1"}>
                        - 1000 reviews
                    </Text>
                </View>
                <Gray_Box className={"ml-7 w-5/6 justify-center"}>
                    <View className={"flex-row"}>
                        <View className={" pl-5 pr-40 self-start"}>
                            <Text className={"text-[#fed60b]"}>Martes, 25 Agosto</Text>
                            <Text className={"text-white"}>10:00 AM - 11:00 AM</Text>
                        </View>
                        <MaterialCommunityIcons name="pencil-outline" size={32} color="white"/>
                    </View>
                </Gray_Box>
                <Text>
                    Hola
                </Text>
            </View>
        </View>
    );
}