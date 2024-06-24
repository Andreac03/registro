import React from "react";
import Card from "../Card";
import Hola from "../Saludo";
import imagenbob from "../image/Bob.webp"
import imagencal from "../image/Calamardo.webp"
import Iteracion from "../Itinerante";
import Addb from "../boton";

export default class Maestro extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[{
                "id":1,
                "nombre":"Bob",
                "descripcion":" se caracteriza por su optimismo y actitud infantil.",
                "img":imagenbob,
                "color":"#377D22"
            },
            {
                "id":2,
                "nombre":"Calamardo",
                "descripcion":"El personaje es retratado como de mal genio, impaciente, arrogante, atrevido, introvertido, condescendiente, amargado y misántropo, y desprecia las constantes travesuras disruptivas de sus dos vecinos.",
                "img":imagencal,
                "color":"red"
            }
        ]
        }

    }
    render(){
        return(
        <div>
            <Hola
                username="Oswaldo"
            />
            <Iteracion
                chao={this.state.data}
            />
            <Addb/>
        </div>
        )
    }
}