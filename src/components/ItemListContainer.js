import React from "react";
import {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { data } from "../mock/mock";

const ItemListContainer = (props) => {
    const [listProducts, setListProducts]= useState([])
    const[message, setMensaje] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        console.log('soy el useEffect')
        data
        .then((res)=> setListProducts(res))
        .catch(()=> setMensaje('hubo un error, intente mas tarde'))
        .finally(()=> setLoading(false))
    }, []) //el array vacio hace que se ejecute una sola vez la llamada

    return (
        <div>
            <h1>{props.greeting}</h1>
            {message && <p>{message}</p>}
            { loading ? <p>Cargando...</p>  : <ItemList listProducts={listProducts}/>}
        </div>
    )
}
export default ItemListContainer;