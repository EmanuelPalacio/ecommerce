import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import { CartContext } from "./context/cartContext";
import Button from "./Button"
import ItemCount from "./ItemCount";
import "./styles/itemDetail.css";

export default function ItemDetail({item}){
    const { addToCart, isInCart } = useContext(CartContext);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    const goCart = () => navigate("/cart")
    const getCounter = (quantityToAdd) => {
        setCount(quantityToAdd);
        addToCart(item, quantityToAdd)
    };
    return (
        <main className="itemDetail">
            <div className="itemDetail__container">
                <div className="itemDetail__box" >
                    <div>
                        <h3 className="itemDetail__title">{item.name}</h3>
                        <img className="itemDetail__img" src={item.img}/>
                    </div>
                </div>
                <div className="itemDetail__box">
                    <div>
                        <p className="itemDetail__description">{item.description}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, reprehenderit? Maxime explicabo hic ducimus dignissimos cumque officiis eaque animi delectus, suscipit commodi aut doloribus! Quae non commodi ea deleniti natus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, reprehenderit? Maxime explicabo hic ducimus dignissimos cumque officiis eaque animi delectus, suscipit commodi aut doloribus! Quae non commodi ea deleniti natus.</p>
                        <ItemCount className="itemDetail__count" stock={10} onAdd={getCounter}/>
                        {isInCart(item) && <Button content="Terminar compra" className="btn" event={goCart}/>}
                    </div>
                </div>
            </div>
        </main>
    )
}