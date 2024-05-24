import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
//import Orientation from 'react-native-orientation-locker';

const Calibrador = () => {
    const navigation = useNavigation();
    const [tableroValue, setTableroValue] = useState(440); // Establecer un estado inicial para el valor del tablero
    // Función para aumentar el valor del tablero
    const increaseTableroValue = () => {
        setTableroValue(tableroValue + 1);
    };
    // Función para disminuir el valor del tablero
    const decreaseTableroValue = () => {
        setTableroValue(tableroValue - 1);
    };
    return (
        <View style={style.Container}>
            <View style={style.Header}>
                <Text style={style.TextoTitulo}
                >Calibrador
                </Text>
            </View>
            <View style={style.Main}>
                <View
                    style={style.Columna}
                >
                    <View
                        style={style.Fila}
                    >
                        <TouchableOpacity
                            style={style.BotonConteo}
                            onPress={decreaseTableroValue} // Disminuir valor del tablero
                        >
                            <Image source={require('../image/Menos.png')}
                                style={style.ImagenMenos} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            //onPress={() => navigation.navigate("")}
                            style={style.BotonTablero}
                        >
                            <Text
                                style={style.TextoTablero}
                            >{tableroValue}</Text>{/* Mostrar el valor actual */}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonConteo}
                            onPress={increaseTableroValue} // Aumentar valor del tablero
                        >
                            <Image source={require('../image/Mas.png')}
                                style={style.ImagenMas} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View
                style={style.footer}
            >
                <View style={style.Tab}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
                        style={style.BotonIcono}
                    >
                        <Image
                            source={require('../image/iniciar.png')}
                            style={style.ImagenIniciar}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
                        style={style.BotonIcono}
                    >
                        <Image
                            source={require('../image/pausa.png')}
                            style={style.ImagenPausa}
                        />
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
                        style={style.BotonIcono}
                    >
                        <Image
                            source={require('../image/volumen.png')}
                            style={style.ImagenVolumenMas}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
                        style={style.BotonIcono}
                    >
                        <Image
                            source={require('../image/mute.png')}
                            style={style.ImagenVolumenMenos}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
                        style={style.BotonIcono}
                    >
                        <Image
                            source={require('../image/bemol.png')}
                            style={style.ImagenBemol}
                        />
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Settings")}
                        style={style.BotonIcono}
                    >
                        <Image
                            source={require('../image/Refresh.png')}
                            style={style.ImagenRegresar}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    Container: {
        // flex:1,
        //backgroundColor: "blue",
        height: hp(100),
    },
    Header: {
        backgroundColor: "#a9a7bf",
        height: hp(15),
    },
    TextoTitulo: {
        fontSize: hp(6),
        textAlign: "center",
        top: "20%",
        alignSelf: "center",
    },
    Main: {
        //backgroundColor:"orange",
        height: hp(66),
        display: 'flex',
        flexDirection: 'column',
    },
    Columna: {
        flexDirection: "column",
        top: "35%",
    },
    Fila: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        marginVertical: 5
    },
    BotonConteo: {
        backgroundColor: "#1b1464",
        marginTop: "1%",
        width: 60,
        height: 60,
        padding: 1,
        alignSelf: "center",
        borderRadius: 50,
        marginLeft: 10,
    },
    ImagenMenos: {
        width: 20,
        height: 22,
        alignSelf: "center",
        //margin:10,
        top: 15,
    },
    ImagenMas: {
        width: 20,
        height: 22,
        alignSelf: "center",
        //margin:10,
        top: 19,
    },
    BotonTablero: {
        backgroundColor: "#00d9dd",
        //marginTop: "1%",
        width: "30%",
        //padding: 1,
        alignSelf: "center",
        borderRadius: 10,
        marginLeft: 10,
        height: 80,
    },
    TextoTablero: {
        fontSize: hp(8),
        textAlign: "center",
        color: "white",
        top: "20%",
    },
    footer: {
        height: hp(15),
        backgroundColor: "#a9a7bf",
        top: "5%"
    },
    Tab: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        top: "1%"
    },
    BotonIcono: {
        //backgroundColor:"green",
        marginTop: 1,
        width: wp(2),
        height: hp(2),
        //padding: 1,
        alignSelf: "flex-end",
        borderRadius: 50,
        //top: 270,
        //right:1,
        //margin: 1,
        //marginBottom: 1,
        //left: 13
        marginHorizontal: "6%"
    },
    ImagenIniciar: {
        width: 24.3,
        height: 30,
        alignSelf: "center",
        top: 1,
    },
    ImagenPausa: {
        width: 24.3,
        height: 30,
        alignSelf: "center",
        top: 1,
    },
    ImagenVolumenMas: {
        width: 24.3,
        height: 30,
        alignSelf: "center",
        top: 1,
    },
    ImagenVolumenMenos: {
        width: 35,
        height: 30,
        alignSelf: "center",
        top: 1,
    },
    ImagenBemol: {
        width: 15,
        height: 31,
        alignSelf: "center",
        top: 1,
    },
    ImagenRegresar: {
        width: 26,
        height: 29,
        alignSelf: "center",
        top: 1,
        //tintColor:"green"
    }
})
export default Calibrador;


{/* <View
    style={{
        top: "1%",
    }}
>
    <Text
        style={{
            fontSize: 30,
            textAlign: "center",
            top: "15%",
        }}
    >Calibrador</Text>
    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: "20%" }}>
        <TouchableOpacity
            style={{
                backgroundColor: "#1b1464",
                marginTop: "1%",
                width: 60,
                height: 60,
                padding: 1,
                alignSelf: "center",
                borderRadius: 50,
                marginLeft: 10,

            }}
        >
            <Image source={require('../image/Menos.png')}
                style={{
                    width: 20,
                    height: 22,
                    alignSelf: "center",
                    //margin:10,
                    top: 15

                }} />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate("")}
            style={{
                backgroundColor: "#00d9dd",
                marginTop: "1%",
                width: "30%",
                padding: 1,
                alignSelf: "center",
                borderRadius: 10,
                marginLeft: 10,
                height: "150%",

            }}
        >
            <Text
                style={{
                    fontSize: 40,
                    textAlign: "center",
                    color: "white",
                    top: 20,
                }}
            >440 </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                backgroundColor: "#1b1464",
                marginTop: "1%",
                width: 60,
                height: 60,
                padding: 1,
                alignSelf: "center",
                borderRadius: 50,
                marginLeft: 10,

            }}
        >
            <Image source={require('../image/Mas.png')}
                style={{
                    width: 20,
                    height: 22,
                    alignSelf: "center",
                    //margin:10,
                    top: 19
                }} />
        </TouchableOpacity>
    </View>

</View> */}