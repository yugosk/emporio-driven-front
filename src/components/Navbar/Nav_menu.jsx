import { IoMdWine, IoMdBeer } from "react-icons/io";
import { BiDrink } from "react-icons/bi";
import { GiBeerBottle } from "react-icons/gi";
import {Container, Content, Categories, Icon, Cat} from "./Nav_menu"
import { Link } from "react-router-dom";
export default function NavMenu(){
    return(
        <Container>
          <Content>
                <Categories>
                    <Link to="/vinho" style={{ textDecoration: "none" }}>
                        <Icon><IoMdWine color="#ffffff" size={"24px"} /></Icon>
                        <Cat>Vinho </Cat>
                    </Link>
                </Categories>
                <Categories>
                    <Link to="/destilado" style={{ textDecoration: "none" }}>
                        <Icon><GiBeerBottle color="#ffffff" size={"24px"} /></Icon>
                        <Cat>Destilados  </Cat>
                    </Link>
                </Categories>
                <Categories>
                    <Link to="/espumante" style={{ textDecoration: "none" }}>
                        <Icon><BiDrink color="#ffffff" size={"24px"} /></Icon>
                        <Cat>Espumantes  </Cat>
                    </Link>
                </Categories>
                <Categories>
                    <Link to="/cerveja" style={{ textDecoration: "none" }}>
                        <Icon><IoMdBeer color="#ffffff" size={"24px"} /></Icon>
                        <Cat>Cervejas  </Cat>
                    </Link>
                </Categories>
            </Content>
        </Container>
    )
}
