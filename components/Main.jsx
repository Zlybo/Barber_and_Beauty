import {StatusBar} from 'expo-status-bar';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Main_Logo} from "./Main_Logo";

export function Main() {
    const insets = useSafeAreaInsets();
    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <View style={{alignItems: "center"}}>
                <Main_Logo/>
            </View>

            <View style={{top: 125}}>
                <Text style={styles.welcome_text}> Te Damos La Bienvenida A La Barber App</Text>
                <StatusBar style="light"/>
                <Pressable
                    onPress={() => {
                        alert('Cargando la app!');
                    }}
                    style={({pressed}) => [
                        {
                            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                            alignItems: 'center',
                        },
                        styles.wrapperCustom,

                    ]}>
                    {({pressed}) => (
                        <Text style={styles.button_text}>{pressed ? 'Pressed!' : 'Comenzar'}</Text>
                    )}
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    welcome_text: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
        textAlign: "center",
    },
    button_text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
});
