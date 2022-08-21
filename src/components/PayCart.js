import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { useContext, useState } from "react";
import Button from "./Button"
import { CartContext } from "./context/cartContext";


export default function PayCart (){
    const {cart} = useContext(CartContext);
    const [buyer, setBuyer] = useState({});
    const [purchaseId, setPurchaseId] = useState("");
    const db = getFirestore();
    const mercadoPago = async () => {
        const productosToMap = cart.map(Element => {
                let newElement = 
                    {
                    title: Element.name,
                    description: "...",
                    picture_url: Element.img,
                    category_id: Element.id,
                    quantity: Element.quantity,
                    currency_id: "ARS",
                    unit_price: Element.price
                    }
                return newElement;
                }
            )
            let response = await fetch("https://api.mercadopago.com/checkout/preferences", {
                method: "POST",
                headers: {
                    Authorization: "Bearer TEST-1420488536071000-081618-db838e9fb662c6944f5ea9e1c8639c09-386559401"
                },
                body: JSON.stringify({
                    items: productosToMap,
                    back_urls: {
                        success: "http://localhost:3000/Cart",
                    },
                    auto_return: "approved"
                })
            });
            let data = await response.json();
            window.open(data.init_point, "_blank");
            console.log(data);
            console.log(data.id);
            
            /* fetch(`https://api.mercadopago.com/v1/payments/${data.id}`, {
                headers: {
                'Authorization': 'Bearer TEST-1420488536071000-081618-db838e9fb662c6944f5ea9e1c8639c09-386559401'
                }   
            }); */ // No funciona desde un localHost o una pagina http
}
    const buyerData = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }
    const sendForm = async (e)=>{
        e.preventDefault();
        const data = await addDoc(collection(db, "buyers"),{
            buyer,
            item: cart
        })
        setPurchaseId(`${data.id}`)
        /* mercadoPago(); */
    }
    return(
        <>
        {!purchaseId ?
        <div className="cartContainer__pay">
            <form name="formulario" method="post" onSubmit={sendForm}>
                <label className="form__item form__item--Nombre">
                    <input className="input" name="Nombre" type="text"  placeholder="Nombre" onChange={buyerData} required/>
                </label>
                <label className="form__item form__item--Apellido">
                    <input className="input" name="Apellido" type="text" placeholder="Apellido" onChange={buyerData} required/>
                </label>
                <label className="form__item form__item--email">
                    <input className="input" name="email"  type="email"  placeholder="email"onChange={buyerData} required/>
                </label>
                <Button type="submit" content="comprar" className="btn" />
            </form>
        </div>
        :
        <div>
            <h1>el numero de su compra es:{purchaseId}</h1>
        </div>    
        }
        </>
    )
}