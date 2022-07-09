import {Container, Login, Registration, Box, Button} from "./MyAcount"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from 'axios';
import { useState } from "react";
import UserContext from './contexts/UserContext';
import { ThreeDots } from  'react-loader-spinner';
export default function MyAcount(){
    const {dados, setDados} = useContext(UserContext);
    const [loginemail, setloginEmail] =  useState();
    const [loginpassword, setloginPassword] =  useState();
    const [cadastroEmail, setcadastroEmail] =  useState();
    const [cadastroPassword, setCadastroPassword] =  useState();
    const [cadastroName, setCadastroName] = useState([]);
    const [password_confirmation, setpassword_confirmation] = useState([]);
    const [Loading, setLoading] = useState(false);
    
    function Login(event){
        setLoading(true);
        event.preventDefault();
        const dadosLogin = {
            email: loginemail,
            password: loginpassword,
        }
         const promise = axios.post('http://emporio-driven.herokuapp.com/login',dadosLogin )
         promise.then((response) => {
            setDados(response.data);
            const serializedUser = JSON.stringify(dados);
            localStorage.setItem("user", serializedUser);
           navigate("/");
          });
         promise.catch((e) => {
            alert("Login ou senha não correspondem, tente novamente.");
            setLoading(false);
            setloginPassword("")
            setloginEmail("")
          });
    }
    function singUp(event){
        console.log("here")
        event.preventDefault();
        setLoading(true);
        const body = {
            name: cadastroName,           
            email: cadastroEmail,
            password: cadastroPassword,
            password_confirmation: password_confirmation
        }
        console.log(body)
        const promise = axios.post('http://emporio-driven.herokuapp.com/cadastrar', body)
        promise.then(() => navigate("/myAcount"))
        promise.catch((e) => {
            alert("Campos invalidos, verifique preenchimento.");
            setLoading(false);
          });
       
    }
    return(
        <Container>
                <h4> 
                    <Link to={`/`} style={{ textDecoration: 'none' }}>Home/ </Link>
                    Minha conta
                </h4>
                <h1>Minha conta</h1>
                 <Login>
                    <Box>
                        <h4>Entrar</h4>
                        <h5>E-mail *</h5>
                        <input placeholder="" type="email"  onChange={e => setloginEmail(e.target.value)}  value={loginemail} disabled={Loading} required />
                        <h5>Senha *</h5>
                        <input placeholder="" type="password" onChange={e => setloginPassword(e.target.value)}  value={loginpassword} disabled={Loading} required />
                        <button onClick={Login}>{Loading ? 
                            (<ThreeDots color="#ffffff" height={25} width={316}/>) : 
                            ("Acessar")}
                        </button>
                    </Box>
                    <Box>
                        <h4>Cadastre-se</h4>
                        <h5>Nome de usuário*</h5>
                        <input placeholder="" type="text"  onChange={e => setCadastroName(e.target.value)}  value={cadastroName} disabled={Loading} required />
                        <h5>Nome de usuário ou e-mail *</h5>
                        <input placeholder="" type="email" onChange={e => setcadastroEmail(e.target.value)}  value={cadastroEmail} disabled={Loading} required />
                        <h5>Senha *</h5>
                        <input placeholder="" type="password" onChange={e => setCadastroPassword(e.target.value)}  value={cadastroPassword} disabled={Loading} required />
                        <h5>Confirme sua senha *</h5>
                        <input placeholder="" type="password"  onChange={e => setpassword_confirmation(e.target.value)}  value={password_confirmation} disabled={Loading} required/>
                        <button onClick={singUp}>{Loading ? 
                            (<ThreeDots color="#ffffff" height={25} width={316}/>) : 
                            ("Cadastre-se")}
                        </button>
                    </Box>
                </Login>
                <Registration>
                </Registration>
        </Container>
    )
}
