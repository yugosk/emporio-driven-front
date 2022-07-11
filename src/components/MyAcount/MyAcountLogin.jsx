import {Container, Registration, Box, Loginrender} from "./MyAcount"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from 'axios';
import { useState } from "react";
import UserContext from "../../contexts/UserContext";
import { ThreeDots } from  'react-loader-spinner';

export default function MyAcountLogin(){
    const {dados, setDados} = useContext(UserContext);
    const [loginemail, setloginEmail] =  useState();
    const [loginpassword, setloginPassword] =  useState();
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate();
   

    function Login(e){
        setLoading(true);
        e.preventDefault();
        const dadosLogin = {
            email: loginemail,
            password: loginpassword,
        }
         const promise = axios.post('https://emporio-driven.herokuapp.com/login',dadosLogin )
         promise.then((response) => {
            setDados(response.data);
            const serializedUser = JSON.stringify(dados);
            localStorage.setItem("user", serializedUser);
           navigate("/dadoscompra");
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
                 <Loginrender>
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
                    
                </Loginrender>
                <Link to={`/cadastro`}>
            <h4>Primeira vez? Cadastre-se!</h4>
		 </Link>
                <Registration>
                </Registration>
        </Container>
    )
}
