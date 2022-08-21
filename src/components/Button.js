export default function ContadorHooks({className, event , content , type}) {
    return (
    <button type={type}  className={className} onClick={event}>{content}</button>
    );
}