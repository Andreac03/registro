import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';

//__________Funsion de Ventana________
const Registro = ({}) =>    {
    const navigation = useNavigation();
    const[username,setUsername]= useState("");
    const[password,setPassword]= useState("");
    const[gmail,setGmail]=useState("");

    const [registroList,setRegistro] =useState ([]);

    const mostrarDatos = () => {
        Axios.post("http://192.168.10.15:8080/register", {
            username: username,
            password: password,
            gmail: gmail,
        }).then(() => {
            alert("Usuario registrado");
           
        }).catch(error => {
            console.error(error);
            console.error("Error al registrar el usuario",error);
            alert("Error al registrar el usuario"+ error.message);
        });
    };

    
    // const registro=()=>{
    //     Axios.post("http://192.168.10.15:8080/registro").then((response)=>{
    //     setRegistro(response.data);
    //     });
    // }

    return (
        <SafeAreaView
            style={{
                width:"auto",
                height:"auto",
                flex:0,
            }}
        >
            <View style={{
                height:"auto",
                width:"auto",
            }}>
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
                                width:30,
                                height:30,
                                position:"absolute",
                                top:1,
                                borderRadius:50,
                                alignSelf:"center",
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
                                paddingHorizontal: 3,
                                top:1,
                                borderRadius: 10,
                            }}
                            placeholder="username"
                            onChangeText={text => setUsername(text)}
                        />
                    </View>
                    <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center", marginTop:20}}>
                        <View 
                            style={{
                                width:30,
                                height:30,
                                position:"absolute",
                                top:1,
                                borderRadius:50,
                                alignSelf:"center",
                                margin:0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/ClaveSol.png')}
                            style={{
                                width:16,
                                height:36,
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
                                paddingHorizontal: 2,
                                top:1,
                                borderRadius: 10,
                            }}
                            placeholder="password"
                            onChangeText={text => setPassword(text)}

                        />
                    </View>
                    <View style={{flexDirection:"row", paddingBottom:2, alignSelf:"center", marginTop:20}}>
                        <View 
                            style={{
                                width:30,
                                height:30,
                                position:"absolute",
                                top:1,
                                borderRadius:50,
                                alignSelf:"center",
                                margin:0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/ClaveSol.png')}
                            style={{
                                width:16,
                                height:36,
                                alignSelf:"center",
                                marginRight:20,
                                top:1,
                                left:-5
                            }}
                        />
                        <TextInput
                            style={{
                                width: '20%',
                                height: 18,
                                backgroundColor: '#fff',
                                paddingHorizontal: 2,
                                top:1,
                                borderRadius: 10,
                            }}
                            placeholder="gmail"
                            onChangeText={text => setGmail(text)}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={ mostrarDatos}
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
                                top:-20,
                                left:-25
                                }}
                            />
                    </TouchableOpacity>                   
                    <TouchableOpacity
                            onPress={registro}
                            style={{
                                backgroundColor: "#00d9dd",
                                marginTop: 20,
                                width: "10%",
                                height: 20,
                                padding: 0,
                                alignSelf: "center",
                                borderRadius: 10,
                                marginLeft: 10,
                                top: 15
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
                            >
                            
                            </Text>
                        </TouchableOpacity>
                        <FlatList
                            data={registroList}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View>
                                    <Text>{item.username}</Text>
                                    <Text>{item.gmail}</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Registro;