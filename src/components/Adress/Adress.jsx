import {Container, Login, Button} from "./Adress";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useContext } from "react";
import AdressContext from "../contexts/AdressContext";
import { ThreeDots } from  'react-loader-spinner';

export default function Adress(){
    const {dataadress, setDataAdress} = useContext(AdressContext);
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
    const[cardNumber, setcardNumber] =  useState();
    const [cardName, setCardName] =  useState();
    const [cardvality, setCardVality] =  useState();
    const[cardSecnumber, setCardSecnumber] =  useState();
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
            state,
            cardNumber,
            cardName, 
            cardvality,
            cardSecnumber
      }
      console.log(userData)
         const promise = axios.post('http://localhost:5000//adress',userData )
         promise.then((response) => {
            setDataAdress(response.data);
            const serializedUser = JSON.stringify(dataadress);
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
                        <h5>Numero Cartao</h5>
                        <input placeholder="" type="text" onChange={e => setcardNumber(e.target.value)}  value={cardNumber} disabled={Loading} />
                        <h5>Nome no cartão*</h5>
                        <input placeholder="" type="text"  onChange={e => setCardName(e.target.value)}  value={cardName} disabled={Loading} required/>
                        <h5>Validade do cartão*</h5>
                        <input placeholder="" type="text"  onChange={e => setCardVality(e.target.value)}  value={cardvality} disabled={Loading} required/>
                        <h5>codigo de segurança*</h5>
                        <input placeholder="" type="text"  onChange={e => setCardSecnumber(e.target.value)}  value={cardSecnumber} disabled={Loading} required/>
                        <button onClick={SendAdress}>{Loading ? 
                            (<ThreeDots color="#ffffff" height={25} width={316}/>) : 
                            ("Enviar")}
                        </button>
                        <h5>*dados obrigatórios</h5>
              </Login>
              
        </Container>
    )
}
