import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
function Usuario() {
    const navigation = useNavigation();
    return (
        <View style={style.Container}>
            <View style={style.Header}>
                <Text style={style.TextoTitulo}
                >Usuario
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
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Avatar")}
                            style={style.BotonAvatar}
                        >
                            <Image
                                source={require('../image/Usuario.png')}
                                style={style.ImagenUsuario}
                            />
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
        alignSelf: "flex-start",
        marginVertical: 5
    },
    Ai: {
        backgroundColor: "#1b1464",
        width: 100,
        height: 100,
        position: "absolute",
        top: "60%",
        borderRadius: 50,
        alignSelf: "flex-start",
        left: 100

        //justifyContent:"center",
        //marginRight:100,
    },
    TextoAi: {
        fontSize: hp(9),
        alignSelf: "center",
        top: "20%",
        color: "white",
    },
    BotonAvatar:{
        //backgroundColor: "#1b1464",
        //marginTop: "1%",
        width: 150,
        height: 150,
        //padding: 1,
        alignSelf: "center",
        borderRadius: 200,
        //margin:100,
        top: "5%",
        left: 50,
    },
    ImagenUsuario:{
        width: 150,
        height: 150,
        alignSelf: "center",
        left:"300%",
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
export default Usuario;



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
                width: "99%",
                height: "99%",
                top: "1%",
                //backgroundColor:"green"
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "2%"
                }}
            >Usuario
            </Text>
            <View
                style={{
                    backgroundColor: "#1b1464",
                    width: 120,
                    height: 120,
                    position: "absolute",
                    top: "27%",
                    borderRadius: 100,
                    alignSelf: "flex-start",
                    left: -120,
                    marginHorizontal: 200,

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
            <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: "3%" }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Avatar")}
                    style={{
                        //backgroundColor: "#1b1464",
                        //marginTop: "1%",
                        width: 150,
                        height: 150,
                        //padding: 1,
                        alignSelf: "center",
                        borderRadius: 200,
                        //margin:100,
                        top: "5%",
                        left: 50
                    }}
                >
                    <Image
                        source={require('../image/Usuario.png')}
                        style={{
                            width: 150,
                            height: 150,
                            alignSelf: "center",
                        }}
                    >
                    </Image>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end", top: 5 }}>
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
                        top: "12%",
                        right: 5,
                        margin: 1,
                        marginBottom: 5
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
</SafeAreaView> */}