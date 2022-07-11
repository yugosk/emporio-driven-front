import {Container, Registration, Box, Loginrender} from "./MyAcount"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import { ThreeDots } from  'react-loader-spinner';

export default function MyAcountcadastro(){
    const [cadastroEmail, setcadastroEmail] =  useState();
    const [cadastroPassword, setCadastroPassword] =  useState();
    const [cadastroName, setCadastroName] = useState([]);
    const [password_confirmation, setpassword_confirmation] = useState([]);
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate();
 
    function singUp(event){
        event.preventDefault();
        setLoading(true);
        const body = {
            name: cadastroName,           
            email: cadastroEmail,
            password: cadastroPassword,
            password_confirmation: password_confirmation
        }
        console.log(body)
        const promise = axios.post('https://emporio-driven.herokuapp.com/cadastrar', body)
        promise.then(() => navigate("/login"))
        promise.catch((e) => {
            alert("Campos invalidos, verifique preenchimento.");
            setLoading(false);
            navigate("/login");
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
                        <h4>Cadastre-se</h4>
                        <h5>Nome de usuário*</h5>    
                        <input placeholder="" type="text"  onChange={e => setCadastroName(e.target.value)}  value={cadastroName} disabled={Loading} required />
                        <h5>E-mail *</h5>
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
                </Loginrender>
                <Link to={`/login`}>
             <h4>Já tem uma conta? Entre agora!</h4>
			</Link>
                <Registration>
                </Registration>
        </Container>
    )
}
