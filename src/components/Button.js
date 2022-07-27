export default function ContadorHooks(props) {
    return (
    <button className={props.className} onClick={props.event}>{props.content}</button>
    );
}