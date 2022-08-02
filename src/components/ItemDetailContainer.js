import { useState, useEffect } from "react";
import { data } from "../mock/mock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer (){
    const [item, setItem] = useState([]);
    const { id } = useParams();
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