import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const Musica = () => {
    const navigation = useNavigation();
    return (
        <View style={style.Container}>
            <View style={style.Header}>
                <Text style={style.TextoTitulo}
                >Configuracion
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
                            onPress={() => navigation.navigate("Rock")}
                            style={style.BotonGenero}
                        >
                            <Text
                                style={style.TextoGenero}
                            >Rock</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Rap")}
                            style={style.BotonGenero}
                        >
                            <Text
                                style={style.TextoGenero}
                            >Rap</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Popular")}
                            style={style.BotonGenero}
                        >
                            <Text
                                style={style.TextoGenero}
                            >Popular</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Cumbia")}
                            style={style.BotonGenero}
                        >
                            <Text
                                style={style.TextoGenero}
                            >Cumbia</Text>

                        </TouchableOpacity>


                    </View>
                    <View style={style.Fila}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Punk")}
                            style={style.BotonGenero}
                        >
                            <Text
                                style={style.TextoGenero}
                            >Punk</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Metal")}
                            style={style.BotonGenero}
                        >
                            <Text
                                style={style.TextoGenero}
                            >Metal</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Ska")}
                            style={style.BotonGenero}
                        >
                            <Text
                                style={style.TextoGenero}
                            >Ska</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Regue")}
                            style={style.BotonGenero}
                        >
                            <Text
                                style={style.TextoGenero}
                            >Regue</Text>
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
        top: "-5%",
    },
    Fila: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        marginVertical: 5
    },
    BotonGenero: {
        backgroundColor: "#1b1464",
        width: 100,
        top: 40,
        height: 100,
        borderRadius: 50,
        alignSelf: "center",
        justifyContent: "center",
        marginRight: 40,
    },
    TextoGenero: {
        fontWeight: "800",
        fontSize: hp(4),
        alignSelf: "center",
        color: "white",
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
export default Musica;


{/* <SafeAreaView>
    <View
        style={{
            top: "1%"
        }}
    >
        <Text
            style={{
                fontSize: 30,
                textAlign: "center",
                top: "10%"
            }}
        >Musica
        </Text>
        <View
            style={{
                flexDirection: "column", top: "10%"
            }}
        >
            <View style={{ flexDirection: "row", paddingBottom: 0, alignSelf: "center" }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Rock")}
                    style={{
                        backgroundColor: "#1b1464",
                        width: 100,
                        top: 40,
                        height: 100,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        marginRight: 40

                    }}
                >
                    <Text
                        style={{
                            fontWeight: "800",
                            fontSize: 25,
                            alignSelf: "center",
                            color: "white",
                        }}
                    >Rock</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Rap")}
                    style={{
                        backgroundColor: "#1b1464",
                        width: 100,
                        top: 40,
                        height: 100,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        marginRight: 40

                    }}
                >
                    <Text
                        style={{
                            fontWeight: "800",
                            fontSize: 25,
                            alignSelf: "center",
                            color: "white",
                        }}
                    >Rap</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Popular")}
                    style={{
                        backgroundColor: "#1b1464",
                        width: 100,
                        top: 40,
                        height: 100,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        marginRight: 40

                    }}
                >
                    <Text
                        style={{
                            fontWeight: "800",
                            fontSize: 25,
                            alignSelf: "center",
                            color: "white",
                        }}
                    >Popular</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Cumbia")}
                    style={{
                        backgroundColor: "#1b1464",
                        width: 100,
                        top: 40,
                        height: 100,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        marginRight: 40

                    }}
                >
                    <Text
                        style={{
                            fontWeight: "800",
                            fontSize: 25,
                            alignSelf: "center",
                            color: "white",
                        }}
                    >Cumbia</Text>

                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 0, alignSelf: "center", top: "2%" }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Punk")}
                    style={{
                        backgroundColor: "#1b1464",
                        width: 100,
                        top: 40,
                        height: 100,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        marginRight: 40

                    }}
                >
                    <Text
                        style={{
                            fontWeight: "800",
                            fontSize: 25,
                            alignSelf: "center",
                            color: "white",
                        }}
                    >Punk</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Metal")}
                    style={{
                        backgroundColor: "#1b1464",
                        width: 100,
                        top: 40,
                        height: 100,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        marginRight: 40

                    }}
                >
                    <Text
                        style={{
                            fontWeight: "800",
                            fontSize: 25,
                            alignSelf: "center",
                            color: "white",
                        }}
                    >Metal</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Ska")}
                    style={{
                        backgroundColor: "#1b1464",
                        width: 100,
                        top: 40,
                        height: 100,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        marginRight: 40

                    }}
                >
                    <Text
                        style={{
                            fontWeight: "800",
                            fontSize: 25,
                            alignSelf: "center",
                            color: "white",
                        }}
                    >Ska</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Regue")}
                    style={{
                        backgroundColor: "#1b1464",
                        width: 100,
                        top: 40,
                        height: 100,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        marginRight: 40

                    }}
                >
                    <Text
                        style={{
                            fontWeight: "800",
                            fontSize: 25,
                            alignSelf: "center",
                            color: "white",
                        }}
                    >Regue</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end",
                top: "9.5%"
            }}>
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
                        top: 1,
                        right: 1,
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

    </View>
</SafeAreaView> */}