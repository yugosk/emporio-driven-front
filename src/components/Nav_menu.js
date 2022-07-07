import styled from "styled-components"

export default function NavMenu(){
    return(
        <Container>
             <h3>Vinhos</h3>
             <h3>Destilados</h3>
             <h3>Espumantes</h3>
             <h3>Cervejas</h3>
        </Container>
    )
}

const Container = styled.div`
    position:fixed;
    top:85px;
    background-color:#282F29;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    padding: 10px 50px 20px 20px;
h3{
    color: #ffffff;
}
       
`