import React, { useState } from "react";
import Button from "./Button";
import "./styles/card.css"

export default function ItemCount(props) {
    const [contador, setContador] = useState(parseInt(props.initial));
    const sumar = () => contador < parseInt(props.stock) && setContador(contador + 1);
    const restar = () => contador > parseInt(props.initial) && setContador(contador - 1);

    return (
    <div className="card">
        <h2>Hooks - useState - contador</h2>
        <span>{contador}</span>
        <Button content="-" style="btn" event={restar}/>
        <Button content="+" style="btn" event={sumar}/>
    </div>
    );
}