import './HeaderLogin.css'
import UserImage from '../assets/user-outline.svg';

const HeaderLogin = () => {
    return(
        <>
        <div className="login">
            <h1>Login</h1>
            <div className="input-container">
        <       input type="email" placeholder="Digite seu email..." />
                    <img className="userimg" src={UserImage} alt="" />
            </div>
    <input type="password" placeholder="Digite sua senha" />
    </div>
    </>
    )
}
export default HeaderLogin