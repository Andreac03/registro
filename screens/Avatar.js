import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
function Avatar() {
    const navigation = useNavigation();
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageSelect = (image) => {
        setSelectedImage(image);
    };
    return (
        <View style={style.Container}>
            <View style={style.Header}>
                <Text style={style.TextoTitulo}
                >Avatar
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
                            style={style.BolaAI}
                        >
                            {selectedImage ?
                                <Image
                                    source={selectedImage}
                                    style={style.ImagenCustF1}
                                />
                                :
                                <Text
                                    style={style.TextoAI}
                                >AI
                                </Text>
                            }
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Menuss")}
                            style={style.BotonG}
                        >
                            <Image
                                source={require('../image/ClaveSol.png')}
                                style={style.ImagenG}
                            >
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={style.Fila2}>
                        <TouchableOpacity
                            onPress={() => handleImageSelect(require('../image/customf1.png'))}
                            style={style.BotonCustF1}
                        >
                            <Image
                                source={require('../image/customf1.png')}
                                style={style.ImagenCustF1}
                            >
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleImageSelect(require('../image/customf2.png'))}
                            style={style.BotonCustF2}
                        >
                            <Image
                                source={require('../image/customf2.png')}
                                style={style.ImagenCustF2}
                            >
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleImageSelect(require('../image/customf3.png'))}
                            style={style.BotonCustF3}
                        >
                            <Image
                                source={require('../image/customf3.png')}
                                style={style.ImagenCustF3}
                            >
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleImageSelect(require('../image/customf4.png'))}
                            style={style.BotonCustF4}
                        >
                            <Image
                                source={require('../image/customf4.png')}
                                style={style.ImagenCustF4}
                            >
                            </Image>
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
        alignSelf: "center",
    },
    Fila: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        //marginVertical:5
        top: "2%",
    },
    Fila2: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        marginVertical: 5,
        top: "3%"
    },
    BolaAI: {
        backgroundColor: "#1b1464",
        width: 90,
        height: 90,
        //position:"absolute",
        //top:20,
        borderRadius: 100,
        alignSelf: "center",
        //left:40,
        //marginRight:50,
    },
    TextoAI: {
        fontSize: hp(8),
        alignSelf: "center",
        top: "25%",
        color: "white",
    },
    BotonG: {
        //backgroundColor: "#1b1464",
        //marginTop: "1%",
        width: 55,
        height: 55,
        //padding: 1,
        alignSelf: "center",
        borderRadius: 200,
        //marginRight:80,
        //marginLeft:300,
        top: 1,
        //marginLeft:70,
        left: "90%",
    },
    ImagenG: {
        width: 28,
        height: 63,
        alignSelf: "center",
        top: 1,
        tintColor: "black",
    },
    BotonCustF1: {
        backgroundColor: "#1b1464",
        marginTop: "1%",
        width: 80,
        height: 80,
        //padding: 1,
        alignSelf: "center",
        borderRadius: 200,
        marginRight: 80,
    },
    BotonCustF2: {
        backgroundColor: "#1b1464",
        marginTop: "1%",
        width: 80,
        height: 80,
        //padding: 1,
        alignSelf: "center",
        borderRadius: 200,
        marginRight: 80,
    },
    BotonCustF3: {
        backgroundColor: "#1b1464",
        marginTop: "1%",
        width: 80,
        height: 80,
        //padding: 1,
        alignSelf: "center",
        borderRadius: 200,
        marginRight: 80,
    },
    BotonCustF4: {
        backgroundColor: "#1b1464",
        marginTop: "1%",
        width: 80,
        height: 80,
        //padding: 1,
        alignSelf: "center",
        borderRadius: 200,
        //marginRight:80,
    },
    ImagenCustF1: {
        width: 40,
        height: 55,
        alignSelf: "center",
        top: 10,
    },
    ImagenCustF2: {
        width: 40,
        height: 55,
        alignSelf: "center",
        top: 10,
    },
    ImagenCustF3: {
        width: 40,
        height: 55,
        alignSelf: "center",
        top: 10,
    },
    ImagenCustF4: {
        width: 40,
        height: 55,
        alignSelf: "center",
        top: 10,
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
export default Avatar;


{/* <SafeAreaView
    style={{
        width: "100%",
        height: "auto",
        //backgroundColor:"green"
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
                width: "80%",
                height: "80%",
                top: "1%"
            }}
        >
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "2%",
                    alignSelf: "center",
                    left: 80,
                }}
            >Avatar
            </Text>
            <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: "1%", height: "1%" }}>
                <View
                    style={{
                        backgroundColor: "#1b1464",
                        width: 90,
                        height: 90,
                        position: "absolute",
                        top: 20,
                        borderRadius: 100,
                        alignSelf: "center",
                        left: 40,

                    }}
                >
                    <Text
                        style={{
                            fontSize: 40,
                            alignSelf: "center",
                            top: 15,
                            color: "white"
                        }}
                    >AI
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
                        style={{
                            //backgroundColor: "#1b1464",
                            //marginTop: "1%",
                            width: 55,
                            height: 55,
                            padding: 1,
                            alignSelf: "center",
                            borderRadius: 200,
                            //marginRight:80,
                            marginLeft: 300,
                            top: -40,
                        }}
                    >
                        <Image
                            source={require('../image/ClaveSol.png')}
                            style={{
                                width: 28,
                                height: 63,
                                alignSelf: "center",
                                top: 1,
                                tintColor: "black"
                            }}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: "25%", marginLeft: 250, height: "30%" }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("")}
                    style={{
                        backgroundColor: "#1b1464",
                        marginTop: "1%",
                        width: 80,
                        height: 80,
                        padding: 1,
                        alignSelf: "center",
                        borderRadius: 200,
                        marginRight: 80,
                    }}
                >
                    <Image
                        source={require('../image/customf1.png')}
                        style={{
                            width: 40,
                            height: 55,
                            alignSelf: "center",
                            top: 10
                        }}
                    >
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("")}
                    style={{
                        backgroundColor: "#1b1464",
                        marginTop: "1%",
                        width: 80,
                        height: 80,
                        padding: 1,
                        alignSelf: "center",
                        borderRadius: 200,
                        marginRight: 80,

                    }}
                >
                    <Image
                        source={require('../image/customf2.png')}
                        style={{
                            width: 40,
                            height: 55,
                            alignSelf: "center",
                            top: 10
                        }}
                    >
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("")}
                    style={{
                        backgroundColor: "#1b1464",
                        marginTop: "1%",
                        width: 80,
                        height: 80,
                        padding: 1,
                        alignSelf: "center",
                        borderRadius: 200,
                        marginRight: 80,

                    }}
                >
                    <Image
                        source={require('../image/customf3.png')}
                        style={{
                            width: 40,
                            height: 55,
                            alignSelf: "center",
                            top: 10
                        }}
                    >
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("")}
                    style={{
                        backgroundColor: "#1b1464",
                        marginTop: "1%",
                        width: 80,
                        height: 80,
                        padding: 1,
                        alignSelf: "center",
                        borderRadius: 200,
                        marginRight: 80,

                    }}
                >
                    <Image
                        source={require('../image/customf4.png')}
                        style={{
                            width: 40,
                            height: 55,
                            alignSelf: "center",
                            top: 10
                        }}
                    >
                    </Image>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "flex-end", top: "27%", height: "35%" }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Usuario")}
                    style={{
                        //backgroundColor:"green",
                        marginTop: 1,
                        width: 40,
                        height: 40,
                        padding: 1,
                        alignSelf: "flex-end",
                        borderRadius: 50,
                        top: 5,
                        right: 5,
                        margin: 1,
                        marginBottom: 5,
                        left: 159,
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
            </View>
        </View>
    </View>
</SafeAreaView> */}