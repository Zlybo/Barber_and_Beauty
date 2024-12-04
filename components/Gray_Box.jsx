import {View} from "react-native";

export const Gray_Box = ({className = "", children, border = true}) => (
    <View
        className={`bg-[#1c1c1c] h-20 rounded-3xl mt-5 
        ${border ? "border border-gray-600" : ""} 
        ${className}`}>
        {children}
    </View>
)
