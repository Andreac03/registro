import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const TipoTecnica = () => {
    const navigation = useNavigation();
    return (
        <View style={style.Container}>

            {/* header */}
            <View style={style.Header}>
                <Text style={style.TextoTitulo}
                >Tipo de Tecnica
                </Text>
            </View>

            {/* main */}
            <View
                style={style.Main}
            >
                <View
                    style={style.Columna}
                >
                    <View
                        style={{
                            backgroundColor: "#1b1464",
                            width: 100,
                            height: 100,
                            position: "absolute",
                            top: "10%",
                            borderRadius: 50,
                            alignSelf: "flex-start",
                            left: 40,
                            marginHorizontal: 10,
                            //justifyContent:"center",

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 40,
                                alignSelf: "center",
                                top: 18,
                                color: "white"
                            }}
                        >AI</Text>
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
                            onPress={() => navigation.navigate("Punteo")}
                            style={style.BotonDireccion}
                        >
                            <Text
                                style={style.TextoDireccion}
                            >Punteo</Text>
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
                            onPress={() => navigation.navigate("Punteo")}
                            style={style.BotonDireccion}
                        >
                            <Text
                                style={style.TextoDireccion}
                            >Rasgueo</Text>
                        </TouchableOpacity>
                    </View>
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
    Columna: {
        flexDirection: "column",
        top: "25%",
    },
    Fila: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
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
        marginLeft:30,    
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
        marginLeft: 85,
        height:60

        
    },
    TextoDireccion: {
        fontSize: hp(6),
        textAlign: "center",
        color: "#1b1464",
        top:8,
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
export default TipoTecnica;

// <SafeAreaView>
//     <View
//         style={{
//             top: "1%"
//         }}
//     >
//         <Text
//             style={{
//                 fontSize: 30,
//                 textAlign: "center",
//                 top: "10%"
//             }}
//         >Tipo de Tecnica
//         </Text>
//         <View
//             style={{
//                 flexDirection: "row", paddingBottom: 1, top: "10%", marginLeft: 1
//             }}
//         >
//             <View
//                 style={{
//                     backgroundColor: "#1b1464",
//                     width: 100,
//                     height: 100,
//                     position: "absolute",
//                     top: "10%",
//                     borderRadius: 50,
//                     alignSelf: "flex-start",
//                     left: 40,
//                     marginHorizontal: 10,
//                     //justifyContent:"center",

//                 }}
//             >
//                 <Text
//                     style={{
//                         fontSize: 40,
//                         alignSelf: "center",
//                         top: 18,
//                         color: "white"
//                     }}
//                 >AI</Text>
//             </View>
//             <View style={{ flexDirection: "column", paddingBottom: 2, alignSelf: "center", top: "3%", marginLeft: 300 }}>
//                 <View
//                     style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-start", marginBottom: 30 }}
//                 >

//                     <View
//                         style={{
//                             backgroundColor: "#00d9dd",
//                             width: 40,
//                             position: "absolute",
//                             top: 10,
//                             height: 40,
//                             borderRadius: 50,
//                             alignSelf: "center",
//                             justifyContent: "center",
//                             margin: 0,

//                         }}
//                     >
//                     </View>
//                     <Image
//                         source={require('../image/calibrador.png')}
//                         style={{
//                             width: 20,
//                             //padding:"1",
//                             height: 22,
//                             alignSelf: "center",
//                             margin: 10,
//                             top: 3
//                         }}
//                     />
//                     <TouchableOpacity
//                         onPress={() => navigation.navigate("Punteo")}
//                         style={{
//                             backgroundColor: "#2596be",
//                             //marginTop: "2%",
//                             width: "70%",
//                             padding: 1,
//                             alignSelf: "center",
//                             borderRadius: 10,
//                             marginLeft: 10,
//                             height: 50,

//                         }}
//                     >
//                         <Text
//                             style={{
//                                 fontSize: 30,
//                                 textAlign: "center",
//                                 color: "#1b1464",
//                             }}
//                         >Punteo</Text>
//                     </TouchableOpacity>

//                 </View>
//                 <View
//                     style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-start", marginBottom: 30 }}
//                 >

//                     <View
//                         style={{
//                             backgroundColor: "#00d9dd",
//                             width: 40,
//                             position: "absolute",
//                             top: 10,
//                             height: 40,
//                             borderRadius: 50,
//                             alignSelf: "center",
//                             justifyContent: "center",
//                             margin: 0,

//                         }}
//                     >
//                     </View>
//                     <Image
//                         source={require('../image/calibrador.png')}
//                         style={{
//                             width: 20,
//                             //padding:"1",
//                             height: 22,
//                             alignSelf: "center",
//                             margin: 10,
//                             top: 3
//                         }}
//                     />
//                     <TouchableOpacity
//                         onPress={() => navigation.navigate("Rasgueo")}
//                         style={{
//                             backgroundColor: "#2596be",
//                             //marginTop: "2%",
//                             width: "70%",
//                             padding: 1,
//                             alignSelf: "center",
//                             borderRadius: 10,
//                             marginLeft: 10,
//                             height: 50,

//                         }}
//                     >
//                         <Text
//                             style={{
//                                 fontSize: 30,
//                                 textAlign: "center",
//                                 color: "#1b1464",
//                             }}
//                         >Rasgueo</Text>
//                     </TouchableOpacity>

//                 </View>
//                 <View style={{
//                     flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end",
//                     top: "9%"
//                 }}>
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
//                             //top: 1,
//                             right: 1,
//                             margin: 1,
//                             left:100
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
//                 {/* <View
//                     style={{
//                         backgroundColor: "#00d9dd",
//                         width: 40,
//                         position: "absolute",
//                         top: 20,
//                         height: 40,
//                         borderRadius: 50,
//                         alignSelf: "center",
//                         justifyContent: "center",
//                         margin: 0,

//                     }}
//                 >
//                 </View>
//                 <Image
//                     source={require('../image/calibrador.png')}
//                     style={{
//                         width: 20,
//                         //padding:"1",
//                         height: 22,
//                         alignSelf: "center",
//                         margin: 10,
//                         top: 7
//                     }}
//                 />
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate("Rasgueo")}
//                     style={{
//                         backgroundColor: "#2596be",
//                         marginTop: "2%",
//                         width: "30%",
//                         padding: 1,
//                         alignSelf: "center",
//                         borderRadius: 10,
//                         marginLeft: 10,
//                         height: 50,

//                     }}
//                 >
//                     <Text
//                         style={{
//                             fontSize: 30,
//                             textAlign: "center",
//                             color: "#1b1464",
//                         }}
//                     >Rasgueo</Text>
//                 </TouchableOpacity> */}
//             </View>

//         </View>

//     </View >
// </SafeAreaView>