import { IoMdWine, IoMdBeer } from "react-icons/io";
import { BiDrink } from "react-icons/bi";
import { GiBeerBottle } from "react-icons/gi";
import {Container, Content, Categories, Icon, Cat} from "./Nav_menu"
import { Link } from "react-router-dom";
export default function NavMenu(){
    return(
        <Container>
          <Content>
                 <Link to={`/vinho`}>
                    <Categories>
                        <Icon><IoMdWine color="#ffffff" size={"24px"} /></Icon>
                        <Cat>Vinho </Cat>
                    </Categories>
                </Link> 
                <Link to={`/destilado`}>
                    <Categories>
                        <Icon><GiBeerBottle color="#ffffff" size={"24px"} /></Icon>
                        <Cat>Destilados  </Cat>
                    </Categories>
                </Link> 
                <Link to={`/espumante`}>
                    <Categories>
                        <Icon><BiDrink color="#ffffff" size={"24px"} /></Icon>
                        <Cat>Espumantes  </Cat>
                    </Categories>
                </Link> 
                <Link to={`/cerveja`}>
                    <Categories>
                        <Icon><IoMdBeer color="#ffffff" size={"24px"} /></Icon>
                        <Cat>Cervejas  </Cat>
                    </Categories>
                </Link> 
            </Content>
        </Container>
    )
}
