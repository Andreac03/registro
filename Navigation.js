import React from "react";
//Navegacion____________________________________________
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// ____________________screens_______________
import HomeScreen from "./screens/HomeScreen";
import Calibrador from "./screens/Calibrador";
import MenuPrincipal from "./screens/MenuPrincipal";
import Direction from "./screens/Direction";
import IdiomaNotacion from "./screens/IdiomaNotacion";
import Metronomo from "./screens/Metronomo";
import Guitarras from "./screens/Guitarras";
import Ejercicios from "./screens/Ejercicios";
import Biblioteca from "./screens/Biblioteca";
import Musica from "./screens/Musica";
import MedidasCompas from "./screens/MedidasCompas";
import Afinador from "./screens/Afinador";
import Settings from "./screens/Settings";
import Refresh from "./screens/Refresh";
import TipoTecnica from "./screens/TipoTecnica";
import Punteo from "./screens/Punteo";
import Rasgueo from "./screens/Rasgueo";
import Rock from "./screens/Rock";
import Rap from "./screens/Rap";
import Popular from "./screens/Popular";
import Cumbia from "./screens/Cumbia";
import Punk from "./screens/Punk";
import Metal from "./screens/Metal";
import Ska from "./screens/Ska";
import Regue from "./screens/Regue";
import InicioSeccion from "./screens/InicioSeccion";
import Inicio from "./screens/Inicio";
import Niveles from "./screens/Niveles";
//__________________________________Importar Iconos de expo_______________________
import { Ionicons } from '@expo/vector-icons';
import Cuestionario from "./screens/Cuestionario";
import ModuloCalificacion from "./screens/ModuloCalificacion";
import Teoricas from "./screens/Teoricas";
import Practicas from "./screens/Practicas";
import Usuario from "./screens/Usuario";
import Avatar from "./screens/Avatar";
import Registro from "./screens/Registro";
import CuestionarioI from "./screens/CuestionarioI";
import CuestionarioA from "./screens/CuestionarioA";
//______________________________Funsion del Stack Menu_________________________
const MenuFirst = createNativeStackNavigator();
function Menu() {
    return (
        <MenuFirst.Navigator
            initialRouteName="Menuss"
        >
            <MenuFirst.Screen
                name="Menuss"
                component={MenuPrincipal}
            />
            <MenuFirst.Screen
                name="Afinador"
                component={Afinador}
            />
            <MenuFirst.Screen
                name="Guitarras"
                component={Guitarras}
            />
            <MenuFirst.Screen
                name="Ejercicios"
                component={Ejercicios}
            />
            <MenuFirst.Screen
                name="Biblioteca"
                component={Biblioteca}
            />
            <MenuFirst.Screen
                name="Musica"
                component={Musica}
            />
            <MenuFirst.Screen
                name="TipoTecnica"
                component={TipoTecnica}
            />
            <MenuFirst.Screen
                name="Punteo"
                component={Punteo}
            />
            <MenuFirst.Screen
                name="Rasgueo"
                component={Rasgueo}
            />
            <MenuFirst.Screen
                name="Rock"
                component={Rock}
            />
            <MenuFirst.Screen
                name="Rap"
                component={Rap}
            />
            <MenuFirst.Screen
                name="Popular"
                component={Popular}
            />
            <MenuFirst.Screen
                name="Cumbia"
                component={Cumbia}
            />
            <MenuFirst.Screen
                name="Punk"
                component={Punk}
            />
            <MenuFirst.Screen
                name="Metal"
                component={Metal}
            />
            <MenuFirst.Screen
                name="Ska"
                component={Ska}
            />
            <MenuFirst.Screen
                name="Regue"
                component={Regue}
            />
        </MenuFirst.Navigator>
    )
}
//______________________________Funsion del Stack MyStack_______________________________
const HomeStackNavigator = createNativeStackNavigator();
function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="InicioSeccion"
        >
            <HomeStackNavigator.Screen
                name="Settings"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="StackCalibrador"
                component={Calibrador}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Stack3"
                component={Direction}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Stack4"
                component={IdiomaNotacion}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Stack25"
                component={Metronomo}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Medi"
                component={MedidasCompas}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="InicioSeccion"
                component={InicioSeccion}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Registro"
                component={Registro}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Niveles"
                component={Niveles}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Cuestionario"
                component={Cuestionario}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="CuestionarioI"
                component={CuestionarioI}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="CuestionarioA"
                component={CuestionarioA}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="ModuloCalificacion"
                component={ModuloCalificacion}
                options={{
                    headerShown: false
                }}

            />
            <HomeStackNavigator.Screen
                name="Teoricas"
                component={Teoricas}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Practicas"
                component={Practicas}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Usuario"
                component={Usuario}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Avatar"
                component={Avatar}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Menuss"
                component={MenuPrincipal}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Afinador"
                component={Afinador}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Guitarras"
                component={Guitarras}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Ejercicios"
                component={Ejercicios}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Biblioteca"
                component={Biblioteca}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Musica"
                component={Musica}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="TipoTecnica"
                component={TipoTecnica}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Punteo"
                component={Punteo}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Rasgueo"
                component={Rasgueo}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Rock"
                component={Rock}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Rap"
                component={Rap}
                options={{
                    headerShown: false
                }}

            />
            <HomeStackNavigator.Screen
                name="Popular"
                component={Popular}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Cumbia"
                component={Cumbia}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Punk"
                component={Punk}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Metal"
                component={Metal}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Ska"
                component={Ska}
                options={{
                    headerShown: false
                }}
            />
            <HomeStackNavigator.Screen
                name="Regue"
                component={Regue}
                options={{
                    headerShown: false
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}
//____________________________TabNavegation______________Iconos___________________________ 
const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#1b1464",
                headerTintColor: "#1b1464",
            }}
        >
            <Tab.Screen
                name="Home"
                component={MyStack}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings-sharp" size={24} color="#1b1464" />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Refresh"
                component={MenuPrincipal}
                options={{
                    tabBarLabel: "Refresh",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="refresh" size={24} color="#1b1464" />
                    ),
                    //headerShown: false,
                }}
            />
            <Tab.Screen
                name="Menu"
                component={Menu}
                options={{
                    tabBarLabel: "Menu",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ellipsis-vertical" size={24} color="#1b1464" />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}
export default function navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}



// function MyTabs() {
//     return (
//         <Tab.Navigator
//             initialRouteName="Home"
//             screenOptions={{
//                 tabBarActiveTintColor: "#1b1464",
//                 headerTintColor: "#1b1464", 
//             }}
//         >
//             <Tab.Screen 
//                 name="Home"
//                 component={MyStack}
//                 options={{
//                     tabBarLabel: "Settings",
//                     tabBarIcon: ({color,size}) => (
//                         <Ionicons name="settings-sharp" size={24} color="#1b1464" />
//                     ),
//                     headerShown: false,
//                 }}
//             />
//             <Tab.Screen 
//                 name="SET"
//                 component={MyStack}
//                 options={{
//                     tabBarLabel: "Refresh",
//                     tabBarIcon: ({color,size}) => (
//                         <Ionicons name="refresh" size={24} color="#1b1464" />
//                     ),
//                     headerShown: false,
//                 }}
//             />


//             <Tab.Screen 
//                 name="Menu" 
//                 component={Menu}
//                 options={{
//                     tabBarLabel: "Menu",
//                     tabBarIcon: ({color,size}) => (
//                         <Ionicons name="ellipsis-vertical" size={24} color="#1b1464"  />
//                     ),
//                     headerShown: false,
//                 }}
//             />
//         </Tab.Navigator>
//     );

// }









// export const Medidas = () =>{
//     return(
//         <NavigationContainer>
//         <navi.Navigator>
//             <navi.Screen
//                 name="Medidas"
//                 component={MedidasCompas}
//             />
//         </navi.Navigator>
//         </NavigationContainer>
//     )

// }
{/* <SafeAreaProvider>
    <NavigationContainer>
        <navi.Navigator>
            <navi.Screen
                name="Medidas"
                component={MedidasCompas}
            />
        </navi.Navigator>
    </NavigationContainer>

</SafeAreaProvider> */}
