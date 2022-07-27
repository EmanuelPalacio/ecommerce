import React, { useState } from "react";
import Button from "./Button";
import "./styles/card.css";
import "./styles/Button.css";

export default function ItemCount(props) {
    const [contador, setContador] = useState(props.initial);
    const add = () => (contador < props.stock) && setContador(contador + 1);
    const subtract = () => (contador > props.initial) && setContador(contador - 1);
    const onAdd = () => console.log(`tienes ${contador} unidades del producto seleccionado`)

    return (
    <div className="card">
        <span>{contador}</span>
        <Button content="-" className="btn" event={subtract}/>
        <Button content="+" className="btn" event={add}/>
        <Button content="Agregar" className="btn" event={onAdd}/>
    </div>
    );
}