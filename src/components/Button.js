export default function ContadorHooks({className, event , content}) {
    return (
    <button className={className} onClick={event}>{content}</button>
    );
}