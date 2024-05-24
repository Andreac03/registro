import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

function Inicio() {
    const navigation = useNavigation();
    return (
        <View style={style.Container}>
            <View style={style.Header}>
                <Text style={style.TextoTitulo}
                >Inicio
                </Text>
            </View>
            <View style={style.Main}>
                <View
                    style={style.Columna}
                >
                    <View
                        style={style.Fila}
                    >
                        <View
                            style={style.Ai}
                        >
                            <Text
                                style={style.TextoAi}
                            >AI</Text>
                        </View>
                        <Image
                            source={require('../image/Burbuja.png')}
                            style={style.ImagenBurbuja}
                        />
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Niveles")}
                            style={style.BotonGo}
                        >
                            <Text
                                style={style.TextoGo}
                            >Go
                            </Text>
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
    Fila: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        marginVertical: 5
    },
    Ai: {
        backgroundColor: "#1b1464",
        width: 100,
        height: 100,
        position: "absolute",
        top: "30%",
        borderRadius: 50,
        alignSelf: "flex-start",
        left: 5,
        //justifyContent:"center",
        //marginRight:100,
    },
    TextoAi: {
        fontSize: hp(9),
        alignSelf: "center",
        top: "20%",
        color: "white",
    },
    ImagenBurbuja: {
        width: 340,
        height: 231,
        alignSelf: "center",
        //margin: 10,
        marginLeft: "29%",
    },

    BotonGo: {
        width: 50,
        height: 50,
        color: "black",
        //padding: 1,
        top: "25%",
        backgroundColor: "#00d9dd",
        borderRadius: 50,
        marginLeft: 30,
    },
    TextoGo: {
        fontWeight: "bold",
        fontSize: hp(5),
        alignSelf: "center",
        top: "20%"
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
    },
})
export default Inicio;


{/* <SafeAreaView
    style={styles.SafeAreaView}
>
    <View
        style={styles.ContenedorPrincipal}
    >
        <Text
            style={styles.TextoTitulo}
        >Inicio
        </Text>
        <View
            style={style.Contenido}
        >
            <View
                style={style.Ai}
            >
                <Text
                    style={style.TextoAi}
                >AI</Text>
            </View>
            <View style={style.Conte}>
                <Image
                    source={require('../image/Burbuja.png')}
                    style={styles.ImagenBurbuja}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Niveles")}
                    style={style.BotonGo}
                >
                    <Text
                        style={style.TextoGo}
                    >Go
                    </Text>
                </TouchableOpacity>
                <View style={style.FilaTab}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Inicio")}
                        style={style.BotonTab}
                    >
                        <Image
                            source={require('../image/Refresh.png')}
                            style={style.ImagenTab}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
</SafeAreaView> */}