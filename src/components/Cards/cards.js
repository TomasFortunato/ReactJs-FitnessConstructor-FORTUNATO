import React,{ useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './cards.css'
export default function Card({data}) {
    const navigate = useNavigate();
    const {title, dias, precio, image, id}= data
    const [ count, setCount ] = useState(0)
    const [ countTest, setCountTest ] = useState (0)

    console.log("estado contador: ", count)

    const addStock = () => {
        setCount(count + 1)
    }

    const removeStock = () => {
        setCountTest(countTest - 1)
    }
    const changePage = () => {
        navigate (`./productos/${id}`)
    }
    const addToCart = (e)=> {
        e.stopPropagation()
        console.log("agrego al carrito")
    }
    return(
        <div className="card-item" onClick={changePage}>
            <img src={`./${image}`} alt={image}/>
            <div  className='container-card-data'>
                <h2>{title}</h2>
                <p>Entrenamientos Semanales : <br></br>{dias}</p>
                <p>Precio : $ {precio}</p>
                <button onClick={addToCart}>Suscribirse</button>
            </div>
        </div>
    )
}
