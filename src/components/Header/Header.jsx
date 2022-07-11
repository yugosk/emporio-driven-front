import Logo from "../Logo/Logo.jsx";
import { Link } from "react-router-dom";
import { IoMdPerson, IoIosCart } from "react-icons/io";
import{Container, Icon, Button, Search,Acount, Carts, WhiteFiller} from "./Header"
import UserContext from "../../contexts/UserContext.js";
import { useContext } from "react";
export default function Header(){

    const {dados} = useContext(UserContext);
    const nome = dados.name 
     return(
        <Container>
             <Logo />
                <>      
                   
                <Link to={`/login`} style={{ textDecoration: 'none' }}>
                <Acount>
                    <Icon>
                        <IoMdPerson color="#ffffff" size={"24px"} />
                    </Icon>
                        <h4>{ nome === "" ?  ("Faça seu login")  :  (nome)}</h4>
                    </Acount>
                </Link>
                <Link to="/carrinho">
                    <Carts>
                        <Icon><IoIosCart color="#ffffff" size={"24px"} /></Icon>
                    </Carts>
                </Link>
                </>

            <WhiteFiller></WhiteFiller>
     </Container>
    )
}
