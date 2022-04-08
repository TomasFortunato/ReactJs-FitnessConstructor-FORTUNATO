import  React, {useState, useEffect} from 'react'
import Card from '../Cards/cards'
import Item from '../Item/Item'
import ItemListDetail from '../ItemListDetail/ItemListDetail'

const ItemList = ({children}) =>{
    const mockProductos = [{
            title:'Cuota Simple',
            id: 1,
            dias:'1 a 3',
            precio: 4500 ,
            image: 'cuota-simple.jpg',
            stock: 1 
        },
        {
            title:'Cuota Completa',
            id: 2,
            dias:'libre',
            precio: 5500 ,
            image: 'cuota-completa.jpg',
            stock: 1 
        }]
    
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            return resolve(mockProductos)
    })
}
   useEffect( () => {
       getProducts().then( (productos) => {
           setProducts(productos)
       })
   }, [])
    

    return(
        <div className="container-cards">
            <h2> {children}</h2>
            {products.map( (producto) => {
               const {id} = producto

               return(
                    <Item data={producto} key={id}/>
                )
            })}
        </div>
    )
}


export default ItemList;