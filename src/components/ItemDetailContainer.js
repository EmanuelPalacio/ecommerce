import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getFirestore, getDoc} from "firebase/firestore/lite";
import Error404 from "./Error404"

export default function ItemDetailContainer (){
    const [item, setItem] = useState([]);
    const { id } = useParams();
    const db = getFirestore();
    const productId = doc(db , 'products', id);
    const getOneProducts = async () => {
        const getItemId = await getDoc(productId);
        const product = getItemId.data();
        return product === undefined ? setItem(false) : setItem({id: getItemId.id,...product});
        } 

    useEffect(()=>{
        getOneProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]); 

    return(
        <>
        {item ? <ItemDetail item={item}/> : <Error404 text="No tenemos el producto que esta buscando"/> }
        </>
    )
}