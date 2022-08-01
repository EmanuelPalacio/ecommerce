import ItemCount from "./ItemCount";

export default function ItemDetail({item}){
    return (
        <div className="flex bg-danger">
            <h3>ItemDetail</h3>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img src={`${item.imagen}`}></img>

            <ItemCount stock={5} initial={1} />
        </div>
    )
}