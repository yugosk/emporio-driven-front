import {Container, Login, Button} from "./Adress";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useContext } from "react";
import AdressContext from "../contexts/AdressContext";
import { ThreeDots } from  'react-loader-spinner';
export default function Adress(){
    const {dados, setDados} = useContext(AdressContext);
    const navigate = useNavigate() 
    const [name, setName] =  useState();
    const [surname, setSurname] =  useState();
    const [cpf, setCPF] =  useState();
    const [cep, setCep] =  useState();
    const [street, setStreet] =  useState();
    const [numberHome, setNumberHome] =  useState();
    const [complement, setComplement] =  useState();
    const [district, setDistrict] =  useState();
    const [city, setCity] =  useState();
    const [state, setState] =  useState();
    const [Loading, setLoading] = useState(false);
   

    function SendAdress(e){
        setLoading(true);
        e.preventDefault();
        const userData = {
            name,
            surname,
            cpf,
            cep,
            street,
            numberHome,
            complement,
            district,
            city,
            state
      }
      console.log(userData)
         const promise = axios.post('http://emporio-driven.herokuapp.com/login',userData )
         promise.then((response) => {
            setDados(response.data);
            const serializedUser = JSON.stringify(dados);
            localStorage.setItem("user", serializedUser);
           navigate("/");
          });
         promise.catch((e) => {
            alert("Dados incompletos, verifique preenchimento");
            setLoading(false);
          
          });
    }

    return(
        <Container>
            <h4> 
                    <Link to={`/`} style={{ textDecoration: 'none' }}>Home/ </Link>
                    Endereço
                   </h4>
                 <Login>
                        <h4>Endereço de entrega</h4>
                        <h5>Nome *</h5>
                        <input placeholder="" type="text" onChange={e => setName(e.target.value)}  value={name} disabled={Loading} required />
                        <h5>Sobrenome *</h5>
                        <input placeholder="" type="text" onChange={e => setSurname(e.target.value)}  value={surname} disabled={Loading} required/>
                        <h5>CPF*</h5>
                        <input placeholder="" type="text"  onChange={e => setCPF(e.target.value)}  value={cpf} disabled={Loading} required/>
                        <h5>CEP*</h5>
                        <input placeholder="" type="text" onChange={e => setCep(e.target.value)}  value={cep} disabled={Loading} required />
                        <h5>Logradouro*</h5>
                        <input placeholder="" type="text"  onChange={e => setStreet(e.target.value)}  value={street} disabled={Loading} required/>
                        <h5>Número*</h5>
                        <input placeholder="" type="text" onChange={e => setNumberHome(e.target.value)}  value={numberHome} disabled={Loading} required />
                        <h5>Complemento</h5>
                        <input placeholder="" type="text" onChange={e => setComplement(e.target.value)}  value={complement} disabled={Loading} />
                        <h5>Bairro*</h5>
                        <input placeholder="" type="text"  onChange={e => setDistrict(e.target.value)}  value={district} disabled={Loading} required/>
                        <h5>Cidade*</h5>
                        <input placeholder="" type="text"  onChange={e => setCity(e.target.value)}  value={city} disabled={Loading} required/>
                        <h5>Estado*</h5>
                        <input placeholder="" type="text" onChange={e => setState(e.target.value)}  value={state} disabled={Loading} required />
                        <button onClick={SendAdress}>{Loading ? 
                            (<ThreeDots color="#ffffff" height={25} width={316}/>) : 
                            ("Enviar")}
                        </button>
                        <h5>*dados obrigatórios</h5>
              </Login>
        </Container>
    )
}
