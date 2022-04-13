import React,{useState} from 'react'
const ItemCount = ({item, stock, initial, addItem}) => {
    const [count, setCount] = useState(0)
    

    const addItem = () =>{
        if(count < stock){
            setCount(count +1)
    }
} 

const onRemove = () =>{
    if(count > 0 ){
        setCount(count -1)
}
} 

    return(
        <>
        <div>
        <button onClick={onRemove}> - </button>
            <p>{count}</p>
        <button onClick={addItem}>+</button>
        </div>
        {
            count > 0 ?
            <button onClick={() => addItem(item, count)}>
                Añadir al Carrito
            </button>
            :
            <div>
                Añadir al Carrito
            </div>
        }
        </>
    )
}

export default ItemCount ;