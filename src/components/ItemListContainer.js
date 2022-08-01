import React from "react";
import {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { data } from "../mock/mock";

const ItemListContainer = (props) => {
    const [listProducts, setListProducts]= useState([])
    const getProducts = async () => {
        const getData = await data
        setListProducts(getData)
    }

    useEffect(()=>{
        getProducts();
    }, []) //el array vacio hace que se ejecute una sola vez la llamada

    return (
        <div>
            <h1>{props.greeting}</h1>
            { listProducts.length == 0 ? <p>Cargando...</p>  : <ItemList listProducts={listProducts}/>}
        </div>
    )
}
export default ItemListContainer;