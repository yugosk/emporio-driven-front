import styled from "styled-components"
export const Container = styled.div`
        width: 70%;
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
export const Registration = styled.div`
`
export const Loginrender = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
export const Box = styled.div`
    border: 0.8px solid #D3D3D3;
    width:450px;
    padding: 10px 50px 20px 20px;
    input{
        border: 1px solid #ccc;
        border-color: #D3D3D3;
        margin: 10px 50px 20px 20px;
        height: 40px;
        width: 380px;
        font-size: 10px;
    }
    h4{
        margin: 10px 50px 20px 20px;
        font-size:30px;
    }
    h5{
        margin: 5px 50px 3px 20px;
        font-size:15px;
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