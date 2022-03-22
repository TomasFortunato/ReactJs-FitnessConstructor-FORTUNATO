import Button from '@mui/material/Button';

function card({title, dias, precio}) {

    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>Entrenamientos Semanales : <br></br>{dias}</p>
            <p>Precio : $ {precio}</p>
            <Button variant="contained"> Subscribirme </Button>
        </div>
    )
}

export default card