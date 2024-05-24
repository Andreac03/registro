import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const Niveles = () => {
    const navigation = useNavigation();
    return (
        <View style={style.Container}>
            <View style={style.Header}>
                <Text style={style.TextoTitulo}
                >Niveles
                </Text>
            </View>
            <View style={style.Main}>
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
                    <View
                        style={style.Columna}
                    >

                        <View style={style.FilaBasico}>
                            <View
                                style={style.RellenoNivel}
                            >
                            </View>
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenRellenoNivel}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate("Cuestionario")}
                                style={style.BotonLevel}
                            >
                                <Text
                                    style={style.TextoLevel}
                                >Basico</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={style.FilaBasico}
                        >
                            <View
                                style={style.RellenoNivel}
                            >
                            </View>
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenRellenoNivel}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate("CuestionarioI")}
                                style={style.BotonLevel}
                            >
                                <Text
                                    style={style.TextoLevel}
                                >Intermedio</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={style.FilaBasico}
                        >
                            <View
                                style={style.RellenoNivel}
                            >
                            </View>
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenRellenoNivel}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.navigate("CuestionarioA")}
                                style={style.BotonLevel}
                            >
                                <Text
                                    style={style.TextoLevel}
                                >Avanzado</Text>
                            </TouchableOpacity>
                        </View>
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
        marginVertical: 5
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

    
    Ai: {
        backgroundColor: "#1b1464",
        width: 100,
        height: 100,
        position: "absolute",
        top: "30%",
        borderRadius: 50,
        alignSelf: "flex-start",
        left: 40,
        //marginLeft:30
    },
    TextoAi: {
        fontSize: 40,
        alignSelf: "center",
        top: 18,
        color: "white",
    },
    Columna: {
        flexDirection: "column",
        paddingBottom: 2,
        alignSelf: "center",
        top: "0%",
        marginLeft: 200,

    },
    FilaBasico: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        top: "1%",
        margin: 5

    },
    RellenoNivel: {
        backgroundColor: "#00d9dd",
        width: 40,
        position: "absolute",
        top: "27%",
        height: 40,
        borderRadius: 50,
        alignSelf: "center",
        justifyContent: "center",

    },
    ImagenRellenoNivel: {
        width: 20,
        //padding:"1",
        height: 22,
        alignSelf: "center",
        margin: 10,
        top: 7
    },
    BotonLevel: {
        backgroundColor: "#2596be",
        marginTop: "2%",
        width: "70%",
        height: 55,
        //padding: 1,
        alignSelf: "center",
        borderRadius: 10,
        marginLeft: 40,
    },
    TextoLevel: {
        fontSize: hp(6),
        textAlign: "center",
        color: "#1b1464",
        top: "15%"
    },
    
});

export default Niveles;



// <SafeAreaView
//     style={styles.SafeAreaView}
// >
//     <View
//         style={styles.ContenedorPrincipal}
//     >
//         <Text
//             style={styles.TextoTitulo}
//         >Niveles
//         </Text>
//         <View
//             style={styles.Contenido}
//         >
//             <View
//                 style={styles.Ai}
//             >
//                 <Text
//                     style={styles.TextoAi}
//                 >AI</Text>
//             </View>
//             <View style={styles.Columna}
//             >
//                 <View style={styles.FilaBasico}>
//                     <View
//                         style={styles.RellenoNivel}
//                     >
//                     </View>
//                     <Image
//                         source={require('../image/calibrador.png')}
//                         style={styles.ImagenRellenoNivel}
//                     />
//                     <TouchableOpacity
//                         onPress={() => navigation.navigate("Cuestionario")}
//                         style={styles.BotonLevel}
//                     >
//                         <Text
//                             style={styles.TextoLevel}
//                         >Basico</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View
//                     style={styles.FilaBasico}
//                 >
//                     <View
//                         style={styles.RellenoNivel}
//                     >
//                     </View>
//                     <Image
//                         source={require('../image/calibrador.png')}
//                         style={styles.ImagenRellenoNivel}
//                     />
//                     <TouchableOpacity
//                         onPress={() => navigation.navigate("CuestionarioI")}
//                         style={styles.BotonLevel}
//                     >
//                         <Text
//                             style={styles.TextoLevel}
//                         >Intermedio</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <View
//                     style={styles.FilaBasico}
//                 >
//                     <View
//                         style={styles.RellenoNivel}
//                     >
//                     </View>
//                     <Image
//                         source={require('../image/calibrador.png')}
//                         style={styles.ImagenRellenoNivel}
//                     />
//                     <TouchableOpacity
//                         onPress={() => navigation.navigate("CuestionarioA")}
//                         style={styles.BotonLevel}
//                     >
//                         <Text
//                             style={styles.TextoLevel}
//                         >Avanzado</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//             <View style={styles.FilaTab}>
//                 <TouchableOpacity
//                     onPress={() => navigation.navigate("Inicio")}
//                     style={styles.BotonTab}
//                 >
//                     <Image
//                         source={require('../image/Refresh.png')}
//                         style={styles.ImagenTab}
//                     />
//                 </TouchableOpacity>
//             </View>

//         </View>

//     </View>
// </SafeAreaView>