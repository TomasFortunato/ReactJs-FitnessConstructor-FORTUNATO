import  React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemListDetail = ({children}) =>{
    const mockProductos = [{
            title:'Cuota Simple',
            id: 1,
            dias:'1 a 3',
            precio: 4500 ,
            image: 'cuota-simple.jpg',
            detalle: 'Este tipo de cuota te da la posibilidad de poder utilizar todas las maquinas de las instalaciones durante el tiempo que lo precises de 1 a 3 veces por semana como maximo.',
            stock: 1,
        },
        {
            title:'Cuota Completa',
            id: 2,
            dias:'libre',
            precio: 5500 ,
            image: 'cuota-completa.jpg',
            detalle: 'Este tipo de cuota te da la posibilidad de poder utilizar todas las maquinas de las instalaciones durante el tiempo que lo precises la cantidad de dias por semana que desees, sin un maximo.',
            stock: 1 
        }]
    
    const [products, setProducts] = useState([])

    const getProducts = new Promise ((resolve, reject) => {
            setTimeout( () =>{
                resolve(mockProductos)
            }, 1000);
    })

   useEffect( () => {
       getProducts.then( (productos) => {
           setProducts(productos)
       })
   }, [])
    

    return(
        <div className="container-cards">
            <h2> {children}</h2>
            {products.map( (producto) => {
               const {id} = producto

               return(
                    <ItemDetail data={producto} key={id}/>
                )
            })}
        </div>
    )
}

export default ItemListDetail;