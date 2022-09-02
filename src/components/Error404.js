import Button from "./Button";
import { useNavigate } from "react-router-dom";


export default function Error404 ({text}){
    const navigate = useNavigate();
    const backToHome = () => navigate("/");
    return(
        <div className="error404">
            <img src="https://firebasestorage.googleapis.com/v0/b/ecommerce-veterinaria.appspot.com/o/iconos%2Fpato-detective.svg?alt=media&token=579c63e3-6d74-4b72-9e4e-7e51e3efa073"/>
            <p>{text}</p>
            <Button content="Volver al inicio" className="btn" event={backToHome}/>
        </div>
    )
}