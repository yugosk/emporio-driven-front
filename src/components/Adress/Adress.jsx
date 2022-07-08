import {Container, Login, Button} from "./Adress"
import { Link } from "react-router-dom"
export default function Adress(){
    return(
        <Container>
            <h4> 
                    <Link to={`/`} style={{ textDecoration: 'none' }}>Home/ </Link>
                    Endereço
                   </h4>
                 <Login>
                        <h4>Endereço de entrega</h4>
                        <h5>Nome</h5>
                        <input placeholder="" type="text"  />
                        <h5>Sobrenome</h5>
                        <input placeholder="" type="text"  />
                        <h5>CEP</h5>
                        <input placeholder="" type="text"  />
                        <h5>Logradouro</h5>
                        <input placeholder="" type="text"  />
                        <h5>Número</h5>
                        <input placeholder="" type="text"  />
                        <h5>Complemento</h5>
                        <input placeholder="" type="text"  />
                        <h5>Bairro</h5>
                        <input placeholder="" type="text"  />
                        <h5>Cidade</h5>
                        <input placeholder="" type="text"  />
                        <h5>Estado</h5>
                        <input placeholder="" type="text"  />
                        <Button>Acessar</Button>
              </Login>
        </Container>
    )
}
