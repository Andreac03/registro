import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios, { Axios } from 'axios';

//___________________________Funsion de Ventana_______________________
function InicioSeccion  ()  {
    const navigation = useNavigation();
    const[username,setUsername]= useState("");
    const[password,setPassword]= useState("0");

    const login=()=>{
      Axios.post("http://localhost:8081/create",{
        username:username,
        password:password,
      }).then(()=>{
        alert( "registrado");
        navigation.navigate("Inicio"); // Navegar a la pantalla de inicio después del registro
    }).catch(error => {
      console.error("Error registrando al usuario:", error);
      alert("Error registrando al usuario");
      });
    };

      
    return (
        <SafeAreaView
            style={{
                width:"auto",
                height:"auto",
                flex:0,
                //backgroundColor:"blue"
            }}
        >
            <View style={{
                height:"auto",
                width:"auto",
            }}>
            {/* <Text
                style={{
                    fontSize:30,
                    textAlign: "center",
                    marginTop:"0%"
                }}
                >Inicio Seccion
            </Text> */}
            <View style={{height:"auto", bottom:2}}>
                <Image 
                    source={require('../image/ImagenInicio.png')}
                    style={{
                        position: 'absolute',
                        width: "100%",
                        height: 393,
                        alignSelf:"center",
                    }}
                />
                <View style={{width: "70%",
                            height: "95%",
                            //backgroundColor:"green",
                            alignSelf:"center",
                            top:"10%"
                        }}>
                    <Image
                        source={require('../image/pua.png')}
                        style={{
                            position: 'absolute',
                            width: "52%",
                            height: "94%",
                            top:"5%",
                            alignSelf:"center"
                        }}
                    />
                    <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center", marginTop:70}}>
                        <View 
                            style={{
                                //backgroundColor: "#00d9dd",
                                width:30,
                                height:30,
                                position:"absolute",
                                top:1,
                                borderRadius:50,
                                alignSelf:"center",
                                //justifyContent:"center",
                                margin:0,
                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/ClaveSol.png')}
                            style={{
                                width:16,
                                height:35,
                                alignSelf:"center",
                                marginRight:20,
                                top:1,
                                left:-10
                            }}
                        />
                        <TextInput
                            style={{
                                width: '20%',
                                height: 18,
                                backgroundColor: '#fff',
                                //marginBottom: 50,
                                paddingHorizontal: 3,
                                top:1,
                                borderRadius: 10,
                            }}
                            placeholder="username"
                        />
                    </View>
                    <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center", marginTop:20}}>
                        <View 
                            style={{
                                //backgroundColor: "#00d9dd",
                                width:30,
                                height:30,
                                position:"absolute",
                                top:1,
                                borderRadius:50,
                                alignSelf:"center",
                                //justifyContent:"center",
                                margin:0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/ClaveSol.png')}
                            style={{
                                width:16,
                                height:35,
                                alignSelf:"center",
                                marginRight:20,
                                top:1,
                                left:-10
                            }}
                        />
                        <TextInput
                            style={{
                                width: '20%',
                                height: 18,
                                backgroundColor: '#fff',
                                //marginBottom: 50,
                                paddingHorizontal: 2,
                                top:1,
                                borderRadius: 10,
                            }}
                            placeholder="password" secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Menuss")}
                        style={{
                            backgroundColor: "#00d9dd",
                            marginTop: 1,
                            width: "10%",
                            height:20,
                            padding: 0,
                            alignSelf: "center",
                            borderRadius: 10,
                            marginLeft:10,
                            top:15
                        }}
                    >
                        <Text 
                            style={{
                                fontSize: 13,
                                textAlign: "center",
                                color: "#1b1464",
                                top:1,
                                fontWeight:"bold"
                                
                            }}
                        
                        >Iniciar

                        </Text>
                        <Image
                            source={require('../image/Corchea.png')}
                            style={{
                                width:15,
                                height:25,
                                alignSelf:"flex-start",
                                margin:1,
                                top:-17,
                                left:-35
                                }}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Registro")}
                        style={{
                            //backgroundColor: "white",
                            marginTop: 1,
                            //width: "10%",
                            height:20,
                            //padding: 0,
                            alignSelf: "center",
                            borderRadius: 10,
                            marginLeft:10,
                            top:30,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 13,
                                textAlign: "center",
                                color: "#00d9dd",
                                fontWeight:"bold",
                                top:5,
                                //width:100
                            }}
                        >Registrarse
                        </Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center", top:20}}>
                            <TouchableOpacity
                                style={{
                                    //backgroundColor: "#00d9dd",
                                    width:30,
                                    position:"absolute",
                                    top:5,
                                    height:30,
                                    borderRadius:50,
                                    alignSelf:"center",
                                    justifyContent:"center",
                                    marginLeft:10,
                                }}
                            >
                                <Image
                                    source={require('../image/facebook.png')}
                                    style={{
                                        width:20,
                                        height:20,
                                        alignSelf:"center",
                                        margin:10,
                                        top:25,
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    //backgroundColor: "#00d9dd",
                                    width:30,
                                    position:"absolute",
                                    top:5,
                                    height:30,
                                    borderRadius:50,
                                    alignSelf:"center",
                                    justifyContent:"center",
                                    margin:0,
                                    marginLeft:-35,
                                }}
                            >
                                <Image
                                    source={require('../image/gmail.png')}
                                    style={{
                                        width:20,
                                        height:19,
                                        alignSelf:"center",
                                        margin:10,
                                        top:25,
                                    }}
                                />
                            </TouchableOpacity>
                    </View>                    
                </View>
            </View>
        </View>
        </SafeAreaView>
        
    )
}
export default InicioSeccion;   
{/* <TextInput
                        style={{
                            width: '15%',
                            height: 18,
                            backgroundColor: '#fff',
                            marginBottom: 1,
                            paddingHorizontal: 10,
                            borderRadius: 5,
                            top:-60,
                            borderRadius: 10,
                        }}
                        placeholder="Contraseña"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={{
                            backgroundColor: "white",
                            marginTop: 1,
                            width: "7%",
                            height:20,
                            padding: 0,
                            alignSelf: "center",
                            borderRadius: 10,
                            marginLeft:10,
                            top:-40
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 13,
                                textAlign: "center",
                                color: "#1b1464",
                            }}
                        >Iniciar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            //backgroundColor: "white",
                            marginTop: 1,
                            width: "10%",
                            height:20,
                            padding: 0,
                            alignSelf: "center",
                            borderRadius: 10,
                            marginLeft:10,
                            top:-30,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 13,
                                textAlign: "center",
                                color: "#1b1464",
                                fontWeight:"900"
                            }}
                        >Registrarse
                        </Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center"}}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#00d9dd",
                                    width:30,
                                    position:"absolute",
                                    top:-20,
                                    height:30,
                                    borderRadius:50,
                                    alignSelf:"center",
                                    justifyContent:"center",
                                    margin:0,
                                    marginLeft:10,
                                }}
                            >
                                <Image
                                    source={require('../image/bemol.png')}
                                    style={{
                                        width:10,
                                        height:16,
                                        padding:"1",
                                        alignSelf:"center",
                                        margin:10
                                    }}
                                />

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#00d9dd",
                                    width:30,
                                    position:"absolute",
                                    top:-20,
                                    height:30,
                                    borderRadius:50,
                                    alignSelf:"center",
                                    justifyContent:"center",
                                    margin:0,
                                    marginLeft:-35,
                                }}
                            >
                                <Image
                                    source={require('../image/bemol.png')}
                                    style={{
                                        width:10,
                                        height:16,
                                        padding:"1",
                                        alignSelf:"center",
                                        margin:10
                                    }}
                                />

                            </TouchableOpacity>
                    </View> */}

{/* <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center"}}>
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
                        onPress={() => navigation.navigate("Biblioteca")}
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