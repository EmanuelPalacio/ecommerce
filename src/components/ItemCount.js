import React, { useState } from "react";
import Button from "./Button";
import "./styles/card.css"

export default function ItemCount(props) {
    const [contador, setContador] = useState(0);
    const sumar = () => contador < parseInt(props.stock) && setContador(contador + 1);
    const restar = () => contador > 0 && setContador(contador - 1);

    return (
    <div className="card">
        <h2>Hooks - useState - contador</h2>
        <span>{isNaN(props.initial) ? contador : contador + parseInt(props.initial) }</span>
        <Button content="-" style="btn" event={restar}/>
        <Button content="+" style="btn" event={sumar}/>
    </div>
    );
}