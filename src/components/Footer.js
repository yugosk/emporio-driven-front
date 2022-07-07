import styled from "styled-components";
import Logo from "./Logo";
import { Link } from "react-router-dom";


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

const Container = styled.div`
    
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    overflow-y: scroll;
    scrollbar-width: none;
    
   
    h1{
        font-size: 15px;
        border-bottom: 1px solid #D3D3D3;
    }
    h2{
        font-size: 10px;
        color:#D3D3D3;
    }
    Link{
        text-decoration: none;
    }
`
const Institucional = styled.div`

`


const Acount = styled.div`


`