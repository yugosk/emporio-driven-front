import styled from "styled-components"
export const Container = styled.div`
        width: 80%;
        margin-left:20%;
        margin-top:90px;
        overflow-y: scroll;
        scrollbar-width: none;
    h3{
        color: #ffffff;
        overflow-y: scroll;
        scrollbar-width: none;
    }
    h1{
        margin: 40px 50px 20px 20px;
        font-size:40px;
    }
`
export const Login = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    margin: 10px 50px 20px 20px;
    h5, input{
        margin: 1px 5px 1px 0px;
    }
    input{
        margin: 5px 5px 5px 5px;
        border: 1px solid #ccc;
        border-color: #D3D3D3;
        margin: 5px 50px 5px 20px;
        height: 30px;
        width: 380px;
        font-size: 10px;
    }
`
export const Button = styled.div`
    text-align: center;
    z-index: 1;
    width: 130px;
    margin-left:5%;
    height: 40px;
    position: relative;
    display:flex;
    justify-content:center;
    align-itens:center;
    color: inherit;
    color: #ffffff;
    background-color:#B23428;
`