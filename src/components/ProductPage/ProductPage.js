import styled from 'styled-components';
export const Container = styled.div`
    margin-left:20%;
    margin-top:80px;
    width:80%;
    overflow-y: scroll;
    scrollbar-width: none;
    h1{
        font-size:10px;
    }
`
export const Imagem = styled.div`
background-color:#F5F5F0;
    width: 300px;
    height: 420px;
`
export const Product = styled.div`
    margin-top:15px;
    display:flex;
    justify-content:center;
    align-itens:center;
    margin-bottom:40px;
`
export const Button = styled.div`
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
    background-color:#B23428;'`
export const ButtonRelated = styled.div`
    display:none;
`
export const Related = styled.div`
h3{
    width:80%;
    margin-bottom:40px;
    border-bottom: 1px solid #D3D3D3;
}
`
export const Buy = styled.div`
    h4{
        color:#79A567;
        font-size:10px;
        margin-bottom:35px;
    }
`
export const Buy2 = styled.div`
    display:flex;
    justify-content:flex-start;
    align-itens:center;
    input{
        width:40px;
        margin-right: 15px;
    }
`
export const Details = styled.div`
    border-bottom: 1px solid #D3D3D3;
    h2{
        width:400px;
        font-size:40px;
        margin-top:40px;
        margin-bottom:40px;
    }
    h3{
        width:150px;
        font-size:30px
    }
`
export const Info = styled.div`
    display:flex;
    justify-content:space-between;
    align-itens:center;
    flex-direction: column;
    height: 420px;
    margin-left: 30px;
`
export const RelatedProduct = styled.div`
    width:150px;
    height: 240px;

    display:flex;
    justify-content:space-between;
    align-itens:center;
    padding:10px;
    text-align: center;
    
`
export const EachProduct = styled.div`
    width: 230px;
    background-color:#F5F5F0;
    margin-left:20px;
    display:flex;
    justify-content:space-between;
    align-itens:center;
    flex-direction: column;
    width:80%;
    &:hover ${ButtonRelated} {
        display:  block;
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
      }
      &:hover h5 {
        display:  none;
       }
`
export const Image = styled.div`
    width:150px;
    height: 140px;
 `
 export const StyledProduct = styled.div`
 `
 export const ProductList = styled.div``