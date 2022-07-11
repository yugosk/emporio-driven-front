import Logo from "../Logo/Logo.jsx";
import { Link } from "react-router-dom";
import { IoMdPerson, IoIosCart } from "react-icons/io";
import{Container, Icon, Button, Search,Acount, Carts, WhiteFiller} from "./Header"
export default function Header(){
     return(
        <Container>
             <Logo />
                <Search>
                    <input placeholder="Pesquisar produto ..." type="text" />
                     <Button>Buscar</Button>
                </Search>
                   <Link to={`/minhaconta`} style={{ textDecoration: 'none' }}>
                <Acount>
                    <Icon>
                        <IoMdPerson color="#ffffff" size={"24px"} />
                    </Icon>
                        <h4>Faça seu login ou cadastre-se</h4>
                    </Acount>
                </Link>
                <Link to="/carrinho">
                    <Carts>
                        <Icon><IoIosCart color="#ffffff" size={"24px"} /></Icon>
                    </Carts>
                </Link>
            <WhiteFiller></WhiteFiller>
     </Container>
    )
}
