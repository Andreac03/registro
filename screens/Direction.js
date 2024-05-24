import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
//import Orientation from 'react-native-orientation-locker';

const Direction = () => {
    const navigation = useNavigation();
    return (
        <View style={style.Container}>

            {/* header */}
            <View style={style.Header}>
                <Text style={style.TextoTitulo}
                >Dirección
                </Text>
            </View>
            {/* main */}
            <View style={style.Main}>
                <View
                    style={style.Fila}
                >
                    <TouchableOpacity
                        style={style.BotonOn}>
                        <View style={style.BolaOn}
                        >
                            <Text
                                style={style.TextOn}
                            >On</Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.BotonOff}>
                        <View style={style.BolaOff}
                        >
                            <Text
                                style={style.TextoOff}
                            >Off</Text>

                        </View>
                    </TouchableOpacity>

                </View>
            </View>
            {/* footer */}

            <View style={style.footer}>
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
    Fila: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        top: "5%"
    },
    BotonOn: {
        backgroundColor: "#00d9dd",
        //marginTop: -5,
        width: "40%",
        height: 220,
        //padding: 1,
        alignSelf: "center",
        borderRadius: 10,
    },
    BotonOff: {
        backgroundColor: "#1b1464",
        //marginTop: "1%",
        width: "40%",
        //padding: 80,
        alignSelf: "center",
        borderRadius: 10,
        height: 220,
        margin: 1
    },
    BolaOn: {
        backgroundColor: "#1b1464",
        width: 150,
        position: "absolute",
        top: "15%",
        height: 150,
        borderRadius: 150,
        alignSelf: "center",
        justifyContent: "center",
    },
    TextOn: {
        fontWeight: "800",
        fontSize: hp(10),
        alignSelf: "center",
        color: "white",
    },
    BolaOff: {
        backgroundColor: "#00d9dd",
        width: 150,
        position: "absolute",
        top: "15%",
        height: 150,
        borderRadius: 150,
        alignSelf: "center",
        justifyContent: "center",
    },
    TextoOff: {
        fontWeight: "800",
        fontSize: hp(10),
        alignSelf: "center",
        color: "white",
    },
    ImagenAcus: {
        width: 200,
        height: 200,
        //padding:"1",
        alignSelf: "center",
        margin: 10
    },
    ImagenElec: {
        width: 200,
        height: 200,
        //padding:"1",
        alignSelf: "center",
        margin: 10
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
export default Direction;

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
            >Dirección
            </Text>
            <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top:"10%" }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#00d9dd",
                        marginTop: "1%",
                        width: "30%",
                        //padding: 1,
                        alignSelf: "center",
                        borderRadius: 10,
                        height: 180,
                        margin: 1
                    }}>
                    <View style={{
                        backgroundColor: "#1b1464",
                        width: 100,
                        position: "absolute",
                        top: 40,
                        height: 100,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",

                    }}
                    >
                        <Text
                            style={{
                                fontWeight: "800",
                                fontSize: 50,
                                alignSelf: "center",
                                color: "white",
                            }}
                        >On</Text>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#1b1464",
                        marginTop: "1%",
                        width: "30%",
                        //padding: 80,
                        alignSelf: "center",
                        borderRadius: 10,
                        height: 180,
                        margin: 1
                    }}>
                    <View style={{
                        backgroundColor: "#00d9dd",
                        width: 100,
                        position: "absolute",
                        top: 40,
                        height: 100,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",

                    }}
                    >
                        <Text
                            style={{
                                fontWeight: "800",
                                fontSize: 50,
                                alignSelf: "center",
                                color: "white",
                            }}
                        >Off</Text>

                    </View>
                </TouchableOpacity>
            </View>
            
        </View> */}