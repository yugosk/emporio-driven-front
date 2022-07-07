import styled from "styled-components";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { IoIosCart } from "react-icons/io";


export default function Header(){
 
    return(
        <Container>
             <Logo />
             
             <Search>
                    <input placeholder="Pesquisar produto ..." type="text" />
                     <Button>Buscar</Button>
                </Search>
                   <Link to={`/MyAcount`} style={{ textDecoration: 'none' }}>
                <Acount>
                    <Icon>
                        <IoMdPerson color="#ffffff" size={"24px"} />
                    </Icon>
                        <h4>Faça seu login ou cadastre-se</h4>
                    </Acount>
                </Link>
            
             <Carts>
                 <Icon><IoIosCart color="#ffffff" size={"24px"} /></Icon>
                 <h4>R$</h4>
            </Carts>

     </Container>

    )
}

const Container = styled.div`
    position:fixed;
    top:0;
    width: 90%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    h1{
        font-size: 20px;
    }

    
`

const Icon = styled.div`
    background-color:#B23428;
    border-radius: 100%;
    height: 25px;
    width:25px;
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
   
const Search = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    input{
        border-color: #B23428;
        height: 40px;
        width: 300px;
        border-top-left-radius: 40px 30px;
        border-bottom-left-radius: 40px 30px;
        font-size: 10px;
             
    }
`
const Acount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    h4{
        margin-left:10px;
        font-color: black;
        font-size: 15px;
    }

`
const Carts = styled.div`
display: flex;
    justify-content: space-between;
    align-items: center;
    h4{
        margin-left:10px;
        font-color: black;
        font-size: 10px;
    }
`