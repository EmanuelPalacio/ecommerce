import React from "react";
import ItemList from "./ItemList";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore/lite";

const ItemListContainer = (props) => {
    const [listProducts, setListProducts]= useState([]);
    const { category } = useParams();
    const db = getFirestore();
    const getProducts = async () => {
        const productsCol = collection(db , 'products');
        const  getDoc = category ? await getDocs(query(productsCol, where("category", "==", category))) : await getDocs(productsCol)
        const productsList = getDoc.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        // devuelve los productos que coincidan con la categoria sino hay categoria carga todos los productos
        return  setListProducts([...productsList]);
        }
    
    useEffect(()=>{
        getProducts();
        },[category])

    return (
        <main>
            { listProducts.length == 0 ? <p>Cargando...</p>  : <ItemList listProducts={listProducts}/>}
        </main>
    )
}
export default ItemListContainer;