import { Link } from "react-router-dom";
import {Content, Container} from "./Us"
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
