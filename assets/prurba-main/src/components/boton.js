import React from "react";
import B from './image/boton.avif'
import './style/boton.css';
import { Link } from "react-router-dom";

export default function Addb(props){
    return(
        <div className="container">
            <a href="/formulario">
            <img src={B} className="boton" />
            </a>
        </div>
        
    )
}
