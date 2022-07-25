import "./styles/Button.css"

export default function ContadorHooks(props) {
    return (
    <button className={props.style} onClick={props.event}>{props.content}</button>
    );
}