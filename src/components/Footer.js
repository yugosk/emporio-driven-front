import styled from "styled-components";
import Logo from "./Logo";

export default function Footer(){
 
    return(
        <Container>
            <Institucional>
                <h1>Institucional</h1> 
                <h2>Nossa Loja</h2> 
                <h2>Política de venda</h2> 
                <h2>Política de pagamento</h2> 
                <h2>Política de entrega</h2> 
                <h2>Política de troca</h2> 
            </Institucional>
            <Acount>
                <h1>Minha Conta</h1> 
                <h2>Minha conta</h2> 
                <h2>Pedidos</h2> 
                <h2>Carrinho</h2> 
                <h2>Finalizar compra</h2> 
            </Acount>
            <Logo />

         
     </Container>

    )
}

const Container = styled.div`
    position:fixed;
    bottom:0;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
   
    h1{
        font-size: 15px;
        border-bottom: 1px solid #D3D3D3;
    }
    h2{
        font-size: 10px;
        color:#D3D3D3;
    }
`
const Institucional = styled.div`

`


const Acount = styled.div`


`