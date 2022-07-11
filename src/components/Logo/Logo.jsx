import {Container, First, Second, Inside} from "./Logo"
import { Link } from "react-router-dom"
export default function Logo(){
    return(
        <Container>
            <Link to={`/`}>
                <Inside>
                    <First>Empório</First> 
                    <Second>Driven</Second>
                </Inside>
            </Link>
        </Container>
    )
}
