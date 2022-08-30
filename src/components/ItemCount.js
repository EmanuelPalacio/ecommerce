import React, { useState } from "react";
import Button from "./Button";

export default function ItemCount({initial, stock , onAdd , className}) {
    const [count, setCount] = useState(initial === undefined ? 0 : initial);
    const add = () => (count < stock) && setCount(count + 1);
    const subtract = () => (count > (initial === undefined ? 0 : initial)) && setCount(count - 1);

    return (
    <div className={className}>
        <Button content="-" className="btn" event={subtract}/>
        <span>{count}</span>
        <Button content="+" className="btn" event={add}/>
        <Button content="Agregar" className="btn" event={() => onAdd(count)}/>
    </div>
    );
}