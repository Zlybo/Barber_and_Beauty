import {View} from "react-native";

export const Gray_Box = ({className = "", children}) => (
    <View
        className={`border border-gray-600 bg-[#1c1c1c] h-20 rounded-3xl mt-5 ${className}`}>
        {children}
    </View>
)
