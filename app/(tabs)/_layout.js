import {Tabs} from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle:
                    {
                        backgroundColor: "black",
                        borderTopWidth: 0,
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#ffd60a",
                tabBarInactiveTintColor: "gray",
            }}>
            <Tabs.Screen
                name="login"
                options={{
                    title: "Home",
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="home" size={32} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="map"
                options={{
                    title: "Missing",
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="map" size={32} color={color}/>
                }}
            />
        </Tabs>);
}