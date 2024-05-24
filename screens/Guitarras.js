import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const Guitarras = () => {
    const navigation = useNavigation();
    return (
        <View style={style.Container}>

            {/* header */}
            <View style={style.Header}>
                <Text style={style.TextoTitulo}
                >Guitarras
                </Text>
            </View>
            {/* main */}
            <View style={style.Main}>
                <View
                    style={style.Fila}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Guitarras")}
                        style={style.BotonGuitarra}>
                        <Image source={require('../image/GuitarraAcus.png')}
                            style={style.ImagenAcus}

                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={style.BotonGuitarraE}>
                        <Image source={require('../image/GuitarraElec.png')}
                            style={style.ImagenElec}

                        />

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
    Fila: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        top: "5%"
    },
    BotonGuitarra: {
        backgroundColor: "#00d9dd",
        //marginTop: -5,
        width: "40%",
        height: "95%",
        //padding: 1,
        alignSelf: "center",
        borderRadius: 10,
    },
    BotonGuitarraE: {
        backgroundColor: "#1b1464",
        //marginTop: -5,
        width: "40%",
        height: "95%",
        //padding: 1,
        alignSelf: "center",
        borderRadius: 10,
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
export default Guitarras;

// <SafeAreaView
//             style={{
//                 width: "auto",
//                 height: "auto",
//             }}
//         >
//             <View
//                 style={{
//                     top:"5%"
//                 }}
//             >
//                 {/* <Text
//                 style={{
//                     fontSize:30,
//                     textAlign: "center",
//                     marginTop:"0%"
//                 }}
//                 >Guitarras
//             </Text> */}
//                 <View style={{ flexDirection: "row", alignSelf: "center", top: "10%" }}>
//                     <TouchableOpacity
//                         onPress={() => navigation.navigate("Guitarras")}
//                         style={{
//                             backgroundColor: "#00d9dd",
//                             marginTop: -5,
//                             width: "40%",
//                             //padding: 1,
//                             alignSelf: "center",
//                             borderRadius: 10,
//                             height: "98%",
//                             margin: 1
//                         }}>
//                         <Image source={require('../image/GuitarraAcus.png')}
//                             style={{
//                                 width: 200,
//                                 height: 200,
//                                 //padding:"1",
//                                 alignSelf: "center",
//                                 margin: 10
//                             }}

//                         />
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={{
//                             backgroundColor: "#1b1464",
//                             marginTop: -5,
//                             width: "40%",
//                             //padding: 1,
//                             alignSelf: "center",
//                             borderRadius: 10,
//                             height: "98%",
//                             margin: 1
//                         }}>
//                         <Image source={require('../image/GuitarraElec.png')}
//                             style={{
//                                 width: 200,
//                                 height: 200,
//                                 //padding:"1",
//                                 alignSelf: "center",
//                                 margin: 10
//                             }}

//                         />

//                     </TouchableOpacity>
//                 </View>
//                 <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end",
//                  top: "15%"}}>
//                     <TouchableOpacity
//                         onPress={() => navigation.navigate("Menuss")}
//                         style={{
//                             //backgroundColor:"green",
//                             marginTop: 1,
//                             width: 40,
//                             height: 40,
//                             padding: 1,
//                             alignSelf: "flex-end",
//                             borderRadius: 50,
//                             top: 1,
//                             right: 1,
//                             margin: 1,
//                             marginBottom: 5
//                         }}
//                     >
//                         <Image
//                             source={require('../image/Refresh.png')}
//                             style={{
//                                 width: 26,
//                                 height: 29,
//                                 alignSelf: "center",
//                                 top: 1,
//                             }}
//                         />
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </SafeAreaView>