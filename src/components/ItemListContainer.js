import React from "react";
import ItemList from "./ItemList";
import Error404 from "./Error404";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore/lite";

const ItemListContainer = (props) => {
    const [listProducts, setListProducts]= useState([]);
    const [verifyCategory, setVerifyCategory]= useState(false);
    const { category } = useParams();
    const db = getFirestore();
    const getProducts = async () => {
        const productsCol = collection(db , 'products');
        const  getDoc = category ? await getDocs(query(productsCol, where("category", "==", category))) : 
        await getDocs(productsCol)
        const productsList = getDoc.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        // devuelve los productos que coincidan con la categoria sino hay categoria carga todos los productos
        console.log(getDoc.docs.length === 0)
        return  (
            setVerifyCategory(getDoc.docs.length === 0),
            setListProducts([...productsList])
                );
        }
    
    useEffect(()=>{
        getProducts();
        },[category])

    return (
        <main>
            {verifyCategory ? <Error404 text="Ups, no encontramos lo que esta buscando"/> :
            listProducts.length === 0  ? <p>Cargando...</p>  : <ItemList listProducts={listProducts}/>}
        </main>
    )
}
export default ItemListContainer;