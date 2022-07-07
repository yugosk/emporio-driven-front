import styled from "styled-components"
export default function Logo(){
    return(
        <Container>
             <First>Empório</First> 
             <Second>Driven</Second>
        </Container>
    )
}

const Container = styled.div`
        padding-rigth: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;

       
`
const First = styled.div`
font-family: 'Bitter', serif;
color:#F58A3C;
font-size: 40px;



`
const Second = styled.div`
font-family: 'Molle', cursive;
color:#B23428;
font-size: 60px;
`