import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


const { height, width } = Dimensions.get('window');
const Punteo = () => {
    const navigation = useNavigation();
    return (
        <View style={style.Container}>

            {/* header */}
            <View style={style.Header}>
                <Text style={style.TextoTitulo}
                >Biblioteca
                </Text>
            </View>

            {/* main */}
            <View style={style.Main}>
                <View style={style.TopIconos}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonNotas}
                    >
                        <Text
                            style={style.TextoNotas}
                        >C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonNotas}
                    >
                        <Text
                            style={style.TextoNotas}
                        >C#</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonNotas}
                    >
                        <Text
                            style={style.TextoNotas}
                        >D</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonNotas}
                    >
                        <Text
                            style={style.TextoNotas}
                        >D#</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonNotas}
                    >
                        <Text
                            style={style.TextoNotas}
                        >E</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonNotas}
                    >
                        <Text
                            style={style.TextoNotas}
                        >F</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonNotas}
                    >
                        <Text
                            style={style.TextoNotas}
                        >F#</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonNotas}
                    >
                        <Text
                            style={style.TextoNotas}
                        >G</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonNotas}
                    >
                        <Text
                            style={style.TextoNotas}
                        >G#</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonNotas}
                    >
                        <Text
                            style={style.TextoNotas}
                        >A</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonNotas}
                    >
                        <Text
                            style={style.TextoNotas}
                        >A#</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonNotas}
                    >
                        <Text
                            style={style.TextoNotas}
                        >B</Text>
                    </TouchableOpacity>
                </View>
                <View style={style.TopIconos2}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonModos}
                    >
                        <Text
                            style={style.TextoModos}
                        >Major</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonModos}
                    >
                        <Text
                            style={style.TextoModos}
                        >Menor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonModos}
                    >
                        <Text
                            style={style.TextoModos}
                        >Maj7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonModos}
                    >
                        <Text
                            style={style.TextoModos}
                        >Maj12</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonModos}
                    >
                        <Text
                            style={style.TextoModos}
                        >3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonModos}
                    >
                        <Text
                            style={style.TextoModos}
                        >4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonModos}
                    >
                        <Text
                            style={style.TextoModos}
                        >5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonModos}
                    >
                        <Text
                            style={style.TextoModos}
                        >6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonModos}
                    >
                        <Text
                            style={style.TextoModos}
                        >8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonModos}
                    >
                        <Text
                            style={style.TextoModos}
                        >9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonModos}
                    >
                        <Text
                            style={style.TextoModos}
                        >Sus</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Afinador")}
                        style={style.BotonModos}
                    >
                        <Text
                            style={style.TextoModos}
                        >Add</Text>
                    </TouchableOpacity>
                </View>

                {/* <View style={style.Seccion_1}></View>
                <View style={style.Seccion_2}></View> */}
                {/* <View style={style.booton3}></View> */}
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
    TopIconos: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        top: "1%",
        marginVertical: "1%",

    },
    TopIconos2: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        top: "4%",
        //marginVertical:"5%",
    },
    BotonNotas: {
        backgroundColor: "#19226c",
        width: "7%",
        //padding: 2,
        height: "220%",
        borderRadius: 50,

    },
    TextoNotas: {
        fontWeight: "800",
        fontSize: hp(3),
        alignSelf: "center",
        color: "white",
        top: "30%",
    },
    BotonModos: {
        backgroundColor: "#19226c",
        width: "7%",
        //padding: 2,
        height: "220%",
        borderRadius: 50,
    },
    TextoModos: {
        fontWeight: "800",
        fontSize: hp(3),
        alignSelf: "center",
        color: "white",
        top: "30%",
    },
    Seccion_1: {
        width: wp(50),
        backgroundColor: "orange",
        height: hp(80),
    },
    Seccion_2: {
        width: wp(50),
        backgroundColor: "brown",
        height: hp(80),
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
export default Punteo;

{/* <Text
                style={{
                    fontSize:30,
                    textAlign: "center",
                    marginTop:"0%"
                }}
                >Punteo
            </Text>
            <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center"}}>
                    <View 
                        style={{
                            backgroundColor: "#00d9dd",
                            width:40,
                            position:"absolute",
                            //top:1,
                            height:40,
                            borderRadius:50,
                            alignSelf:"center",
                            justifyContent:"center",
                            margin:0,

                        }}
                    >
                    </View>
                    <Image
                        source={require('../image/calibrador.png')}
                        style={{
                            width:20,
                            padding:"1",
                            height:22,
                            alignSelf:"center",
                            margin:10,
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate("")}
                        style={{
                            backgroundColor: "#2596be",
                            marginTop: "1%",
                            width: "30%",
                            padding: 10,
                            alignSelf: "center",
                            borderRadius: 10,
                            marginLeft:10
                            
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
                </View> */}