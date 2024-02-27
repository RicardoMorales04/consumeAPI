import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import {URL_API, URL_RENDER} from "../config/rutas"

export function Borrar(){
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        async function borrarUsuario(){
            //const res = await axios.get(URL_API +"borrarUsuario/"+ params.id);
            const res = await axios.get(URL_RENDER +"borrarUsuario/"+ params.id);
            console.log(res);
            navigate("/");
        }
        borrarUsuario();
    },[params.id]);
    return(
        <h1>Borrar Usuario</h1>
    )
}