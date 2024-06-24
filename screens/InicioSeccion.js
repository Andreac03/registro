import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Axios from 'axios';

function InicioSeccion() {
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const iniciarSesion = () => {
        Axios.post("http://192.168.10.14:8080/login", {
            username: username,
            password: password,
        })
            .then(response => {
                if (response.data.token) {
                    alert("Inicio de sesión satisfactorio");
                    navigation.navigate("Menuss");
                } else {
                    alert("Nombre de usuario o contraseña incorrectos");  // Mensaje de alerta para contraseña incorrecta
                }
            })
            .catch(error => {
                console.error("Error al iniciar sesión", error);
                alert("Error al iniciar sesión: " + error.message);
            });
    };
    return (
        <SafeAreaView
            style={{
                width: "auto",
                height: "auto",
                flex: 0,
                //backgroundColor:"blue"
            }}>


            <View style={{
                height: "auto",
                width: "auto",
            }}
            >
                <View style={{ height: "auto", bottom: 2 }}>
                    <Image
                        source={require('../image/ImagenInicio.png')}
                        style={{
                            position: 'absolute',
                            width: "100",
                            height: 393,
                            top: "5%",
                            alignSelf: "center"
                        }}
                    />
                    <View style={{
                        width: "70%",
                        height: "95%",
                        //backgroundColor:"green",
                        alignSelf: "center",
                        top: "10%"
                    }}>
                        <Image
                            source={require('../image/pua.png')}
                            style={{
                                position: 'absolute',
                                width: "52%",
                                height: "94%",
                                top: "5%",
                                alignSelf: "center"
                            }}
                        />
                        <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", marginTop: 70 }}>
                            <View
                                style={{
                                    //backgroundColor: "#00d9dd",
                                    width: 30,
                                    height: 30,
                                    position: "absolute",
                                    top: 1,
                                    borderRadius: 50,
                                    alignSelf: "center",
                                    //justifyContent:"center",
                                    margin: 0,
                                }}
                            >

                            </View>
                            <Image
                                source={require('../image/ClaveSol.png')}
                                style={{
                                    width: 16,
                                    height: 35,
                                    alignSelf: "center",
                                    marginRight: 20,
                                    top: 1,
                                    left: -10
                                }}
                            />
                            <TextInput
                                style={{
                                    width: '20%',
                                    height: 18,
                                    backgroundColor: '#fff',
                                    paddingHorizontal: 3,
                                    top: 1,
                                    borderRadius: 10,
                                }}
                                placeholder="Usuario"
                                value={username}
                                onChangeText={setUsername}
                            />
                        </View>
                        <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", margintop: 20 }}>
                            <View
                                style={{
                                    //backgroundColor: "#00d9dd",
                                    width: 30,
                                    height: 30,
                                    position: "absolute",
                                    top: 1,
                                    borderRadius: 50,
                                    alignSelf: "center",
                                    //justifyContent:"center",
                                    margin: 0,
                                }}
                            >
                            </View>
                            <Image
                                source={require('../image/ClaveSol.png')}
                                style={{
                                    width: 16,
                                    height: 35,
                                    alignSelf: "center",
                                    marginRight: 20,
                                    top: 1,
                                    left: -10
                                }}
                            />
                            <TextInput
                                style={{
                                    width: '20%',
                                    height: 18,
                                    backgroundColor: '#fff',
                                    paddingHorizontal: 2,
                                    top: 1,
                                    borderRadius: 10,
                                }}
                                placeholder="Contraseña"
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Menuss")}
                            style={{
                                backgroundColor: "#00d9dd",
                                marginTop: 1,
                                width: "10%",
                                height: 20,
                                padding: 0,
                                alignSelf: "center",
                                borderRadius: 10,
                                marginLeft: 10,
                                top: 15,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 13,
                                    textAlign: "center",
                                    color: "#1b1464",
                                    top: 1,
                                    fontWeight: "bold"
                                }}
                            >Iniciar
                            </Text>
                            <Image
                                source={require('../image/Corchea.png')}
                                style={{
                                    width: 15,
                                    height: 25,
                                    alignSelf: "flex-start",
                                    margin: 1,
                                    top: -17,
                                    left: -35
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Registro")}
                            style={{
                                marginTop: 1,
                                height: 20,
                                alignSelf: "center",
                                borderRadius: 10,
                                marginLeft: 10,
                                top: 30,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 13,
                                    textAlign: "center",
                                    color: "#00d9dd",
                                    fontWeight: "bold",
                                    top: 5,
                                }}
                            >Registrarse
                            </Text>
                        </TouchableOpacity>
                        
                        <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: "23%" }}>
                            <TouchableOpacity
                                style={{
                                    width: 30,
                                    position: "absolute",
                                    top: 5,
                                    height: 30,
                                    borderRadius: 50,
                                    alignSelf: "center",
                                    justifyContent: "center",
                                    marginLeft: 10,
                                }}
                            >
                                <Image
                                    source={require('../image/facebook.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        alignSelf: "center",
                                        margin: 10,
                                        top: 25,
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: 30,
                                    position: "absolute",
                                    top: 5,
                                    height: 30,
                                    borderRadius: 50,
                                    alignSelf: "center",
                                    justifyContent: "center",
                                    margin: 0,
                                    marginLeft: -35,
                                }}
                            >
                                <Image
                                    source={require('../image/gmail.png')}
                                    style={{
                                        width: 20,
                                        height: 19,
                                        alignSelf: "center",
                                        margin: 10,
                                        top: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}


export default InicioSeccion;

