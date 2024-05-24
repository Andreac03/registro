import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
//import Orientation from 'react-native-orientation-locker';


//const { height, width } = Dimensions.get('window');
const HomeScreen = () => {
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
                        <View
                            style={style.BolaContenido}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenContenido}
                            />
                        </View>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("StackCalibrador")}
                            style={style.BotonDireccion}
                        >
                            <Text
                                style={style.TextoDireccion}
                            >Calibrador de Hertz</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={style.Fila}
                    >
                        <View
                            style={style.BolaContenido}
                        >
                            <Image
                            source={require('../image/calibrador.png')}
                            style={style.ImagenContenido}
                        />
                        </View>
                        
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Stack3")}
                            style={style.BotonDireccion}
                        >
                            <Text
                                style={style.TextoDireccion}
                            >Dirección</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={style.Fila}
                    >
                        <View
                            style={style.BolaContenido}
                        >
                            <Image
                            source={require('../image/calibrador.png')}
                            style={style.ImagenContenido}
                        />
                        </View>
                        
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Stack4")}
                            style={style.BotonDireccion}
                        >
                            <Text
                                style={style.TextoDireccion}
                            >Idioma de Notación</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={style.Fila}
                    >
                        <View
                            style={style.BolaContenido}
                        >
                            <Image
                            source={require('../image/calibrador.png')}
                            style={style.ImagenContenido}
                        />
                        </View>
                        
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Stack25")}
                            style={style.BotonDireccion}
                        >
                            <Text
                                style={style.TextoDireccion}
                            >Metronomo</Text>
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
        top: "15%",
    },
    Fila: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        marginVertical:5
    },
    BolaContenido: {
        backgroundColor: "#00d9dd",
        width: 40,
        position: "absolute",
        //top:1,
        height: 40,
        borderRadius: 50,
        alignSelf: "center",
        justifyContent: "center",
        //margin: -10,
        //marginLeft:10,    
    },
    ImagenContenido: {
        width: 20,
        padding: "1",
        height: 22,
        alignSelf: "center",
        margin: 10,
    },
    BotonDireccion: {
        backgroundColor: "#2596be",
        marginTop: "1%",
        width: "30%",
        //padding: 10,
        alignSelf: "center",
        borderRadius: 10,
        marginLeft: 60,
        height:30

        
    },
    TextoDireccion: {
        fontSize: hp(4),
        textAlign: "center",
        color: "#1b1464",
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
export default HomeScreen;

{/* <SafeAreaView

>
    <View
        Style={{
            top: "1%"
        }}
    >
        <Text
            style={{
                fontSize: 30,
                textAlign: "center",
                top: "15%",
            }}
        >Configuracion</Text>
        <View style={{
            flexDirection: "column", top: "25%",
        }}>
            <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center" }}>
                <View
                    style={{
                        backgroundColor: "#00d9dd",
                        width: 40,
                        position: "absolute",
                        //top:1,
                        height: 40,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        margin: 0,

                    }}
                >
                </View>
                <Image
                    source={require('../image/calibrador.png')}
                    style={{
                        width: 20,
                        padding: "1",
                        height: 22,
                        alignSelf: "center",
                        margin: 10,
                    }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("StackCalibrador")}
                    style={{
                        backgroundColor: "#2596be",
                        marginTop: "1%",
                        width: "30%",
                        padding: 10,
                        alignSelf: "center",
                        borderRadius: 10,
                        marginLeft: 10

                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            textAlign: "center",
                            color: "#1b1464",
                        }}
                    >Calibrador de Hertz</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center" }}>
                <View
                    style={{
                        backgroundColor: "#00d9dd",
                        width: 40,
                        position: "absolute",
                        //top:1,
                        height: 40,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        margin: 0,

                    }}
                >
                </View>
                <Image
                    source={require('../image/direccion.png')}
                    style={{
                        width: 20,
                        padding: "1",
                        height: 22,
                        alignSelf: "center",
                        margin: 10
                    }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Stack3")}
                    style={{
                        backgroundColor: "#2596be",
                        marginTop: "1%",
                        width: "30%",
                        padding: 10,
                        alignSelf: "center",
                        borderRadius: 10,
                        marginLeft: 10
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            textAlign: "center",
                            color: "#1b1464",
                        }}
                    >Dirección</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center" }}>
                <View
                    style={{
                        backgroundColor: "#00d9dd",
                        width: 40,
                        position: "absolute",
                        //top:1,
                        height: 40,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        margin: 0,

                    }}
                >
                </View>
                <Image
                    source={require('../image/idioma_notacion.png')}
                    style={{
                        width: 20,
                        padding: "1",
                        height: 22,
                        alignSelf: "center",
                        margin: 10
                    }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Stack4")}
                    style={{
                        backgroundColor: "#2596be",
                        marginTop: "1%",
                        width: "30%",
                        padding: 10,
                        alignSelf: "center",
                        borderRadius: 10,
                        marginLeft: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            textAlign: "center",
                            color: "#1b1464",
                        }}
                    >Idioma de Notación</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center" }}>
                <View
                    style={{
                        backgroundColor: "#00d9dd",
                        width: 40,
                        position: "absolute",
                        //top:1,
                        height: 40,
                        borderRadius: 50,
                        alignSelf: "center",
                        justifyContent: "center",
                        margin: 0,

                    }}
                >
                </View>
                <Image
                    source={require('../image/metronomo.png')}
                    style={{
                        width: 20,
                        padding: "30",
                        height: 19,
                        alignSelf: "center",
                        margin: 10
                    }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("Stack25")}
                    style={{
                        backgroundColor: "#2596be",
                        marginTop: "1%",
                        width: "30%",
                        padding: 10,
                        alignSelf: "center",
                        borderRadius: 10,
                        marginLeft: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            textAlign: "center",
                            color: "#1b1464",
                        }}
                    >Metronomo</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>

</SafeAreaView> */}