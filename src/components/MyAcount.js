import styled from "styled-components"
import { Link } from "react-router-dom";

export default function MyAcount(){
    return(
        <Container>
            <h1> <Link to={`/`} style={{ textDecoration: 'none' }}>Home/ </Link>
                Minha conta</h1>
            <h1>Home/ Minha conta</h1>
            <h1>Entrar</h1>
            <form>
                 <input placeholder="Pesquisar produto ..." type="text" />
                <Button>Buscar</Button>
               
            </form>
        </Container>
    )
}

const Container = styled.div`
   
    margin-top:150px;
    background-color:#282F29;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    padding: 10px 50px 20px 20px;
h3{
    color: #ffffff;
}
       
`
const  Button = styled.div`
    background-color:#B23428;
    color: #ffffff; 
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 80px;
    border-top-right-radius: 40px 30px;
    border-bottom-right-radius: 40px 30px;
`