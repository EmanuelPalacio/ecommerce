import Cart from "./Cart";
import Error404 from "./Error404";
import { useContext, useState } from "react";
import { CartContext } from "./context/cartContext";
import PayCart from "./PayCart";

export default function CartContainer () {
    const {productsInCart} = useContext(CartContext);
    const [purchaseId, setPurchaseId] = useState();
    const getPurchaseId  = (get) =>  {setPurchaseId(get)}  
        return(
            <main>
                {productsInCart === 0 && !purchaseId ?
                <Error404/> : !purchaseId ?
                <div className="cartContainer">
                    <Cart/>
                    <PayCart getPurchaseId={getPurchaseId}/>
                </div> 
                :
                <div className="purchaseId">
                    <div className="purchaseId__card">
                        <img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-veterinaria.appspot.com/o/iconos%2Fcompra-mascota.png?alt=media&token=4d6ec0b0-3490-4c06-a239-dfeaec48043a" alt="perro con la compra"/>
                        <div>
                            <p>Su compra se ah realizo con exito copie el numero de compra para poder consultar su pedido</p>
                            <p>el numero de su compra es:<span> {purchaseId}</span></p>
                        </div>
                    </div>
                </div>  
                }
            </main>
        )
    
}