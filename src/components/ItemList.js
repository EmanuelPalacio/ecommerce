import React, {useState} from "react";
import Item from "./Item";
import "./styles/Item.css";

export default function ItemList ({listProducts}) {
        return (
            <div className="card_container">
                {listProducts.map((product)=> <Item key={product.id} product={product} className="card"/>)}
            </div>
        )
    }
