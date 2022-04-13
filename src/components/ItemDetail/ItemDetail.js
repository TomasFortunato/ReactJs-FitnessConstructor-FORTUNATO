import React, { createContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import  {CartContext}  from "../context/useContext"

export default function ItemDetail({data}) {
    const {title, dias, precio, image, detalle}= data
    const [add, setAdd]= useState(false)

    const onAdd = () => {
        setAdd(!add)
    }
    const {addItem} = useContext(CartContext)

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
                        <div><Link to="/cart">Finalizar Compra</Link></div>
                        :
                        <ItemCount item={item} stock={1} initial={0} addItem={addItem}/>
                }
            </div>
            
        </div>
    )
}
