import pato from "../images/pato-detective.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
export default function Error404 (){
    const navigate = useNavigate();
    const backToHome = () => navigate("/");
    return(
        <div className="error404">
            <img src={pato}/>
            <Button content="Volver al inicio" className="btn" event={backToHome}/>
        </div>
    )
}