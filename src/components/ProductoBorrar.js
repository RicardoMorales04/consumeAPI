import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { URL_API_PRODUCTO, URL_RENDER} from "../config/rutas"

export function BorrarP(){
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        async function borrarProducto(){
            const res = await axios.get(URL_RENDER +"borrarP/"+ params.id);
            //const res = await axios.get(URL_API_PRODUCTO +"borrarP/"+ params.id);
            console.log(res);
            navigate("/Producto");
        }
        borrarProducto();
    },[params.id]);
    return(
        <h1>Borrar Producto</h1>
    )
}