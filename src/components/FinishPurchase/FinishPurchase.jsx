import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import AdressContext from "../../contexts/AdressContext";
import { useContext, useState } from "react";
import { HomeContainer } from "../Home/Home";
import { Link } from "react-router-dom";
import { Button } from "../ShoppingCart/ShoppingCart.js";
import CartContext from "../../contexts/CartContext";
import axios from "axios";

export default function FinishPurchase() {
    const { dataadress } = useContext(AdressContext);
    const { dados } = useContext(UserContext);
    const { cart } = useContext(CartContext);

    async function finishPurchase() {
        const response = await axios.post("https://emporio-driven.herokuapp.com/compras", cart, {
            headers: {
                "Authorization": `Bearer ${dados.token}`,
                "email": `${dados.email}` 
            }
        });
        console.log(response.data);
        setTimeout(() => alert("Compra efetuada com sucesso!", 2000));
    }

    if (dados.length === 0 || dataadress.length === 0) {
        return (
            <HomeContainer>
                <Link to={"/dadoscompra"} style={{textDecoration: "none"}}>
                    <h1>Preencha os dados de cobrança e de entrega adequadamente!</h1>
                </Link>
            </HomeContainer>
        )
    } else {
        return (
            <HomeContainer>
                <h1>Deseja realmente finalizar a sua compra?</h1>
                <Button onClick={finishPurchase}>Sim!</Button>
            </HomeContainer>
        );
    }
}

