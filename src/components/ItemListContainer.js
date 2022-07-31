import React from "react";
import {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { data } from "../mock/mock";

const ItemListContainer = (props) => {
    const [listProducts, setListProducts]= useState([])
    const getProducts = async () => {
        const getData = await data
        setListProducts(getData)
        console.log(data)
    }

    useEffect(()=>{
        getProducts();
    }, []) //el array vacio hace que se ejecute una sola vez la llamada

    return (
        <div>
            <h1>{props.greeting}</h1>
            { listProducts !== [] && <ItemList listProducts={listProducts}/>}
        </div>
    )
}
export default ItemListContainer;