import axios from "axios";
import { useState } from "react";
import { URL_API_PRODUCTO } from "../config/rutas";
import { useNavigate } from "react-router-dom";

export function ProductoNuevo(){
    const navigate = useNavigate();

    const [nombreP,setNombreP]=useState("");
    const [numSerie,setNumSerie]=useState("");
    const [cantidad,setCantidad]=useState("");
    const [foto,setFoto]=useState(null);
    const [mensaje,setMensaje]=useState("texto");
    
    async function guardarDatos(e){
        e.preventDefault();
        console.log("Hola");

        const formData = new FormData();
        formData.append("nombreP", nombreP);
        formData.append("numSerie", numSerie);
        formData.append("cantidad", cantidad);
        formData.append("foto", foto);
        
        const res = await axios.post(URL_API_PRODUCTO +"nuevoProducto", formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });
        console.log(res);
        setNombreP("");
        setNumSerie("");
        setCantidad("");
        setFoto(null);
        setMensaje(res.data);
        setTimeout(()=>{
        setMensaje("");
        navigate("/Producto");
        },3000);
    }
    return (
        <div className="container mt-5">
            <div className="text-danger"><h4>{mensaje}</h4></div>
            <form onSubmit={guardarDatos}>
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo Producto</h1>
                    </div>
                    <div className="card-body">
                        <input className="form-control mb-3" type="text" placeholder="Producto" name="nombreP" id="nombreP" value={nombreP} onChange={(e)=>setNombreP(e.target.value)} autoFocus />
                        <input className="form-control mb-3" type="text" placeholder="Numero de Serie" name="numSerie" id="numSerie" value={numSerie} onChange={(e)=>setNumSerie(e.target.value)}/>
                        <input className="form-control mb-3" type="text" placeholder="Cantidad" name="cantidad" id="cantidad" value={cantidad} onChange={(e)=>setCantidad(e.target.value)}/>
                        <input className="form-control mb-3" type="file" placeholder="Foto" name="foto" id="foto" onChange={(e)=>setFoto(e.target.files[0])}/>
                    </div>
                    <div className="card-footer">
                        <button className="form-control btn btn-primary" type="submit">Guardar Producto</button>
                    </div>
                </div>
            </form>
        </div>
    );
}