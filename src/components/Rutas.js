import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Error } from "./Error";
import { Inicio } from "./Inicio";
import { Menu } from "./Menu";
import { Producto } from "./Producto";
import { Nuevo } from "./Nuevo";
import { EditarUsuario } from "./Editar";
import { Borrar } from "./Borrar";
import { ProductoNuevo } from "./ProductoNuevo";
import { EditarProducto } from "./ProductoEditar";
import { BorrarP } from "./ProductoBorrar";

export function Rutas(){
    return(
        <>
        <Menu />
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error />}></Route>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/Producto" element={<Producto />}></Route>
                <Route path="/Nuevo" element={<Nuevo />}> </Route>
                <Route path="/editar/:id" element={<EditarUsuario />}> </Route>
                <Route path="/borrar/:id" element={<Borrar />}> </Route>
                <Route path="/ProductoNuevo" element={<ProductoNuevo />}> </Route>
                <Route path="/editarP/:id" element={<EditarProducto />}> </Route>
                <Route path="/borrarP/:id" element={<BorrarP />}> </Route>
            </Routes>
        </BrowserRouter>        
        </>
    );
}