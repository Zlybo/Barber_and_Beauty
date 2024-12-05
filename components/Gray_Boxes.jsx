import {Switch, Text, View} from "react-native";
import React, {useState} from "react";

export const Simple_Gray_Box = ({className = "", children, border = true}) => (
    <View
        className={`bg-[#1c1c1c] rounded-3xl border-gray-600
        ${border ? "border" : ""} 
        ${className}`}>
        {children}
    </View>
);

export const ServiceItem = ({title, price, duration, isEnabled, toggleSwitch}) => (
    <Simple_Gray_Box border={false} className={"border-b flex-row h-20 justify-between"}>
        <View className={"ml-5 justify-center w-32"}>
            <Text className={"text-barber_yellow"}>{title}</Text>
            <View className={"flex-row"}>
                <Text className={"pr-1 text-white"}>{price}</Text>
                <Text className={"text-barber_gray"}>- {duration} min</Text>
            </View>
        </View>
        <View className={"mr-5 justify-center"}>
            <View className={`${isEnabled ? "bg-yellow-500" : "bg-gray-700"} justify-center rounded-2xl h-[30px]`}>
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
    </Simple_Gray_Box>
);

export const Extended_Gray_Box = () => {
    const [services, setServices] = useState([
        {id: 1, title: "Corte de cabello", price: "20.000", duration: "40", enabled: false},
        {id: 2, title: "Barba", price: "15.000", duration: "30", enabled: false},
        {id: 3, title: "Cejas", price: "10.000", duration: "20", enabled: false}
    ]);

    const toggleService = (id) => {
        setServices(services.map(service =>
            service.id === id ? {...service, enabled: !service.enabled} : service
        ));
    };

    return (
        <Simple_Gray_Box className={"mx-7 mt-5 pb-5"}>
            {services.map(service => (
                <ServiceItem
                    key={service.id}
                    title={service.title}
                    price={service.price}
                    duration={service.duration}
                    isEnabled={service.enabled}
                    toggleSwitch={() => toggleService(service.id)}
                />
            ))}
        </Simple_Gray_Box>
    );
}