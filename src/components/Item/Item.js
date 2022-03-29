export default function Item({data}) {
    const {title, dias, precio, image}= data

    return(
        <div className="card-item">
            <img src={`./${image}`} alt={image}/>
        
            <div  className='container-card-data'>
                <h2>{title}</h2>
                <p>Entrenamientos Semanales : <br></br>{dias}</p>
                <p>Precio : $ {precio}</p>
                <button>Suscribirse</button>
            </div>
        </div>
    )
}
