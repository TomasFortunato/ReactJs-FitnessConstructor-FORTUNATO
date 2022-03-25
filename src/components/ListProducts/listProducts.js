import Card from '../Cards/cards'

const listProducts = ({children}) =>{
    let dataProduct = {
        title:'Cuota Simple',
        dias:'1 a 3',
        precio: 4500
    }

    return(
        <div className="container-cards">
            <h2> {children}</h2>
            <Card data={dataProduct}/>
        </div>
    )
}

export default listProducts;