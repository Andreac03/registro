import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";


function Rap() {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View>
                <ScrollView>
                    {/* <Text
                style={{
                    fontSize:30,
                    textAlign: "center",
                    marginTop:"0%"
                }}
                >Rock
            </Text> */}
                    <View
                        style={{
                            top: "5%"
                        }}
                    >
                        <Image
                            source={require('../image/ImageMusica.png')}
                            style={{
                                width: "99%",
                                height: 150,
                                alignSelf: "center",
                                margin: 10,
                                top: 0
                            }}
                        />
                        <View style={{
                            backgroundColor: "#1b1464",
                            width: 100,
                            top: -130,
                            height: 100,
                            borderRadius: 50,
                            alignSelf: "center",
                            justifyContent: "center",
                            marginRight: 40

                        }}>
                            <Text style={{
                                fontSize: 30,
                                fontWeight: "900",
                                color: "white",
                                alignSelf: "center"
                            }}
                            >Rap

                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            top: "5%"
                        }}
                    >
                        <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: -100 }}>
                        <View
                            style={{
                                backgroundColor: "#00d9dd",
                                width: 40,
                                position: "absolute",
                                //top:1,
                                height: 40,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                margin: 0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/calibrador.png')}
                            style={{
                                width: 20,
                                padding: "1",
                                height: 22,
                                alignSelf: "center",
                                margin: 10,
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
                                marginLeft: 10

                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    textAlign: "center",
                                    color: "#1b1464",
                                }}
                            >a-ha - Take On Me</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: -100 }}>
                        <View
                            style={{
                                backgroundColor: "#00d9dd",
                                width: 40,
                                position: "absolute",
                                //top:1,
                                height: 40,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                margin: 0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/calibrador.png')}
                            style={{
                                width: 20,
                                padding: "1",
                                height: 22,
                                alignSelf: "center",
                                margin: 10,
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
                                marginLeft: 10

                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    textAlign: "center",
                                    color: "#1b1464",
                                }}
                            >The Outfield - Your Love</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: -100 }}>
                        <View
                            style={{
                                backgroundColor: "#00d9dd",
                                width: 40,
                                position: "absolute",
                                //top:1,
                                height: 40,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                margin: 0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/calibrador.png')}
                            style={{
                                width: 20,
                                padding: "1",
                                height: 22,
                                alignSelf: "center",
                                margin: 10,
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
                                marginLeft: 10

                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    textAlign: "center",
                                    color: "#1b1464",
                                }}
                            >Toto -Africa</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: -100 }}>
                        <View
                            style={{
                                backgroundColor: "#00d9dd",
                                width: 40,
                                position: "absolute",
                                //top:1,
                                height: 40,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                margin: 0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/calibrador.png')}
                            style={{
                                width: 20,
                                padding: "1",
                                height: 22,
                                alignSelf: "center",
                                margin: 10,
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
                                marginLeft: 10

                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    textAlign: "center",
                                    color: "#1b1464",
                                }}
                            >Michael Jackson - Billie Jean</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: -100 }}>
                        <View
                            style={{
                                backgroundColor: "#00d9dd",
                                width: 40,
                                position: "absolute",
                                //top:1,
                                height: 40,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                margin: 0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/calibrador.png')}
                            style={{
                                width: 20,
                                padding: "1",
                                height: 22,
                                alignSelf: "center",
                                margin: 10,
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
                                marginLeft: 10

                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    textAlign: "center",
                                    color: "#1b1464",
                                }}
                            >Boney M - Rasputin</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", paddingBottom: 2, alignSelf: "center", top: -100 }}>
                        <View
                            style={{
                                backgroundColor: "#00d9dd",
                                width: 40,
                                position: "absolute",
                                //top:1,
                                height: 40,
                                borderRadius: 50,
                                alignSelf: "center",
                                justifyContent: "center",
                                margin: 0,

                            }}
                        >
                        </View>
                        <Image
                            source={require('../image/calibrador.png')}
                            style={{
                                width: 20,
                                padding: "1",
                                height: 22,
                                alignSelf: "center",
                                margin: 10,
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
                                marginLeft: 10

                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 15,
                                    textAlign: "center",
                                    color: "#1b1464",
                                }}
                            >Green Day - The Grouch</Text>
                        </TouchableOpacity>
                    </View>

                    </View>
                    
                </ScrollView>

            </View>
        </SafeAreaView>

    )
}
export default Rap;   