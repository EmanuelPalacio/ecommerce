import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getFirestore, getDoc } from "firebase/firestore/lite";;

export default function ItemDetailContainer (){
    const [item, setItem] = useState([]);
    const { id } = useParams();
    const db = getFirestore();
    const productId = doc(db , 'products', id);
    const getOneProducts = async () => {
        const getItemId = await getDoc(productId);
        const product = getItemId.data();
        return setItem({id: getItemId.id,...product});
        } 
        

    useEffect(()=>{
        getOneProducts();
    },[id]); 

    return(
        <ItemDetail item={item}/>
    )
}