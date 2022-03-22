import Card from '../Cards/cards'

const listProducts = () =>{
    return(
        <div className="container-cards">
            <Card title={'Cuota Simple'} dias={'1 a 3'} precio={4500}/>
            <Card title={'Cuota Completa'} dias={'Libre'} precio={5500}/>
            <Card title={'Clase Unica'} dias={'1'} precio={1500}/>
            <Card title={'Clase Individual'} dias={'1'} precio={2500}/>
        </div>
    )
}

export default listProducts;