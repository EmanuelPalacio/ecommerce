import React, { useState } from "react";
import Button from "./Button";
import "./styles/Button.css";

export default function ItemCount({initial, stock , onAdd , className}) {
    const [count, setCount] = useState(initial);
    const add = () => (count < stock) && setCount(count + 1);
    const subtract = () => (count > initial) && setCount(count - 1);

    return (
    <div className={className}>
        <span>{count}</span>
        <Button content="-" className="btn" event={subtract}/>
        <Button content="+" className="btn" event={add}/>
        <Button content="Agregar" className="btn" event={() => onAdd(count)}/>
    </div>
    );
}