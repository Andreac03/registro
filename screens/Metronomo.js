import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

//const { height, width } = Dimensions.get('window');

//const { height, width } = Dimensions.get('window');
const Metronomo = () => {
    const navigation = useNavigation();
    return (
        <View style={style.Container}>
            <View style={style.Header}>
                <Text style={style.TextoTitulo}
                >Metronomo
                </Text>
            </View>
            <View style={style.Main}>
                <View
                    style={style.Columna}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Medi")}
                        style={style.BotonMedidas}>
                        <Text
                            style={style.TextoMedidas}
                        >4/4</Text>
                    </TouchableOpacity>
                    <View
                        style={style.Fila}
                    >
                        <TouchableOpacity
                            style={style.BotonPulzo}
                        >
                            <Image
                                source={require('../image/iniciar.png')}
                                style={style.ImagenPulzo}
                            />
                        </TouchableOpacity>
                        <View
                            style={style.Columna2}
                        >
                            <TouchableOpacity
                                style={style.BotonPulzacion}
                            >
                                <View style={style.ImagenPulzacion}>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.BotonPulzacion}
                            >
                                <View style={style.ImagenPulzacion}>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.BotonPulzacion}
                            >
                                <View style={style.ImagenPulzacion}>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.BotonPulzacion}
                            >
                                <View style={style.ImagenPulzacion}>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={style.Fila2}>
                        <TouchableOpacity
                            style={style.BotonPulzoM}
                        >
                            <Image source={require('../image/Menos.png')}
                                style={style.ImagenPulzoMenos} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Stack2")}
                            style={style.BotonTablero}
                        >
                            <Text
                                style={style.TextoTablero}
                            >440 Hrtz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonPulzoM}
                        >
                            <Image source={require('../image/Mas.png')}
                                style={style.ImagenPulzoMas} />
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
                    <TouchableOpacity
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
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
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
        top: "5%",
    },
    Columna2: {
        flexDirection: "column",
        top: "1%",
    },
    Fila: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        //marginVertical: 5,

    },
    Fila2: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        //marginVertical: 5,
        top: "-2%"
    },
    BotonMedidas: {
        backgroundColor: "#00d9dd",
        //marginTop: "1%",
        width: 80,
        //padding: 1,
        alignSelf: "flex-start",
        borderRadius: 10,
        height: 30,
        //margin: 1
    },
    TextoMedidas: {
        fontSize: 20,
        textAlign: "center",
        color: "#1b1464",
        //top:-15,
        marginTop: 1,
        fontWeight: "bold",
    },
    BotonPulzo: {
        backgroundColor: "#00d9dd",
        //marginTop: "-10%",
        width: 110,
        height: 110,
        //padding: 0,
        alignSelf: "flex-start",
        borderRadius: 60,
        alignSelf: "center",
    },
    ImagenPulzo: {
        width: 37,
        height: 45,
        alignSelf: "center",
        top: 30,
        tintColor: "white",
    },
    BotonPulzacion: {
        backgroundColor: "#1b1464",
        //marginTop: "0.10%",
        width: 40,
        height: 40,
        //padding: 20,
        alignSelf: "flex-end",
        borderRadius: 50,
        alignSelf: "center",
        top: -20,
        right: -100,
        margin: 2,
    },
    ImagenPulzacion: {
        backgroundColor: "white",
        width: 10,
        height: 10,
        position: "absolute",
        top: 15,
        borderRadius: 50,
        alignSelf: "center",
        justifyContent: "center",
        //margin: 0,
    },
    BotonPulzoM: {
        backgroundColor: "#00d9dd",
        marginTop: "1%",
        width: 30,
        height: 30,
        //padding: 10,
        alignSelf: "center",
        borderRadius: 50,
        marginLeft: 10,
    },
    ImagenPulzoMenos: {
        width: 8,
        height: 8,
        //padding: "1",
        alignSelf: "center",
        margin: 10,
        top: 1,
    },
    ImagenPulzoMas: {
        width: 8,
        height: 8,
        padding: "1",
        alignSelf: "center",
        margin: 10,
        top: 1,
    },
    BotonTablero: {
        backgroundColor: "#1b1464",
        width: "10%",
        height: 30,
        //padding: 1,
        alignSelf: "center",
        borderRadius: 10,
        marginLeft: 10,
        top: 3,
    },
    TextoTablero: {
        fontSize: hp(3),
        textAlign: "center",
        color: "white",
        top: 6,
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
export default Metronomo;

{/* <View
    Style={{
        top: "1%",
    }}
>

    <Text
        style={{
            fontSize: 30,
            textAlign: "center",
            top: "15%",
        }}
    >Metronomo
    </Text>
    <View
        style={{
            flexDirection: "column", top: "25%"
        }}>
        <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-start", paddingStart: 20 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Medi")}
                style={{
                    backgroundColor: "#00d9dd",
                    marginTop: "1%",
                    width: "10%",
                    padding: 1,
                    alignSelf: "flex-start",
                    borderRadius: 10,
                    height: 30,
                    margin: 1
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: "center",
                        color: "#1b1464",
                        //top:-15,
                        marginTop: 1,
                        fontWeight: "bold"

                    }}
                >4/4</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", paddingStart: 20 }}>
            <TouchableOpacity
                style={{
                    backgroundColor: "#00d9dd",
                    marginTop: "-10%",
                    width: 110,
                    height: 110,
                    padding: 0,
                    alignSelf: "flex-start",
                    borderRadius: 60,
                    alignSelf: "center",
                }}
            >
                <Image
                    source={require('../image/iniciar.png')}
                    style={{
                        width: 37,
                        height: 45,
                        alignSelf: "center",
                        top: 30,
                        tintColor: "white",
                    }}
                />
            </TouchableOpacity>
            <View style={{ flexDirection: "column", paddingBottom: 2, alignSelf: "center", paddingStart: 20 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#1b1464",
                        marginTop: "0.10%",
                        width: 10,
                        height: 10,
                        padding: 20,
                        alignSelf: "flex-end",
                        borderRadius: 50,
                        alignSelf: "center",
                        top: -20,
                        right: -100,
                        margin: 2,
                    }}
                >
                    <View style={{
                        backgroundColor: "white",
                        width: 10,
                        height: 10,
                        position: "absolute",
                        top: 15,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        margin: 0,

                    }}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#1b1464",
                        marginTop: "0.10%",
                        width: 10,
                        height: 10,
                        padding: 20,
                        alignSelf: "flex-end",
                        borderRadius: 50,
                        alignSelf: "center",
                        top: -20,
                        right: -100,
                        margin: 2,
                    }}
                >
                    <View style={{
                        backgroundColor: "white",
                        width: 10,
                        height: 10,
                        position: "absolute",
                        top: 15,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        margin: 0,

                    }}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#1b1464",
                        marginTop: "0.10%",
                        width: 10,
                        height: 10,
                        padding: 20,
                        alignSelf: "flex-end",
                        borderRadius: 50,
                        alignSelf: "center",
                        top: -20,
                        right: -100,
                        margin: 2,
                    }}
                >
                    <View style={{
                        backgroundColor: "white",
                        width: 10,
                        height: 10,
                        position: "absolute",
                        top: 15,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        margin: 0,

                    }}>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#1b1464",
                        marginTop: "0.10%",
                        width: 10,
                        height: 10,
                        padding: 20,
                        alignSelf: "flex-end",
                        borderRadius: 50,
                        alignSelf: "center",
                        top: -20,
                        right: -100,
                        margin: 2,
                    }}
                >
                    <View style={{
                        backgroundColor: "white",
                        width: 10,
                        height: 10,
                        position: "absolute",
                        top: 15,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        margin: 0,

                    }}>
                    </View>
                </TouchableOpacity>
            </View>
        </View >
        <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", paddingStart: 20, top: -65, right: 35 }}>
            <TouchableOpacity
                style={{
                    backgroundColor: "#00d9dd",
                    marginTop: "1%",
                    width: 30,
                    height: 30,
                    padding: 10,
                    alignSelf: "center",
                    borderRadius: 50,
                    marginLeft: 10,

                }}
            >
                <Image source={require('../image/Menos.png')}
                    style={{
                        width: 8,
                        height: 8,
                        padding: "1",
                        alignSelf: "center",
                        margin: 10,
                        top: -8,

                    }} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Stack2")}
                style={{
                    backgroundColor: "#1b1464",
                    marginTop: "1%",
                    width: "10%",
                    height: 30,
                    padding: 1,
                    alignSelf: "center",
                    borderRadius: 10,
                    marginLeft: 10,

                }}
            >
                <Text
                    style={{
                        fontSize: 10,
                        textAlign: "center",
                        color: "white",
                        top: 6,

                    }}
                >440 Hrtz</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: "#00d9dd",
                    marginTop: "1%",
                    width: 30,
                    height: 30,
                    padding: 10,
                    alignSelf: "center",
                    borderRadius: 50,
                    marginLeft: 10,

                }}
            >
                <Image source={require('../image/Mas.png')}
                    style={{
                        width: 8,
                        height: 8,
                        padding: "1",
                        alignSelf: "center",
                        margin: 10,
                        top: -8,
                    }} />
            </TouchableOpacity>

        </View>
        <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end", top: -35 }}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Settings")}
                style={{
                    //backgroundColor:"green",
                    marginTop: 1,
                    width: 40,
                    height: 40,
                    padding: 1,
                    alignSelf: "flex-end",
                    borderRadius: 50,
                    top: 1,
                    right: 5,
                    margin: 1,
                    marginBottom: 5
                }}
            >
                <Image
                    source={require('../image/Refresh.png')}
                    style={{
                        width: 26,
                        height: 29,
                        alignSelf: "center",
                        top: 1,
                    }}
                />
            </TouchableOpacity>
        </View>

    </View>

</View> */}

//     const Metronomo = createBottomTabNavigator();

// // function Medidas(){
// //     return(
// //         <Metronomo.Navigator
// //         initialRouteName="Medidas"
// //         >
// //             <Metronomo.Screen
// //                 name="Medidas"
// //                 component={MedidasCompas}
// //             >

// //             </Metronomo.Screen>
// //         </Metronomo.Navigator>
// //     )
// // }


