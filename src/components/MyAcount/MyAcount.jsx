import {Container, Login, Registration, Box, Button} from "./MyAcount"
import { Link } from "react-router-dom"
export default function MyAcount(){
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
                        <input placeholder="" type="email"  />
                        <h5>Senha *</h5>
                        <input placeholder="" type="password"  />
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
