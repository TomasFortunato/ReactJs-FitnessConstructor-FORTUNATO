import React,{ useState} from 'react'



export default function Card({data}) {
    const {title, dias, precio}= data
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
            <button onClick={addStock}> Subscribirme </button>
        </div>
    )
}
