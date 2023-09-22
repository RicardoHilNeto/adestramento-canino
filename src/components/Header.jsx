import Loginimg from '../assets/login.svg';
import Menubar from '../assets/menu.svg';
import './Header.css'; 
import{Link} from 'react-router-dom'

const Header = () => {

    const LoginBtn = () =>{
        console.log("Deu certo!")
    }

  return (
    <header>
        <img src={Menubar} alt="Menubar"/>
        <h1>Curso de Adestramentro</h1>
        <button onClick={LoginBtn}>
            <Link to="/login"><img src={Loginimg} alt="Login" /></Link>
        </button>
    </header>
  );
}

export default Header;
