import {Container, First, Second, Inside} from "./Logo"
import { Link } from "react-router-dom"
export default function Logo(){
    return(
        <Container>
            <Link to={`/`} style={{paddingLeft: 13, textDecoration: 'none'}}>
                <Inside>
                    <First>Empório</First> 
                    <Second>Driven</Second>
                </Inside>
            </Link>
        </Container>
    )
}
