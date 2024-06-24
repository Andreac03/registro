import React from "react";
import "./style/saludo.css"

function Hola(props){
return(
    <div>
        <h1 className="saludo">Hola {props.username}</h1>
    </div>
)
}
export default Hola