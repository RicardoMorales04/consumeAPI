import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { URL_API_PRODUCTO, URL_IMAGES } from "../config/rutas";

export function EditarProducto() {
    const params = useParams();
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [nombreP, setNombreP] = useState("");
    const [numSerie, setNumSerie] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [nombreFoto, setNombreFoto] = useState("");
    const [fotoVieja, setFotoVieja] = useState("");
    const [foto, setFoto] = useState(null);
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        async function buscarPorID() {
                const res = await axios.get(URL_API_PRODUCTO+"editarP/" + params.id);
                setId(res.data.id);
                setNombreP(res.data.nombreP);
                setNumSerie(res.data.numSerie);
                setCantidad(res.data.categoria);
                setFotoVieja(res.data.foto);
                setNombreFoto(URL_IMAGES +"/"+ res.data.foto); 
        }
        buscarPorID();
    }, [params.id]);

    async function editarProductos(e) {
        e.preventDefault();
            const formData = new FormData();
            formData.append("id", id);
            formData.append("nombreP", nombreP);
            formData.append("numSerie", numSerie);
            formData.append("cantidad", cantidad);
            formData.append("fotoVieja", fotoVieja);
            formData.append("foto", foto);
            const res = await axios.post(URL_API_PRODUCTO+"editarP", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
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
                navigate('/Producto');
            },3000);
    }

    return (
        <div className="container mt-5">
            <div className="text-danger"><h3>{mensaje}</h3></div>
            <form onSubmit={editarProductos}>
                <div className="card">
                    <div className="card-header">
                        <h1>Editar Producto</h1>
                    </div>
                    <div className="card-body">
                        <input className="form-control mb-3" type="text" placeholder="Id" name="id" id="id" value={id} readOnly />
                        <input type="hidden" name="fotoVieja" id="fotoVieja" value={fotoVieja} readOnly />
                        <input className="form-control mb-3" type="text" name="nombreP" id="nombreP" placeholder="Nombre" value={nombreP} onChange={(e) => setNombreP(e.target.value)} />
                        <textarea className="form-control mb-3" name="numSerie" id="numSerie" placeholder="Numero de Serie" value={numSerie} onChange={(e) => setNumSerie(e.target.value)} />
                        <input className="form-control mb-3" type="text" name="cantidad" id="cantidad" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                        <div>
                            <img src={nombreFoto} width={100} alt="foto de producto" />
                        </div>
                        <input className="form-control mb-3" type="file" name="foto" id="foto" onChange={(e) => setFoto(e.target.files[0])} />
                    </div>
                    <div className="card-footer">
                        <button className="form-control btn btn-primary" type="submit">Guardar Producto</button>
                    </div>
                </div>
            </form>
        </div>
    );
}