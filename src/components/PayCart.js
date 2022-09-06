import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { useContext, useState } from "react";
import Button from "./Button"
import { CartContext } from "./context/cartContext";


export default function PayCart ({getPurchaseId}){
    const {cart , totalPrice, clearCart} = useContext(CartContext);
    const [buyer, setBuyer] = useState({});
    const [validation, setValidation] = useState(false);
    const db = getFirestore();
    /*const mercadoPago = async () => {
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
            }); */ // No funciona desde un localHost o una pagina http}
    
    const buyerData = (e) => { 
        e.target.name !== "emailValidation" && setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })

        e.target.name === "emailValidation" && setValidation(e.target.value === buyer.email)
    }
    const sendForm = async (e)=>{
        e.preventDefault();
        if(validation){

            const data = await addDoc(collection(db, "buyers"),{
                ...buyer,
                item: cart,
                total: `$${totalPrice}`
            })
            getPurchaseId(`${data.id}`)
            clearCart();
            /* mercadoPago(); */
        }else console.log("No coinciden los email")
    }
    return(
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
                <label className="form__item form__item--email">
                    <input className="input" name="emailValidation"  type="email"  placeholder="email" onChange={buyerData} required/>
                </label>
                <Button type="submit" content="comprar" className="btn"/>
            </form>
        </div>
    )
}