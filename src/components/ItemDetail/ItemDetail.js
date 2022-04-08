import React, { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

export default function ItemDetail({data}) {
    const {title, dias, precio, image, detalle}= data
    const [add, setAdd]= useState(false)

    const onAdd = () => {
        setAdd(!add)
    }

    return(
        <div className="card-item">
            <img src={`./${image}`} alt={image}/>
        
            <div  className='container-card-data'>
                <h2>{title}</h2>
                <p>Entrenamientos Semanales : <br></br>{dias}</p>
                <p>Precio : $ {precio}</p>
                <p>Detalle :  {detalle}</p>
                <button>Suscribirse</button>
            </div>
            <div>
                {
                    add ? 
                        <div>añadido!</div>
                        :
                        <ItemCount stock={1} initial={0} onAdd={onAdd} />
                }
            </div>
            <Link to="/cart">Finalizar Compra</Link>
        </div>
    )
}
