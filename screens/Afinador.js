import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

//import Orientation from 'react-native-orientation-locker';

const Afinador = () => {
    const navigation = useNavigation();
    return (
        <View style={style.Container}>

            {/* header */}
            <View style={style.Header}>
                <Text style={style.TextoTitulo}
                >Afinador
                </Text>
            </View>
            {/* main */}
            <View style={style.Main}>
                <View
                    style={style.Columna}>
                    <View
                        style={style.Fila}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Afinador")}
                            style={style.BotonBemol}
                        >
                            <Image
                                source={require('../image/bemol.png')}
                                style={style.ImagenBemol}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonPua}
                        >
                            <Image
                                source={require('../image/pua.png')}
                                style={style.ImagenPua}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonCalibrador}
                        >
                            <Image
                                source={require('../image/calibrador.png')}
                                style={style.ImagenCalibrador}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.BotonSotenido}
                        >
                            <Image
                                source={require('../image/sostenido.png')}
                                style={style.ImagenSostenido}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={style.FilaNotas}>
                        <View style={style.ColumnaGraves}>
                            <TouchableOpacity
                                style={style.BotonRe}
                            >
                                <Text
                                    style={style.TextoRe}
                                >D</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.BotonLa}
                            >
                                <Text
                                    style={style.TextoLa}
                                >A</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.BotonMiE}
                            >
                                <Text
                                    style={style.TextoMiE}
                                >E</Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={style.FilaGuitarra}>
                            <TouchableOpacity
                                style={style.BotonGuitarra}
                            >
                                <Image
                                    source={require('../image/GuitarraElec.png')}
                                    style={style.ImagenGuitarra}
                                />
                            </TouchableOpacity>
                            <View style={style.ColumnaAgudas}>
                                <TouchableOpacity
                                    style={style.BotonSol}
                                >
                                    <Text
                                        style={style.TextoSol}
                                    >G</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={style.BotonSi}
                                >
                                    <Text
                                        style={style.TextoSi}
                                    >B</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={style.BotonMie}
                                >
                                    <Text
                                        style={style.TextoMie}
                                    >e</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {/* footer */}
            <View style={style.footer}>
                <View style={style.Tab}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Settings")}
                        style={style.BotonIcono}
                    >
                        <Image
                            source={require('../image/Settings.png')}
                            style={style.ImagenConfiguracion}
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
};
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
        top: "3%",
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
        alignSelf: "flex-end",
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
        marginHorizontal: "3%"
    },
    ImagenConfiguracion: {
        width: 29,
        height: 30,
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
    BotonBemol: {
        //backgroundColor:"green",
        width: "3%",
        //padding: 2,
        height: 50,
        borderRadius: 50,
    },
    ImagenBemol: {
        width: 15,
        height: 35,
        //padding: "30",
        alignSelf: "center",
        margin: 10,
        tintColor: "black",
        top: -4
    },
    BotonCalibrador: {
        //backgroundColor:"#443e7e",
        width: "3%",
        //padding: 2,
        height: 50,
        borderRadius: 50,
    },
    ImagenCalibrador: {
        width: 30,
        height: 30,
        //padding: "30",
        alignSelf: "center",
        margin: 10,
        tintColor: "black",
        top: 1
    },
    BotonPua: {
        //backgroundColor:"#a9a7bf",
        width: "4%",
        //padding: 2,
        height: 50,
        borderRadius: 50,
    },
    ImagenPua: {
        width: 30,
        height: 35,
        //padding: "30",
        alignSelf: "center",
        margin: 10,
        tintColor: "#00ffff",
        top: 1
    },
    BotonSotenido: {
        //backgroundColor:"#a9a7bf",
        width: "3%",
        //padding: 2,
        height: 50,
        borderRadius: 50,
    },
    ImagenSostenido: {
        width: 13,
        height: 30,
        //padding: "30",
        alignSelf: "center",
        margin: 10,
        tintColor: "black",
        top: 1
    },
    BotonRe: {
        backgroundColor: "#1b1464",
        marginTop: 10,
        width: 40,
        height: 40,
        //padding: 1,
        alignSelf: "flex-end",
        borderRadius: 50,
        top: 1,
        //right: -100,
        margin: 1,
        marginBottom: 5
    },
    TextoRe: {
        fontSize: hp(4),
        textAlign: "center",
        color: "white",
        top: 8,
    },
    BotonLa: {
        backgroundColor: "#1b1464",
        marginTop: 10,
        width: 40,
        height: 40,
        //padding: 1,
        alignSelf: "flex-end",
        borderRadius: 50,
        top: 1,
        //right: -100,
        margin: 1,
        marginBottom: 5
    },
    TextoLa: {
        fontSize: hp(4),
        textAlign: "center",
        color: "white",
        top: 8,
    },
    BotonMiE: {
        backgroundColor: "#1b1464",
        marginTop: 10,
        width: 40,
        height: 40,
        //padding: 1,
        alignSelf: "flex-end",
        borderRadius: 50,
        top: 1,
        //right: -100,
        margin: 1,
        marginBottom: 5
    },
    TextoMiE: {
        fontSize: hp(4),
        textAlign: "center",
        color: "white",
        top: 8,
    },
    BotonSol: {
        backgroundColor: "#1b1464",
        marginTop: 10,
        width: 40,
        height: 40,
        //padding: 1,
        alignSelf: "flex-end",
        borderRadius: 50,
        top: 1,
        //right: -100,
        margin: 1,
        marginBottom: 5
    },
    TextoSol: {
        fontSize: hp(4),
        textAlign: "center",
        color: "white",
        top: 8,
    },
    BotonSi: {
        backgroundColor: "#1b1464",
        marginTop: 10,
        width: 40,
        height: 40,
        //padding: 1,
        alignSelf: "flex-end",
        borderRadius: 50,
        top: 1,
        //right: -100,
        margin: 1,
        marginBottom: 5
    },
    TextoSi: {
        fontSize: hp(4),
        textAlign: "center",
        color: "white",
        top: 8,
    },
    BotonMie: {
        backgroundColor: "#1b1464",
        marginTop: 10,
        width: 40,
        height: 40,
        //padding: 1,
        alignSelf: "flex-end",
        borderRadius: 50,
        top: 1,
        //right: -100,
        margin: 1,
        marginBottom: 5
    },
    TextoMie: {
        fontSize: hp(4),
        textAlign: "center",
        color: "white",
        top: 8,
    },
    FilaNotas: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "center",
        top: "2%",
    },
    ColumnaGraves: {
        flexDirection: "column",
        paddingBottom: 2,
        alignSelf: "flex-start",
        top: 1,
        right: "80%",
    },
    FilaGuitarra: {
        flexDirection: "row",
        paddingBottom: 2,
        alignSelf: "flex-start",
    },
    BotonGuitarra: {
        //backgroundColor: "#00d9dd",
        //marginTop: -5,
        width: 200,
        //padding: 10,
        alignSelf: "center",
        borderRadius: 10,
        height: 170,
        margin: 1
    },
    ImagenGuitarra: {
        width: 200,
        height: 219,
        //padding:"1",
        alignSelf: "center",
        margin: 10,
        top: -35,
    },
    ColumnaAgudas: {
        flexDirection: "column",
        paddingBottom: 2,
        alignSelf: "flex-end",
        top: 1,
        left: "80%",
    },
})
export default Afinador;
