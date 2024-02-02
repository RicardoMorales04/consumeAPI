import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export function Producto(){
    const [dataProductos, setDataProductos]=useState([]);
    useEffect(()=>{
        axios.get("https://firebase-lgb1.onrender.com/api/mostrarProductos")
        .then((response)=>{
            console.log(response);
            setDataProductos(response.data);
        })
        .catch((err)=>{
            console.log("Error al recuperar de Api");
        });
    },[]);
    const listaProductos=dataProductos.map((producto, id)=>{
        var editar="/EditarProducto"+producto.id;
        var borrar="/BorrarProducto"+producto.id;
        var foto = "https://firebase-lgb1.onrender.com/images/"+producto.foto;
        return(
            <tr key={id} className="align-middle" > 
                <td>{producto.id}</td>
                <td>{producto.nombreP}</td>
                <td>{producto.numSerie}</td>
                <td>{producto.cantidad}</td>
                <td><img src={foto} width="100px"></img></td>
                <td>
                    <Link to={editar}>Editar</Link>
                    <Link to={borrar}>Borrar</Link>
                </td>
            </tr>
        );
    });
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <td>Numero de Serie</td>
                    <td>Cantidad</td>
                    <td>Cantidad</td>
                    <td>Foto</td>
                </tr>
            </thead>
            <tbody>
                {listaProductos}
            </tbody>
        </table>
    );
}