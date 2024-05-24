import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
//import Orientation from 'react-native-orientation-locker';
//import Afinador from "./Afinador";

const MenuPrincipal = () => {
    const navigation = useNavigation();
    return (
        <View style={style.Container}>
            <View style={style.Header}>
                <Text style={style.TextoTitulo}
                >Menu Principal
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
                            onPress={() => navigation.navigate("Afinador")}
                            style={style.BotonAfinador}
                        >
                            <Image
                                source={require('../image/metro.png')}
                                style={style.ImagenAfinador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Guitarras")}
                            style={style.BotonGuitarras}
                        >
                            <Image
                                source={require('../image/guitarrass.png')}
                                style={style.ImagenGuitarras}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Ejercicios")}
                            style={style.BotonEjercicios}
                        >
                            <Image
                                source={require('../image/ejercicios.png')}
                                style={style.ImagenEjercicios}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Biblioteca")}
                            style={style.BotonBiblioteca}
                        >
                            <Image
                                source={require('../image/biblioteca.png')}
                                style={style.ImagenBiblioteca}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Musica")}
                            style={style.BotonMusica}
                        >
                            <Image
                                source={require('../image/musica.png')}
                                style={style.ImagenMusica}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Usuario")}
                        style={style.BotonAI}
                    >
                        <Text
                            style={style.TextoAI}
                        >AI</Text>

                    </TouchableOpacity>
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
        top: "10%",
    },
    Fila: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        marginVertical: 5
    },
    BotonAfinador: {
        backgroundColor: "#19226c",
        width: "18%",
        padding: 2,
        height: 50,
        borderRadius: 50,
    },
    ImagenAfinador: {
        width: 20,
        height: 30,
        padding: "30",
        alignSelf: "center",
        margin: 10,
        tintColor: "white",
        top: 1,
    },
    BotonGuitarras: {
        backgroundColor: "#443e7e",
        width: "18%",
        padding: 2,
        height: 50,
        borderRadius: 50,
    },
    ImagenGuitarras: {
        width: 30,
        height: 30,
        padding: "30",
        alignSelf: "center",
        margin: 10,
        tintColor: "white",
        top: 1,
    },
    BotonEjercicios: {
        backgroundColor: "#6c6898",
        width: "18%",
        padding: 1,
        height: 50,
        borderRadius: 50,
    },
    ImagenEjercicios: {
        width: 20,
        height: 30,
        padding: "30",
        alignSelf: "center",
        margin: 10,
        tintColor: "white",
        top: 1,
    },
    BotonBiblioteca: {
        backgroundColor: "#807da5",
        width: "18%",
        padding: 2,
        height: 50,
        borderRadius: 50,
    },
    ImagenBiblioteca: {
        width: 25,
        height: 30,
        padding: "30",
        alignSelf: "center",
        margin: 10,
        tintColor: "white",
        top: 1,
    },
    BotonMusica: {
        backgroundColor: "#a9a7bf",
        width: "18%",
        padding: 2,
        height: 50,
        borderRadius: 50,
    },
    ImagenMusica: {
        width: 30,
        height: 30,
        padding: "30",
        alignSelf: "center",
        margin: 10,
        tintColor: "white",
        top: 1,
    },
    BotonAI: {
        backgroundColor: "#1b1464",
        marginTop: 1,
        width: 100,
        height: 100,
        padding: 1,
        alignSelf: "center",
        borderRadius: 50,
        top: "20%",
        right: 5,
        margin: 1,
        marginBottom: 5,
    },
    TextoAI: {
        fontWeight: "800",
        fontSize: hp(9),
        alignSelf: "center",
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
export default MenuPrincipal;

{/* <View>
    <Text
        style={{
            fontSize: 30,
            textAlign: "center",
            marginTop: "7%"
        }}
    >Menu
    </Text>
    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: "3%" }}>
        <TouchableOpacity
            onPress={() => navigation.navigate("Afinador")}
            style={{
                backgroundColor: "#19226c",
                width: "18%",
                padding: 2,
                height: 50,
                borderRadius: 50,
            }}
        >
            <Image
                source={require('../image/metro.png')}
                style={{
                    width: 20,
                    height: 30,
                    padding: "30",
                    alignSelf: "center",
                    margin: 10,
                    tintColor: "white",
                    top: 1
                }}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate("Guitarras")}
            style={{
                backgroundColor: "#443e7e",
                width: "18%",
                padding: 2,
                height: 50,
                borderRadius: 50,
            }}
        >
            <Image
                source={require('../image/guitarrass.png')}
                style={{
                    width: 30,
                    height: 30,
                    padding: "30",
                    alignSelf: "center",
                    margin: 10,
                    tintColor: "white",
                    top: 1
                }}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate("Ejercicios")}
            style={{
                backgroundColor: "#6c6898",
                width: "18%",
                padding: 1,
                height: 50,
                borderRadius: 50,
            }}
        >
            <Image
                source={require('../image/ejercicios.png')}
                style={{
                    width: 20,
                    height: 30,
                    padding: "30",
                    alignSelf: "center",
                    margin: 10,
                    tintColor: "white",
                    top: 1
                }}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate("Biblioteca")}
            style={{
                backgroundColor: "#807da5",
                width: "18%",
                padding: 2,
                height: 50,
                borderRadius: 50,
            }}
        >
            <Image
                source={require('../image/biblioteca.png')}
                style={{
                    width: 25,
                    height: 30,
                    padding: "30",
                    alignSelf: "center",
                    margin: 10,
                    tintColor: "white",
                    top: 1
                }}
            />
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate("Musica")}
            style={{
                backgroundColor: "#a9a7bf",
                width: "18%",
                padding: 2,
                height: 50,
                borderRadius: 50,
            }}
        >
            <Image
                source={require('../image/musica.png')}
                style={{
                    width: 30,
                    height: 30,
                    padding: "30",
                    alignSelf: "center",
                    margin: 10,
                    tintColor: "white",
                    top: 1
                }}
            />
        </TouchableOpacity>
    </View>
    <TouchableOpacity
        onPress={() => navigation.navigate("Usuario")}
        style={{
            backgroundColor: "#1b1464",
            marginTop: 1,
            width: 100,
            height: 100,
            padding: 1,
            alignSelf: "center",
            borderRadius: 50,
            top: 80,
            right: 5,
            margin: 1,
            marginBottom: 5
        }}
    >
        <Text
            style={{
                fontWeight: "800",
                fontSize: 50,
                alignSelf: "center",
                color: "white",
                top: 10,
            }}
        >AI</Text>

    </TouchableOpacity>
    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end", top: "12%" }}>
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
</View> */}


















































{/* <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center"}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Stack3")}
                     style={{
                        backgroundColor: "purple",
                        marginTop: "1%",
                        width: "30%",
                        padding: 50,
                        alignSelf: "center",
                        borderRadius: 10,
                        height:"100%",
                        margin:1
                    }}>
                        <Image source={require('../image/calibrador.png')}
                            style={{
                                width:50,
                                padding:"1",
                                height:52,
                                alignSelf:"center",
                                margin:10
                            }}
                        
                        />
                </TouchableOpacity>
                <TouchableOpacity style={{
                        backgroundColor: "purple",
                        marginTop: "1%",
                        width: "30%",
                        padding: 50,
                        alignSelf: "center",
                        borderRadius: 10,
                        height:"100%",
                    }}>
                        <Image source={require('../image/calibrador.png')}
                            style={{
                                width:50,
                                padding:"1",
                                height:52,
                                alignSelf:"center",
                                margin:10
                            }}
                        />
                </TouchableOpacity>
            </View> */}