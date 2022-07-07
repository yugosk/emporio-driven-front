import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Us(){
    return(
        <Container>
            <Content>
            <h1> <Link to={`/`} style={{ textDecoration: 'none' }}>Home/ </Link>
                Quem Somos</h1>
           <h1>Somos estudantes de full Stack da Driven, apaixonados por tecnologia, realizando nosso primeiro trabalho full Stack</h1>
            </Content>
           </Container>
    )
}

const Container = styled.div`
   
    margin-top:50px;
  
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
   
 
h3{
    color: #ffffff;
}
       
`

const Content = styled.div`
   
    margin-top:150px;
 
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 25px;
    flex-direction: column;
    padding: 10px 50px 20px 20px;
h3{
    color: #ffffff;
}
       
`