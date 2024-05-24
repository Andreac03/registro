import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

function ModuloCalificacion() {
    const navigation = useNavigation();
    return (
        <View style={style.Container}>
            <View style={style.Header}>
                <Text style={style.TextoTitulo}
                >Califiación
                </Text>
            </View>
            <View style={style.Main}>
                <View
                    style={style.Columna}
                >
                    <View
                        style={style.BolaAI}
                    >
                        <Text
                            style={style.TextoAI}
                        >AI
                        </Text>
                    </View>
                    <View
                        style={style.Fila}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Teoricas")}
                            style={style.BotonResultado}
                        >
                            <Text
                                style={style.TextoResultado}
                            >Teoricas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Practicas")}
                            style={style.BotonResultado2}
                        >
                            <Text
                                style={style.TextoResultado}
                            >Practicas</Text>
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
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
                        style={style.BotonIcono}
                    >
                        <Image
                            source={require('../image/pausa.png')}
                            style={style.ImagenPausa}
                        />
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
                        style={style.BotonIcono}
                    >
                        <Image
                            source={require('../image/volumen.png')}
                            style={style.ImagenVolumenMas}
                        />
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
                        style={style.BotonIcono}
                    >
                        <Image
                            source={require('../image/mute.png')}
                            style={style.ImagenVolumenMenos}
                        />
                    </TouchableOpacity> */}
                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
                        style={style.BotonIcono}
                    >
                        <Image
                            source={require('../image/bemol.png')}
                            style={style.ImagenBemol}
                        />
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Niveles")}
                        style={style.BotonIcono}
                    >
                        <Image
                            source={require('../image/regresar.png')}
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
        top: "1%",
        //alignSelf:"flex-start",
    },
    Fila: {
        flexDirection: "row",
        //paddingBottom: 2,
        alignSelf: "center",
        //marginVertical: 5
        left: "90%",
    },
    BolaAI: {
        backgroundColor: "#1b1464",
        width: 120,
        height: 120,
        position: "absolute",
        top: "50%",
        borderRadius: 100,
        alignSelf: "flex-start",
        left: "1%",
        //marginHorizontal: 200,
    },
    TextoAI: {
        fontSize: hp(9),
        alignSelf: "center",
        top: 25,
        color: "white",
    },
    BotonResultado: {
        backgroundColor: "#1b1464",
        //marginTop: "1%",
        width: 125,
        height: 125,
        //padding: 1,
        alignSelf: "center",
        borderRadius: 200,
        //margin: 100,
        top: "5%",
        //marginLeft: 140,
    },
    BotonResultado2: {
        backgroundColor: "#1b1464",
        //marginTop: "1%",
        width: 125,
        height: 125,
        //padding: 1,
        alignSelf: "center",
        borderRadius: 200,
        top: "10%",
        marginLeft: 80
    },
    TextoResultado: {
        fontWeight: "800",
        fontSize: hp(5),
        alignSelf: "center",
        color: "white",
        top: 39,
    },
    footer: {
        height: hp(15),
        backgroundColor: "#a9a7bf",
        top: "5%",
    },
    Tab: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        top: "1%",
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
        marginHorizontal: "6%",
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
        width: 41,
        height: 35,
        alignSelf: "center",
        top: 1,
        tintColor:"#1b1464"
    }
})
export default ModuloCalificacion;


{/* <SafeAreaView
    style={{
        width: "100%",
        height: "auto",
    }}
>
    <View
        style={{
            top: "10%",
            width: "auto",
            height: "auto",
        }}
    >
        <View
            style={{
                width: "100%",
                height: "100%",
                //top: "1%"
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "0%",
                    //marginVertical: "3%"
                }}
            >Califiación
            </Text>
            <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: "5%", width: "60%", height: "1%" }}>
                <View
                    style={{
                        backgroundColor: "#1b1464",
                        width: 120,
                        height: 120,
                        position: "absolute",
                        top: 70,
                        borderRadius: 100,
                        alignSelf: "flex-start",
                        left: -120,
                        //marginHorizontal: 200,

                    }}
                >
                    <Text
                        style={{
                            fontSize: 40,
                            alignSelf: "center",
                            top: 25,
                            color: "white"
                        }}
                    >AI
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Teoricas")}
                    style={{
                        backgroundColor: "#1b1464",
                        //marginTop: "1%",
                        width: 125,
                        height: 125,
                        //padding: 1,
                        alignSelf: "center",
                        borderRadius: 200,
                        //margin: 100,
                        top: 60,
                        marginLeft: 140
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "800",
                            fontSize: 23,
                            alignSelf: "center",
                            color: "white",
                            top: 39
                        }}
                    >Teoricas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Practicas")}
                    style={{
                        backgroundColor: "#1b1464",
                        //marginTop: "1%",
                        width: 125,
                        height: 125,
                        //padding: 1,
                        alignSelf: "center",
                        borderRadius: 200,
                        top: 140,
                        marginLeft: 80
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "800",
                            fontSize: 22,
                            alignSelf: "center",
                            color: "white",
                            top: 39
                        }}
                    >Practicas</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end", top: "1%" }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Usuario")}
                        style={{
                            //backgroundColor:"green",
                            //marginTop: 1,
                            width: 40,
                            height: 40,
                            //padding: 1,
                            alignSelf: "flex-end",
                            borderRadius: 50,
                            //top: -100,
                            //right: 5,
                            //margin: 1,
                            //marginBottom: 5,
                            left: 110,
                            top: 270
                        }}
                    >
                        <Image
                            source={require('../image/Refresh.png')}
                            style={{
                                width: 26,
                                height: 29,
                                alignSelf: "center",
                                top: 1,
                                //tintColor:"green"
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
                        style={{
                            //backgroundColor:"green",
                            marginTop: 1,
                            width: 40,
                            height: 40,
                            padding: 1,
                            alignSelf: "flex-end",
                            borderRadius: 50,
                            top: 270,
                            //right:1,
                            margin: 1,
                            marginBottom: 1,
                            left: 13
                        }}
                    >
                        <Image
                            source={require('../image/iniciar.png')}
                            style={{
                                width: 24.3,
                                height: 30,
                                alignSelf: "center",
                                top: 1,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    </View>
</SafeAreaView> */}