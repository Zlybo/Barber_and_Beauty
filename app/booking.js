import {View, Text, Image, Pressable, ScrollView} from "react-native";
import React, {useState, useContext} from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Simple_Gray_Box, Extended_Gray_Box} from "../components/Gray_Boxes";
import {Link, useLocalSearchParams} from "expo-router";
import {BookmarkContext} from "../components/BookmarkContext";

export default function Booking() {
    const {savedBookmarks, toggleBookmark} = useContext(BookmarkContext);
    const {id} = useLocalSearchParams();
    const bookmarkIcon = savedBookmarks[id] ? "bookmark-plus" : "bookmark-plus-outline"
    return (
        <View className={"flex-1"}>
            <Image source={require("../assets/Images/booking.png")} className={"w-full h-3/6"}/>

            <Link asChild href={"./menu"}>
                <Pressable className={"absolute top-5 left-3 bg-black p-2 rounded-full active:bg-gray-700"}>
                    <MaterialCommunityIcons name="arrow-left" size={32} color="white"/>
                </Pressable>
            </Link>

            <Pressable onPress={() => toggleBookmark(id)}
                       className={"absolute top-5 right-3 bg-black p-2 rounded-full active:bg-gray-700"}>
                <MaterialCommunityIcons name={bookmarkIcon} size={32} color="white"/>
            </Pressable>

            <View className={"bg-black border border-t-gray-500 rounded-t-[50px] flex-1 -mt-[150px] w-full"}>
                <ScrollView showsVerticalScrollIndicator={false}>
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

                    <Simple_Gray_Box className={"mx-7 mt-5 h-20 flex-row justify-between items-center"}>
                        <View className={"ml-5"}>
                            <Text className={"text-barber_yellow"}>Martes, 25 Agosto</Text>
                            <Text className={"text-white"}>10:00 AM - 11:00 AM</Text>
                        </View>
                        <MaterialCommunityIcons className={"mr-5"} name="pencil-outline" size={32} color="white"/>
                    </Simple_Gray_Box>
                    <Extended_Gray_Box/>
                    <View className={"h-20"}/>
                </ScrollView>
            </View>
        </View>
    );
}