import {View, Text, Image, Pressable, Switch} from "react-native";
import React, {useState} from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Gray_Box} from "../components/Gray_Box";
import {Link} from "expo-router";

export default function Booking() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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

                <Gray_Box className={"mx-7 flex-row justify-between items-center"}>
                    <View className={"ml-5"}>
                        <Text className={"text-barber_yellow"}>Martes, 25 Agosto</Text>
                        <Text className={"text-white"}>10:00 AM - 11:00 AM</Text>
                    </View>
                    <MaterialCommunityIcons className={"mr-5"} name="pencil-outline" size={32} color="white"/>
                </Gray_Box>

                <Gray_Box className={"mx-7 h-[300px]"}>
                    <Gray_Box border={false} className={"mt-0 border-b border-gray-600 flex-row justify-between"}>
                        <View className={"ml-5 h-full justify-center w-32"}>
                            <Text className={"text-barber_yellow"}>Corte de cabello </Text>
                            <View className={"flex-row"}>
                                <Text className={"pr-1 text-white"}>20.000 </Text>
                                <Text className={"text-barber_gray"}>- 40 min</Text>
                            </View>
                        </View>
                        <View className={"mr-5 justify-center"}>
                            <View
                                className={` ${isEnabled ? "bg-yellow-500" : "bg-gray-700"} justify-center rounded-2xl h-[30px]`}>
                                <Switch
                                    trackColor={{false: 'transparent', true: 'transparent'}}
                                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                    className={"scale-125"}
                                />
                            </View>
                        </View>
                    </Gray_Box>
                    <Gray_Box border={false} className={"mt-0 border-b border-gray-600"}>
                    </Gray_Box>
                    <Gray_Box border={false} className={"mt-0 border-b border-gray-600"}>
                    </Gray_Box>
                </Gray_Box>
            </View>
        </View>
    );
}