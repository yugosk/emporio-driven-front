import { IoMdWine, IoMdBeer } from "react-icons/io";
import { BiDrink } from "react-icons/bi";
import { GiBeerBottle } from "react-icons/gi";
import {Container, Content, Categories, Icon, Cat} from "./Nav_menu"
export default function NavMenu(){
    return(
        <Container>
          <Content>
                <Categories>
                    <Icon><IoMdWine color="#ffffff" size={"24px"} /></Icon>
                    <Cat>Vinho </Cat>
                </Categories>
                <Categories>
                    <Icon><GiBeerBottle color="#ffffff" size={"24px"} /></Icon>
                    <Cat>Destilados  </Cat>
                </Categories>
                <Categories>
                    <Icon><BiDrink color="#ffffff" size={"24px"} /></Icon>
                    <Cat>Espumantes  </Cat>
                </Categories>
                <Categories>
                    <Icon><IoMdBeer color="#ffffff" size={"24px"} /></Icon>
                    <Cat>Cervejas  </Cat>
                </Categories>
            </Content>
        </Container>
    )
}
