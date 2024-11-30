import {StatusBar} from 'expo-status-bar';
import {Pressable, Image, StyleSheet, Text, View} from 'react-native';

const barber_logo = require('./images/Barber_Logo_1.png');

export default function App() {
    return (
        <View style={styles.container}>
            <Image source={barber_logo} style={{width: 250, height: 200}}/>
            <Text style={styles.welcome_text}> Bienvenido a la app</Text>
            <StatusBar style="light"/>
            <Pressable
                onPress={() => {
                    alert('Cargando la app!');
                }}
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                    },
                    styles.wrapperCustom,
                ]}>
                {({pressed}) => (
                    <Text style={styles.button_text}>{pressed ? 'Pressed!' : 'Empezar'}</Text>
                )}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
    },
    welcome_text: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
    },
    button_text: {
        fontSize: 16,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
});
