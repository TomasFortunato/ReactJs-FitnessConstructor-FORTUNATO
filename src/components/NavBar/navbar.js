import './navbar.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
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
          <li><Button variant="contained">
            <Link to={'/'}>Home</Link>
            </Button></li>
          <li><Button variant='contained'>
            <Link to={'/clases'}>Clases</Link>
            </Button></li>
          <li><Button variant='contained'>
            <Link to={'/staff'}>Staff</Link>
            </Button></li>
          <li><Button variant='contained'>
           <Link to={'/contactos'}>Contactos</Link>
            </Button></li>
          <CartWidget/>
        </ul>
      </header>
    )
}

export default NavBar;