import React from "react";
import {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { data } from "../mock/mock";
import {useParams} from "react-router-dom"

const ItemListContainer = (props) => {
    const [listProducts, setListProducts]= useState([])
    const { category } = useParams();
    console.log(category);
    const getProducts = async () => {
        const getData = await data
        category ? setListProducts(getData.filter((product)=> product.category === category)) : 
        setListProducts(getData);
    };  
    useEffect(()=>{
        getProducts();
    }, [category]); //el array vacio hace que se ejecute una sola vez la llamada

    return (
        <main>
            <h1>{props.greeting}</h1>
            { listProducts.length == 0 ? <p>Cargando...</p>  : <ItemList listProducts={listProducts}/>}
        </main>
    )
}
export default ItemListContainer;