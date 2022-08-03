import ItemCount from "./ItemCount";
import "./styles/itemDetail.css"

export default function ItemDetail({item}){
    return (
        <main className="itemDetail">
            <div className="itemDetail__container">
                <div className="itemDetail__box" >
                    <div>
                        <h3 className="itemDetail__title">{item.title}</h3>
                        <img className="itemDetail__img" src={`${item.imagen}`}/>
                    </div>
                </div>
                <div className="itemDetail__box">
                    <div>
                        <p className="itemDetail__description">{item.description}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, reprehenderit? Maxime explicabo hic ducimus dignissimos cumque officiis eaque animi delectus, suscipit commodi aut doloribus! Quae non commodi ea deleniti natus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, reprehenderit? Maxime explicabo hic ducimus dignissimos cumque officiis eaque animi delectus, suscipit commodi aut doloribus! Quae non commodi ea deleniti natus.</p>
                        <ItemCount className="itemDetail__count" stock={5} initial={1} />
                    </div>
                </div>
            </div>
        </main>
    )
}