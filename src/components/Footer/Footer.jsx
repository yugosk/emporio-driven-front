import Logo from "../Logo.jsx";
import { Link } from "react-router-dom";
import {Container, Institucional, Acount} from "./Footer"
export default function Footer(){
     return(
        <Container>
            <Institucional>
                <h1>Institucional</h1> 
                <Link to={`/Us`} style={{ textDecoration: 'none' }}><h2>Quem somos</h2> </Link>
                <Link to={`/Us`} style={{ textDecoration: 'none' }}><h2>Política de venda</h2> </Link>
                <Link to={`/Us`} style={{ textDecoration: 'none' }}><h2>Política de pagamento</h2> </Link>
                <Link to={`/Us`} style={{ textDecoration: 'none' }}><h2>Política de entrega</h2> </Link>
                <Link to={`/Us`} style={{ textDecoration: 'none' }}><h2>Política de troca</h2> </Link>
            </Institucional>
            <Acount>
                <h1>Minha conta</h1> 
                <Link to={`/MyAcount`} style={{ textDecoration: 'none' }}><h2>Minha Conta</h2> </Link>
                <Link to={`/MyAcount`} style={{ textDecoration: 'none' }}><h2>Pedidos</h2> </Link>
                <Link to={`/MyAcount`} style={{ textDecoration: 'none' }}><h2>Carrinho</h2> </Link>
                <Link to={`/MyAcount`} style={{ textDecoration: 'none' }}><h2>Finalizar compra</h2> </Link>
           </Acount>
            <Logo />
     </Container>
    )
}
