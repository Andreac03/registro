import React from "react";

import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Cuestionario() {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View>
                <ScrollView>
                    <View>
                        <Text
                            style={{
                                fontSize: 30,
                                textAlign: "center",
                                marginTop: "3%",
                                marginVertical: "5%",
                            }}
                        >Cuestionario 
                        </Text>
                        <View
                            style={{
                                backgroundColor: "#1b1464",
                                width: 100,
                                height: 100,
                                position: "absolute",
                                top: "30%",
                                borderRadius: 50,
                                alignSelf: "flex-start",
                                left: 40,
                                //justifyContent:"center",

                            }}

                        >
                            <Text
                                style={{
                                    fontSize: 40,
                                    alignSelf: "center",
                                    top: 18,
                                    color: "white",
                                }}
                            >AI</Text>
                        </View>
                        <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center" }}>

                            <View style={{
                                width: "60%",
                                height: "100%",
                                backgroundColor: "#6c6898",
                                left: "6%",
                                bottom: 15
                            }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "white",
                                        alignSelf: "center",
                                        //top:0,
                                        fontWeight: "bold"
                                    }}
                                >Preguntas
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "white",
                                        alignSelf: "center",
                                        fontWeight: "bold",
                                    }}
                                >Conoces cuantas notas hay?
                                </Text>
                                <TextInput
                                    style={{
                                        width: '75%',
                                        height: 18,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        left: 50,
                                        marginBottom: 5,
                                        marginTop: 5,
                                    }}
                                    placeholder="*******"
                                >
                                </TextInput>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "white",
                                        alignSelf: "center",
                                        //top:0,
                                        fontWeight: "bold"
                                    }}
                                >Sabes que es Punteo?
                                </Text>
                                <TextInput
                                    style={{
                                        width: '75%',
                                        height: 18,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        left: 50,
                                        marginBottom: 5,
                                        marginTop: 5,
                                    }}
                                    placeholder="******"
                                >
                                </TextInput>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "white",
                                        alignSelf: "center",
                                        //top:0,
                                        fontWeight: "bold"
                                    }}
                                >Sabes que es Rasgueo?
                                </Text>
                                <TextInput
                                    style={{
                                        width: '75%',
                                        height: 18,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        left: 50,
                                        marginBottom: 5,
                                        marginTop: 5,
                                    }}
                                    placeholder="******"
                                >
                                </TextInput>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "white",
                                        alignSelf: "center",
                                        //top:0,
                                        fontWeight: "bold"
                                    }}
                                >Conoces las partes de una guitarra?
                                </Text>
                                <TextInput
                                    style={{
                                        width: '75%',
                                        height: 18,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        left: 50,
                                        marginBottom: 5,
                                        marginTop: 5,
                                    }}
                                    placeholder="*****"
                                >
                                </TextInput>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "white",
                                        alignSelf: "center",
                                        //top:0,
                                        fontWeight: "bold"
                                    }}
                                >Conoces las claves de solfeo?
                                </Text>
                                <TextInput
                                    style={{
                                        width: '75%',
                                        height: 18,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        left: 50,
                                        marginBottom: 5,
                                        marginTop: 5,
                                    }}
                                    placeholder="******"
                                >
                                </TextInput>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "white",
                                        alignSelf: "center",
                                        //top:0,
                                        fontWeight: "bold"
                                    }}
                                >Conoces la tecnica Sweet picking?
                                </Text>
                                <TextInput
                                    style={{
                                        width: '75%',
                                        height: 18,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        left: 50,
                                        marginBottom: 5,
                                        marginTop: 5,
                                    }}
                                    placeholder="******"
                                >
                                </TextInput>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "white",
                                        alignSelf: "center",
                                        //top:0,
                                        fontWeight: "bold"
                                    }}
                                >Conoces la tecnica Sweet picking?
                                </Text>
                                <TextInput
                                    style={{
                                        width: '75%',
                                        height: 18,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        left: 50,
                                        marginBottom: 5,
                                        marginTop: 5,
                                    }}
                                    placeholder="******"
                                >
                                </TextInput>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "white",
                                        alignSelf: "center",
                                        //top:0,
                                        fontWeight: "bold"
                                    }}
                                >Conoces la tecnica Sweet picking?
                                </Text>
                                <TextInput
                                    style={{
                                        width: '75%',
                                        height: 18,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        left: 50,
                                        marginBottom: 5,
                                        marginTop: 5,
                                    }}
                                    placeholder="******"
                                >
                                </TextInput>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: "white",
                                        alignSelf: "center",
                                        //top:0,
                                        fontWeight: "bold"
                                    }}
                                >Conoces la tecnica Sweet picking?
                                </Text>
                                <TextInput
                                    style={{
                                        width: '75%',
                                        height: 18,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 10,
                                        borderRadius: 10,
                                        left: 50,
                                        marginBottom: 5,
                                        marginTop: 5,
                                    }}
                                    placeholder="******"
                                >
                                </TextInput>
                            </View>



                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ModuloCalificacion")}
                            style={{
                                backgroundColor: "#1b1464",
                                marginTop: -70,
                                width: 70,
                                height: 70,
                                padding: 1,
                                alignSelf: "flex-end",
                                borderRadius: 10,
                                margin: 10,
                                borderRadius: 50,
                                left: 1
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: "white",
                                    alignSelf: "center",
                                    top: 20,
                                    fontWeight: "bold"
                                }}

                            >Go

                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({})
    
export default Cuestionario;