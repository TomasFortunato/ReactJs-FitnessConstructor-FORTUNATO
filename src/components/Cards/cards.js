import React,{ useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function Card({data}) {
    const {title, dias, precio, stock}= data
    const [ count, setCount ] = useState(0)

    console.log("estado contador: ", count)

    const addStock = () => {
        setCount(count + 1)
    }

    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>Entrenamientos Semanales : <br></br>{dias}</p>
            <p>Precio : $ {precio}</p>
            <ItemCount stock={stock}/>
        </div>
    )
}
