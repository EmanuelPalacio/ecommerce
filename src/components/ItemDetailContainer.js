import { useState, useEffect } from "react";
import { data } from "../mock/mock";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer (){
    const [item, setItem] = useState([]);
    const id = 1
    const getOneProducts = async (id) => {
        const getData = await data
        setItem(getData.filter((item) => item.id === parseInt(id))[0])
        console.log(getData.filter((item) => item.id === parseInt(id))[0])
    };
    useEffect(()=>{
        getOneProducts(id);
    },[id])

    return(
        <ItemDetail item={item}/>
    )
}