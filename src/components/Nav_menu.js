import styled from "styled-components"
import { IoMdArrowDropdown, IoMdWine, IoMdBeer } from "react-icons/io";
import { BiDrink } from "react-icons/bi";
import { GiBeerBottle } from "react-icons/gi";




export default function NavMenu(){
    return(
        <Container>
          <Content>
             <Categories>
                <Icon><IoMdWine color="#ffffff" size={"24px"} /></Icon>
                <Cat>Vinho </Cat>
                <Icon><IoMdArrowDropdown color="#ffffff" size={"24px"} /></Icon>
             </Categories>
            
             <Categories>
                <Icon><GiBeerBottle color="#ffffff" size={"24px"} /></Icon>
                <Cat>Destilados  </Cat>
                <Icon><IoMdArrowDropdown color="#ffffff" size={"24px"} /></Icon>
             </Categories>
             
             <Categories>
                <Icon><BiDrink color="#ffffff" size={"24px"} /></Icon>
                <Cat>Espumantes  </Cat>
                <Icon><IoMdArrowDropdown color="#ffffff" size={"24px"} /></Icon>
             </Categories>
             <Categories>
             <Icon><IoMdBeer color="#ffffff" size={"24px"} /></Icon>
                <Cat>Cervejas  </Cat>
                <Icon><IoMdArrowDropdown color="#ffffff" size={"24px"} /></Icon>
             </Categories>
             </Content>
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    top:80px;
    background-color:#282F29;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    padding: 10px 50px 20px 20px;
h3{
  
}
       
`
const Icon = styled.div`

    height: 25px;
    width:30px;
`
const Categories = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;

`

const Cat = styled.div`
color: #ffffff;
`
const Content = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 60%;
`