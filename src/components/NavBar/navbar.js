import Button from '@mui/material/Button';
import CartWidget from '../Carrito/CartWidget';
function NavBar(props) {
    console.log(props)
    
    return(
        <header className='main-header'>
        <div className='container-logo'>
        <img 
        src= "LOGO-C.png"
        className="App-logo" 
        />
        </div>
        <ul className='navbar'>
          <li><Button variant="contained">Home</Button></li>
          <li><Button variant='contained'>Productos</Button></li>
          <li><Button variant='contained'>Nosotros</Button></li>
          <li><Button variant='contained'>Contactos</Button></li>
          <CartWidget/>
        </ul>
      </header>
    )
}

export default NavBar;