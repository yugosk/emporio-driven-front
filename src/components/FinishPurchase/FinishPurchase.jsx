import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import AdressContext from "../../contexts/AdressContext";
import { useContext, useState } from "react";
import { HomeContainer } from "../Home/Home";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ShoppingCart/ShoppingCart.js";
import CartContext from "../../contexts/CartContext";
import axios from "axios";

export default function FinishPurchase() {
    const { dados } = useContext(UserContext);
    const { cart } = useContext(CartContext);
    const [cpf, setCpf] = useState(null);
    const navigate = useNavigate();

    async function finishPurchase() {
        const cpfRegex = /^[0-9]+$/;
        if (cpfRegex.test(cpf) && cpf.length === 11) {
            const promise = axios.post("https://emporio-driven.herokuapp.com/compras", cart, {
                headers: {
                    "Authorization": `Bearer ${dados.token}`,
                    "cpf": `${cpf}` 
                }
            });
            promise.then((res) => {
                alert("Compra efetuada com sucesso!");
            })
            promise.catch((err) => {
                alert("Verifique se os dados de pagamento e entrega estão cadastrados!");
                navigate("/dadoscompra");
            })
        } else {
            alert("Preencha o CPF adequadamente!");
        }
    }
        return (
            <HomeContainer>
                <h1>Deseja realmente finalizar a sua compra?</h1>
                <input
                type="string"
                placeholder="CPF"
                value={cpf}
                onChange={e => setCpf(e.target.value)} />
                <Button onClick={finishPurchase}>Sim!</Button>
            </HomeContainer>
        );
}

