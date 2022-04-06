import  React, {useState, useEffect} from 'react'
import Clases from '../Clases/Clases';

const ClasesList = ({children}) =>{
    const mockClases = [{
            title:'Clase de Zumba',
            id: 1,
            dias:'Lunes a Viernes: de 8am a 9am',
            image: 'cuota-simple.jpg',
            detalle: 'Las clases de Zumba son una hora de una disciplina deportiva que se imparte en clases dirigidas en la que se realizan ejercicios aeróbicos al ritmo de música latina (merengue, samba, reggaetón, cumbia y salsa) con la finalidad de perder peso de forma divertida y mejorar el estado de ánimo de los deportistas.',
            stock: 1,
        },
        {
            title:'Clase de Muay Thai',
            id: 2,
            dias:'Lunes a Viernes: de 9am a 10am',
            image: 'cuota-completa.jpg',
            detalle: 'Las clases de Muay Thai, son muy completas, empezando de las bases hasta el nivel avanzado para defensa personal, salud, ganar buena postura, estiramiento. Dirigido a todas las personas que desean ampliar este arte marcial o comenzarlo desde cero. Se practica con prudencia, sin agitación, con pausas de respiración.',
            stock: 1 
        }]
        const [products, setProducts] = useState([])

        const getProducts = new Promise ((resolve, reject) => {
                setTimeout( () =>{
                    resolve(mockClases)
                }, 2000);
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
                    <Clases data={producto} key={id}/>
                )
            })}
        </div>
    )
}

export default ClasesList;