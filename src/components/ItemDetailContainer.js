import { useState, useEffect } from "react";
import { data } from "../mock/mock";

export default function ItemDetailContainer (){
    const [item, setItem] = useState([]);
    const getOneProducts = async (id) => {
        const getData = await data
        setItem(getData.filter((item) => item.id === parseInt(id))[0])
        console.log(data);
    };
    useEffect(()=>{
        getOneProducts(id);
    },[id])

    return(
        <div>
            <h3>{item.name}</h3>
        </div>
    )
}