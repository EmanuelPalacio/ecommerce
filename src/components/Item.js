import React from "react";
import ItemCount from "./ItemCount";
import Button from "./Button"
import { Link } from "react-router-dom"

export default function Item ({product}) {
    return(
        <div className="card">
            <img src={product.img}/>
            <div className="card__count">
                <p>{product.name}</p>
                <p>${product.price}</p>
                <Link to={`/item/${product.id}`} >
                    <Button className="btn btn--link" content="ver mas"/>
                </Link>
            </div>
        </div>
    )

}