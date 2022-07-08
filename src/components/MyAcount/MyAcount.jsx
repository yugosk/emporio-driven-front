import {Container, Login, Registration, Box, Button} from "./MyAcount"
import { Link } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from 'axios';
import { useState } from "react";
import UserContext from './contexts/UserContext';
import { ThreeDots } from  'react-loader-spinner';
export default function MyAcount(){
    const [loginemail, setloginEmail] =  useState();
    const {dados, setDados} = useContext(UserContext);
    const [loginpassword, setloginPassword] =  useState();

    const [Loading, setLoading] = useState(false);

    function Login(event){
        setLoading(true);
        event.preventDefault();
        const dadosLogin = {
            email: loginemail,
            password: loginpassword,
        }
         const promise = axios.post('https://back-project13-mywallet.herokuapp.com/login',dadosLogin )
         promise.then((response) => {
           
           setDados(response.data);
           
           const serializedUser = JSON.stringify(dados);


           localStorage.setItem("user", serializedUser);
           navigate("/Registros");
          });
             
          promise.catch((e) => {
            alert("Login ou senha não correspondem, tente novamente.");
            setLoading(false);
            setloginPassword("")
            setloginEmail("")
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
                        <h5>Nome de usuário ou e-mail *</h5>
                        <input placeholder="" type="email"  onChange={e => setloginEmail(e.target.value)}  value={loginemail} disabled={Loading} required />
                        <h5>Senha *</h5>
                        <input placeholder="" type="password" onChange={e => setloginPassword(e.target.value)}  value={loginpassword} disabled={Loading} required />
                        <Button>Acessar</Button>
                    </Box>
                    <Box>
                        <h4>Cadastre-se</h4>
                        <h5>Nome de usuário*</h5>
                        <input placeholder="" type="text"  />
                        <h5>Nome de usuário ou e-mail *</h5>
                        <input placeholder="" type="email"  />
                        <h5>Senha *</h5>
                        <input placeholder="" type="password"  />
                        <h5>Confirme sua senha *</h5>
                        <input placeholder="" type="password"  />
                        <Button>Acessar</Button>
                    </Box>
                </Login>
                <Registration>
                </Registration>
        </Container>
    )
}
