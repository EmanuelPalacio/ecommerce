import React from "react";
import ItemCount from "./ItemCount";

export default function Item ({product}) {
    return(
        <div className="card">
            <img src={product.imagen} />
            <div className="card__count">
            <p>{product.tittle}</p>
            <p>${product.price}</p>
            <ItemCount initial={product.unidad} stock={20} name={product.tittle}/>
            </div>
        </div>
    )

}