import styled from "styled-components";
import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { HomeContainer } from "../Home/Home.js";
import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti"



export default function Cart() {
    const { user } = useContext(UserContext);
    setTimeout(() => console.log(cart), 5000);
    const [cart, setCart] = useState([{
        name: "Dreher",
        price: 15.90,
        image: "https://images-americanas.b2w.io/produtos/2040108649/imagens/kit-conhaque-de-gengibre-dreher-900ml-2-unidades/2040108649_1_large.jpg",
        quantity: 2
    }, {
        name: "Vinho",
        price: 22.99,
        image: "https://static.paodeacucar.com/img/uploads/1/840/579840.png",
        quantity: 3 
    }]);

    return (
        <HomeContainer>
            <CartTitle>
                <h1>Carrinho</h1>
            </CartTitle>
            <CartDisplay list={cart} />
        </HomeContainer>
    );
}

function CartDisplay({ list }) {
    if (list.length === 0) {
        return (
            <CartWrapper>
                <p>O carrinho se encontra vazio!</p>
                <Link to="/" style={{color: "#add8e6"}}>
                    <p style={{color: "#add8e6"}}>Retornar à página inicial</p>
                </Link>
            </CartWrapper>
        );
    } else {
        return (
            <>
                <CartWrapper>
                    <CartTableTitles />
                    <CartItems list={list} />
                </CartWrapper>
                <PurchaseWrapper>
                    <PurchaseContent>
                        <p>Total no carrinho</p>
                        <PurchaseSections>
                            <SubSection><p>Subtotal</p></SubSection>
                            <SubSection><p>Entrega</p></SubSection>
                            <SubSection><p>Total</p></SubSection>
                        </PurchaseSections>
                    </PurchaseContent>
                </PurchaseWrapper>
            </>
        );
    }
}

function CartTableTitles() {
    return (
        <Row>
            <Dividers></Dividers>
            <Dividers></Dividers>
            <Dividers><p>Produto</p></Dividers>
            <Dividers><p>Preço</p></Dividers>
            <Dividers><p>Quantidade</p></Dividers>
            <Dividers><p>Total</p></Dividers>
        </Row>
    );
}

function CartItems({ list }) {
    return (
        <>
            {list.map((item, index) => {
                return (
                    <Row key={index}>
                        <Dividers><TiDelete color="#bababa" size={"24px"} /></Dividers>
                        <Dividers><img src={item.image} /></Dividers>
                        <Dividers><em>{item.name}</em></Dividers>
                        <Dividers><em>R${item.price.toFixed(2)}</em></Dividers>
                        <Dividers><em>{item.quantity}</em></Dividers>
                        <Dividers><em>R${(item.price * item.quantity).toFixed(2)}</em></Dividers>
                    </Row>
                );
            })}
        </>
    );
}

const PurchaseWrapper = styled.div`
    display: flex;
    width: 90%;
    background-color: pink;
    margin-top: 50px;
    flex-direction: row;
    justify-content: flex-end;
`

const PurchaseContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #f8f8f8;
    border-radius: 5px;
    border: 1px solid #787878;
    padding: 25px;
    box-sizing: border-box;

    p {
        color: #333e48;
        font-family: "Rubik", sans-serif;
        font-weight: 500;
        font-size: 24px;
        margin-bottom: 20px;
    }
`

const PurchaseSections = styled.div`
    box-sizing: border-box;
    background-color: #ffffff;
    border: 1px solid #787878;
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 100%;
    border-radius: 5px;
`

const SubSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    p {
        color: #333e48;
        font-family: "Rubik", sans-serif;
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 20px;
    }
`

const CartTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 90%;
    text-align: flex-start;
    margin-top: 15px;
    margin-bottom: 25px;

    h1 {
        color: #333e48;
        font-family: "Rubik", sans-serif;
        font-weight: 500;
        font-size: 32px;
    }
`

const CartWrapper = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;

    p {
        color: #333e48;
        font-family: "Rubik", sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 30px;
    }
`

const Row = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    border-bottom: 1px solid #d9d9d9;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;

    &:last-child {
        border: none;
    }
`

const Dividers = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
        width: 65%;
        height: 65%;
    }

    em {
        font-size: 18px;
        font-weight: 300;
        font-family: "Rubik", sans-serif;
    }

    p {
        font-size: 20px;
        font-weight: 400;
    }

    &:first-child {
        width: 8%;
    }

    &:nth-child(2) {
        width: 16%;
    }

    &:nth-child(3) {
        width: 33%;
    }

    &:nth-child(4) {
        width: 13%;
    }

    &:nth-child(5) {
        width: 17%;
    }

    &:nth-child(6) {
        width: 13%;
    }

`